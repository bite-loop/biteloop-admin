"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background" />
    );
  }

  return (
    <button
      onClick={() =>
        setTheme(
          resolvedTheme === "dark" ? "light" : "dark"
        )
      }
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-all duration-200 hover:bg-accent"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}