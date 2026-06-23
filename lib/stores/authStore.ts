import { create } from "zustand";
import { AuthStore } from "@/types/store/auth-store";
import { ADMIN_EMAILS } from "@/lib/constants/admin-emails";

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
    const res = await fetch("/api/auth/signin", {
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