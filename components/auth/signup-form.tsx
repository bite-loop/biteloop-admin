"use client";

import { useState } from "react";
import {
  UserRound,
  Mail,
  BriefcaseBusiness,
  Lock,
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
export default function SignupForm() {
  const router = useRouter();

const signup = useAuthStore((s) => s.signup);

  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
const [jobTitle, setJobTitle] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [acceptTerms, setAcceptTerms] = useState(false);
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [rememberMe, setRememberMe] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleSignup = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {

      if (!acceptTerms) {
  alert("Please accept the Terms & Privacy Policy.");
  return;
}

if (password !== confirmPassword) {
  alert("Passwords do not match.");
  return;
}

if (
  !fullName ||
  !email ||
  !jobTitle ||
  !password
) {
  alert("Please fill all fields.");
  return;
}

      setLoading(true);
await signup(
  fullName,
  email,
  jobTitle,
  password
);

alert("Account created successfully!");

router.push("/login");
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
            Create Account
          </h1>

          <p className={`${bodyFont.className} mt-4 text-base text-red-100/90`}>
            Create your BiteLoop Admin account
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleSignup}
          className="mt-12 space-y-4"
        >
            <div className="relative">
  <UserRound
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
  />

  <input
    type="text"
    placeholder="Full Name"
    value={fullName}
    onChange={(e) => setFullName(e.target.value)}
    className={`${bodyFont.className}
h-12
w-full
rounded-xl
bg-white/95
pl-12
pr-4
text-sm
font-medium
text-neutral-900
placeholder:text-neutral-400
shadow-sm
outline-none
transition-all
duration-300
focus:bg-white
focus:ring-4
focus:ring-white/25`}
  />
</div>

          {/* Email */}

          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
            />

            <input
              type="email"
              placeholder="Work email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className={`${bodyFont.className} h-11 w-full rounded-2xl bg-white/95 pl-12 pr-6 text-sm font-medium text-neutral-900 shadow-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:bg-white focus:ring-4 focus:ring-white/25`}
            />

          </div>

<div className="relative">
  <BriefcaseBusiness
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
  />

  <input
    type="text"
    placeholder="Current Role"
    value={jobTitle}
    onChange={(e) => setJobTitle(e.target.value)}
    className={`${bodyFont.className} h-11 w-full rounded-2xl bg-white/95 pl-12 pr-6 text-sm font-medium text-neutral-900 shadow-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:bg-white focus:ring-4 focus:ring-white/25`}
  />
</div>

          {/* Password */}

          <div className="relative">
<Lock
  size={18}
  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
/>

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Create password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className={`${bodyFont.className} h-11 w-full rounded-2xl bg-white/95 pl-12 pr-14 text-sm font-medium text-neutral-900 shadow-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:bg-white focus:ring-4 focus:ring-white/25`}
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500"
            >
<span className="text-xl">
  {showPassword ? "🍔" : "🛎️"}
</span>
            </button>

          </div>

<div className="relative">
  <ShieldCheck
    size={18}
    className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500"
  />

  <input
    type={showPassword ? "text" : "password"}
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
    className={`${bodyFont.className}  h-11 w-full rounded-2xl bg-white/95 pl-12 pr-14 text-sm font-medium text-neutral-900 shadow-sm outline-none transition-all duration-300 placeholder:text-neutral-400 focus:bg-white focus:ring-4 focus:ring-white/25`}
  />
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500"
            >
<span className="text-xl">
  {showPassword ? "🍔" : "🛎️"}
</span>
</button>
</div>

<label className={`${bodyFont.className} flex items-center gap-3 text-sm`}>
  <input
    type="checkbox"
    checked={acceptTerms}
    onChange={() => setAcceptTerms(!acceptTerms)}
    className="h-4 w-4 rounded"
  />

  <span>
    I agree to the{" "}
    <button
      type="button"
      className="font-semibold underline"
    >
      Terms
    </button>{" "}
    &{" "}
    <button
      type="button"
      className="font-semibold underline"
    >
      Privacy Policy
    </button>
  </span>
</label>
          {/* Login */}

          <button
            disabled={loading}
className={`${bodyFont.className} h-16 w-full rounded-2xl bg-gradient-to-r from-red-500 to-red-400 text-lg font-semibold shadow-[0_10px_40px_rgba(255,80,80,.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(255,80,80,.45)] active:scale-[0.99]`}
          >
            {loading
              ? "Creating Account..."
              : "CREATE ACCOUNT"}
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

<div className={`${bodyFont.className} text-center text-sm text-red-100/90`}>
  Already have an account?{" "}
  <button
    type="button"
    onClick={() => router.push("/login")}
    className="font-semibold text-white underline underline-offset-4 hover:text-red-200"
  >
    Login
  </button>
</div>

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