"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative hidden w-80 lg:block">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      <input
        type="text"
        placeholder="Search users, restaurants, orders..."
        className="h-11 w-full rounded-xl border border-border bg-background pl-11 pr-4 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/10"
      />
    </div>
  );
}