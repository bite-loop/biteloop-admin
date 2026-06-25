"use client";

import { Moon } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-all hover:bg-accent">
      <Moon size={18} />
    </button>
  );
}