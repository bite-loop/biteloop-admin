"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/stores/authStore";

export default function Header() {
  const router = useRouter();
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = async () => {
    await logout();
    router.push("/sign-in");
  };

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Dashboard
        </h2>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-lg border px-4 py-2 text-sm font-medium hover:bg-accent"
      >
        Logout
      </button>
    </header>
  );
}