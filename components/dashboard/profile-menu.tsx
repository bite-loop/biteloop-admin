"use client";

import { ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/stores/authStore";

export default function ProfileMenu() {
  const user = useAuthStore((state) => state.user);

  if (!user) return null;

  const initials = user.fullName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <button className="group flex items-center gap-4 rounded-2xl border border-neutral-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-lg">
      {/* Avatar */}
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 via-red-500 to-red-400 text-sm font-bold text-white shadow-md">
        {initials}
      </div>

      {/* User Details */}
      <div className="hidden min-w-[160px] text-left lg:block">
        <h3 className="truncate text-sm font-semibold text-neutral-900">
          {user.fullName}
        </h3>

        <p className="truncate text-xs text-neutral-500">
          {user.jobTitle}
        </p>
      </div>

      {/* Divider */}
      <div className="hidden h-8 w-px bg-neutral-200 lg:block" />

      {/* Dropdown Icon */}
      <ChevronDown
        size={18}
        className="hidden text-neutral-400 transition-all duration-300 group-hover:rotate-180 group-hover:text-red-500 lg:block"
      />
    </button>
  );
}