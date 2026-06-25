"use client";

import { Bell } from "lucide-react";

export default function NotificationButton() {
  return (
    <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-all hover:bg-accent">
      <Bell size={18} />

      <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-red-500" />
    </button>
  );
}