"use client";

import NotificationButton from "@/components/dashboard/notification-button";
import ThemeToggle from "@/components/dashboard/theme-toggle";
import ProfileMenu from "@/components/dashboard/profile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-end border-b px-8 backdrop-blur-xl">

      <div className="flex items-center gap-4">

        <div className="hidden items-center rounded-full border px-4 py-2 lg:flex">
          <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

          <span className="text-xs font-semibold text-emerald-700">
            System Online
          </span>
        </div>

        <div className="hidden h-8 w-px bg-neutral-200 lg:block" />

        <NotificationButton />

        <ThemeToggle />

        <ProfileMenu />

      </div>

    </header>
  );
}