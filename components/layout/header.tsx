"use client";

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur-xl">
      <div className="flex items-center gap-3">
        <button className="rounded-lg p-2 transition hover:bg-accent lg:hidden">
          <Menu size={20} />
        </button>

        <span className="text-sm font-medium text-muted-foreground">
          BiteLoop Admin
        </span>
      </div>

      {/* Right side intentionally empty for now.
         Notifications, profile and theme live in DashboardHeader. */}
      <div />
    </header>
  );
}