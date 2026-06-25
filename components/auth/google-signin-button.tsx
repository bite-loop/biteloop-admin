"use client";

import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuthStore } from "@/lib/stores/authStore";

export default function GoogleSignInButton() {
  const router = useRouter();

  const loginWithGoogle = useAuthStore(
    (state: any) => state.loginWithGoogle
  );

  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    try {
      setLoading(true);

      await loginWithGoogle();

      router.replace("/dashboard");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleGoogle}
      disabled={loading}
      className="flex h-16 w-full items-center justify-center gap-4 rounded-2xl bg-white text-lg font-semibold text-neutral-800 shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2
            size={20}
            className="animate-spin"
          />

          Signing In...
        </>
      ) : (
        <>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="h-6 w-6"
          />

          Sign in with Google
        </>
      )}
    </button>
  );
}