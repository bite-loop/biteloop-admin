import { create } from "zustand";
import { AuthStore } from "@/types/store/auth-store";
import { ADMIN_EMAILS } from "@/lib/constants/admin-emails";
import { auth, googleProvider } from "@/lib/firebase/config";
import { signInWithPopup } from "firebase/auth";

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  fetchProfile: async () => {
    try {
      set({ isLoading: true });

      const res = await fetch("/api/user/profile", {
        credentials: "include",
      });

      if (res.ok) {
        const user = await res.json();
         if (!ADMIN_EMAILS.includes(user.email)) {
  set({
    user: null,
    isAuthenticated: false,
    isLoading: false,
  });

  throw new Error("Unauthorized");
}
        set({
          user,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error(error);

      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });
    }
  },

  login: async (email, password) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error);
    }

    await get().fetchProfile();
  },

signup: async (
  fullName: string,
  email: string,
  jobTitle: string,
  password: string
): Promise<void> => {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      fullName,
      email,
      jobTitle,
      password,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error);
  }

  return data;
},

  loginWithGoogle: async () => {
  try {
    const result = await signInWithPopup(
      auth,
      googleProvider
    );

    const idToken = await result.user.getIdToken();

    const res = await fetch("/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error);
    }

    await get().fetchProfile();
  } catch (error: any) {
    throw new Error(
      error.message || "Google login failed"
    );
  }
},

  logout: async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    set({
      user: null,
      isAuthenticated: false,
      isLoading: false,
    });
  },
  
}));