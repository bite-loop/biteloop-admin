"use client";

export default function ProfileMenu() {
  return (
    <button className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2 transition-all hover:bg-accent">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
        A
      </div>

      <div className="hidden text-left lg:block">
        <p className="text-sm font-medium">Admin</p>
        <p className="text-xs text-muted-foreground">
          Super Admin
        </p>
      </div>
    </button>
  );
}