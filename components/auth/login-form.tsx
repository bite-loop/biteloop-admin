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
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";

const headingFont = Manrope({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
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
<section className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-br from-[#C8102E] via-[#D9142F] to-[#E41E3F] px-14 py-10 text-white">

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
  src="/new-logo.png"
  alt="BiteLoop"
  className="h-11 w-auto"
/>

          <span className={`${bodyFont.className} text-sm font-medium uppercase tracking-[0.35em] text-red-100`}>
            ADMIN PORTAL
          </span>
        </div>

        {/* Title */}

        <div className="mt-16 text-center">
          <h1 className={`${headingFont.className} text-5xl font-extrabold tracking-tight`}>
            Welcome Back!
          </h1>

          <p className={`${bodyFont.className} mt-4 text-base text-red-100/90`}>
            Sign in to continue to your admin dashboard
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="mt-16 space-y-5"
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
              className={`${bodyFont.className} h-14 w-full rounded-2xl bg-white/95 pl-14 pr-6 text-[15px] font-medium text-neutral-900 shadow-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:bg-white focus:ring-4 focus:ring-white/25`}
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
<span className="text-2xl">
  {showPassword ? "🍔" : "🛎️"}
</span>
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
                className={`${bodyFont.className} flex items-center gap-3 text-sm font-medium`}
              />

              Remember me

            </label>

            <button
              type="button"
              className={`${bodyFont.className} text-sm font-medium hover:underline`}
            >
              Forgot password?
            </button>

          </div>

          {/* Login */}

          <button
            disabled={loading}
className={`${bodyFont.className} h-16 w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-400 text-lg font-semibold shadow-[0_10px_40px_rgba(255,80,80,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(255,80,80,.45)] active:scale-[0.99]`}
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
<div className="mt-auto flex justify-center pt-8">
  <div className="flex items-center gap-4">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 backdrop-blur-md shadow-lg">
      <ShieldCheck size={22} />
    </div>

    <div>
<p className={`${bodyFont.className} text-base font-semibold`}>
  Secure admin access only
</p>

<p className={`${bodyFont.className} mt-1 text-sm text-red-100/80`}>
  All activities are monitored and logged.
</p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}