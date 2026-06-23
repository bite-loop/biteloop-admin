"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/authStore";
import { useEffect } from "react";


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const router = useRouter();

const login = useAuthStore((s) => s.login);

const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

const user = useAuthStore((s) => s.user);
const fetchProfile = useAuthStore((s) => s.fetchProfile);

useEffect(() => {
  fetchProfile();
}, [fetchProfile]);

useEffect(() => {
  if (user) {
    router.replace("/dashboard");
  }
}, [user, router]);

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  try {
    setError("");
    setIsLoading(true);

    await login(email, password);

    router.push("/dashboard");
  } catch (err: any) {
    setError(err.message || "Login failed");
  } finally {
    setIsLoading(false);
  }
};
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            BiteLoop Admin
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue
          </p>
        </div>

       <form
  onSubmit={handleSubmit}
  className="space-y-4"
>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border bg-background px-4 py-3 outline-none"
              placeholder="admin@biteloop.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border bg-background px-4 py-3 outline-none"
              placeholder="••••••••"
            />
          </div>

{error && (
  <p className="text-sm text-red-500">
    {error}
  </p>
)}

          <button
            type="submit"
            className="w-full rounded-xl bg-primary py-3 text-primary-foreground font-medium"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}