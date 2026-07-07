"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import NotificationButton from "@/components/dashboard/notification-button";
import ThemeToggle from "@/components/dashboard/theme-toggle";
import ProfileMenu from "@/components/dashboard/profile-menu";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b px-8 backdrop-blur-xl">
      {/* Left */}
      <div className="flex items-center gap-5">
        <button className="rounded-xl p-2 transition hover:bg-neutral-100 lg:hidden">
          <Menu size={22} />
        </button>

        <Image
          src="/app-logo.png"
          alt="BiteLoop"
          width={46}
          height={46}
          className="h-11 w-auto"
        />

        <div className="leading-tight">
          <h1 className="text-lg font-bold tracking-tight ">
            BiteLoop Admin
          </h1>

          <p className="text-sm text-neutral-500">
            Platform Control Center
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Status */}
        <div className="hidden items-center rounded-full border px-4 py-2 lg:flex">
          <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

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