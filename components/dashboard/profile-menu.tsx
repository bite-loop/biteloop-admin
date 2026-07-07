"use client";

import { ChevronDown } from "lucide-react";
import { useAuthStore } from "@/lib/stores/authStore";
import { Button } from "../ui/button";

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
    <Button className="group flex h-14 items-center gap-2.5 border rounded-full  px-3 pr-4 shadow-sm  transition-all duration-300 hover:shadow-lg hover:ring-red-200">
      {/* Avatar */}
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-300">
  <span className="text-sm font-extrabold leading-none">
    {initials}
  </span>
</div>
      {/* Info */}
<div className="hidden text-left lg:block">
  <p className="max-w-[130px] truncate text-[15px] font-semibold leading-none ">
    {user.fullName}
  </p>

  <p className="mt-1 text-xs font-medium opacity-60">
    {user.jobTitle}
  </p>
</div>

      {/* Arrow */}
      <ChevronDown
        size={18}
        className="ml-1 text-neutral-400 transition-all duration-300 group-hover:text-neutral-700"
      />
    </Button>
  );
}