"use client";

import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
} from "lucide-react";
import GoogleSignInButton from "./google-signin-button";
import { useAuthStore } from "@/lib/stores/authStore";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const login = useAuthStore((s) => s.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await login(email, password);

      router.replace("/dashboard");
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-600 to-red-500 backdrop-blur-xl from-red-700 via-red-600 to-red-500 p-10 text-white lg:p-14">

      {/* Decorative Top Curve */}

      <svg
        className="absolute left-0 top-0 h-44 w-full opacity-20"
        viewBox="0 0 800 220"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0 C200 20 320 220 800 80"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Decorative Bottom Curve */}

      <svg
        className="absolute bottom-0 left-0 h-44 w-full opacity-20"
        viewBox="0 0 800 220"
        preserveAspectRatio="none"
      >
        <path
          d="M0 150 C250 20 550 260 800 120"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <div className="relative z-10 flex h-full flex-col">

        {/* Header */}

        <div className="flex items-center justify-between">
<img
  src="/logo-white.png"
  alt="BiteLoop"
  className="h-14 w-auto"
/>

          <span className="text-xl font-bold tracking-widest">
            ADMIN PORTAL
          </span>
        </div>

        {/* Title */}

        <div className="mt-24 text-center">
          <h1 className="text-6xl font-black">
            Welcome Back!
          </h1>

          <p className="mt-5 text-2xl text-red-100">
            Sign in to continue to your admin dashboard
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="mt-16 space-y-6"
        >

          {/* Email */}

          <div className="relative">

            <Mail
              size={24}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="h-16 w-full rounded-2xl bg-white pl-16 pr-6 text-lg text-black outline-none"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              size={24}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-500"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="h-16 w-full rounded-2xl bg-white pl-16 pr-16 text-lg text-black outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500"
            >
              {showPassword ? (
                <EyeOff size={24} />
              ) : (
                <Eye size={24} />
              )}
            </button>

          </div>

          {/* Remember */}

          <div className="flex items-center justify-between">

            <label className="flex items-center gap-3 text-lg">

              <input
                checked={rememberMe}
                onChange={() =>
                  setRememberMe(!rememberMe)
                }
                type="checkbox"
                className="h-5 w-5 rounded"
              />

              Remember me

            </label>

            <button
              type="button"
              className="font-semibold hover:underline"
            >
              Forgot password?
            </button>

          </div>

          {/* Login */}

          <button
            disabled={loading}
className="
h-16
w-full
rounded-2xl
bg-gradient-to-r
from-red-500
to-red-400
text-2xl
font-bold
shadow-[0_10px_40px_rgba(255,80,80,.35)]
transition-all
duration-300
hover:-translate-y-1
hover:shadow-[0_18px_60px_rgba(255,80,80,.45)]
active:scale-[0.99]
"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

          {/* Divider */}

          <div className="flex items-center gap-5 py-2">

            <div className="h-px flex-1 bg-red-300" />

            <span className="text-lg">
              OR
            </span>

            <div className="h-px flex-1 bg-red-300" />

          </div>

          {/* Google */}

          <GoogleSignInButton />

        </form>

        {/* Footer */}

        <div className="mt-auto flex items-center gap-5 pt-14">

          <div className="rounded-full bg-white/95  transition-all
duration-300
focus:ring-4
focus:ring-white/30
focus:border-transparent/20 p-3 backdrop-blur">

            <ShieldCheck size={30} />

          </div>

          <div>

            <p className="text-xl font-semibold">
              Secure admin access only
            </p>

            <p className="text-red-100">
              All activities are monitored and logged.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}