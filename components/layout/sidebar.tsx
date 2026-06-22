"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Store,
  Users,
  ShoppingBag,
  BarChart3,
  Headset,
  ShieldAlert,
  TicketPercent,
  Bell,
  Settings,
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Restaurants",
    href: "/restaurants",
    icon: Store,
  },
  {
    name: "Users",
    href: "/users",
    icon: Users,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: ShoppingBag,
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    name: "Support",
    href: "/support",
    icon: Headset,
  },
  {
    name: "Moderation",
    href: "/moderation",
    icon: ShieldAlert,
  },
  {
    name: "Coupons",
    href: "/coupons",
    icon: TicketPercent,
  },
  {
    name: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950">
      <div className="flex h-16 items-center border-b border-zinc-800 px-6">
        <h1 className="text-lg font-bold text-white">
          BiteLoop Admin
        </h1>
      </div>

      <nav className="space-y-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                active
                  ? "bg-red-500/10 text-red-500"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}