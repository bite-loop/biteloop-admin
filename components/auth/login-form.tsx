"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import PasswordInput from "./password-input";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/authStore";
import GoogleSignInButton from "./google-signin-button";

export default function LoginForm() {
  const router = useRouter();

  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(email, password);

      router.replace("/dashboard");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex items-center justify-center p-12">
      <div className="w-full max-w-md">

        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Welcome Back 👋
          </h2>

          <p className="mt-3 text-gray-500">
            Sign in to continue managing the BiteLoop ecosystem.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Email */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                placeholder="admin@biteloop.com"
                className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 pl-12 pr-4 outline-none transition focus:border-red-500 focus:bg-white"
              />
            </div>
          </div>

          {/* Password */}

<PasswordInput
  value={password}
  onChange={setPassword}
/>

          {/* Remember */}

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300"
              />

              Remember Me
            </label>

            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-700"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login */}

          <button
            disabled={loading}
            className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-red-600 text-white transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}

            {!loading && (
              <ArrowRight size={18} />
            )}
          </button>

          {/* Divider */}

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-4 text-sm text-gray-400">
                OR
              </span>
            </div>
          </div>


<GoogleSignInButton />


        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Admin Access Only • Protected by Firebase Authentication
        </p>

      </div>
    </section>
  );
}