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
import AdminLogo from "./admin-logo";

const navSections = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
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
    ],
  },

  {
    title: "MANAGEMENT",
    items: [
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
        name: "Coupons",
        href: "/coupons",
        icon: TicketPercent,
      },
    ],
  },

  {
    title: "OPERATIONS",
    items: [
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
        name: "Notifications",
        href: "/notifications",
        icon: Bell,
      },
    ],
  },

  {
    title: "SYSTEM",
    items: [
      {
        name: "Settings",
        href: "/settings",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
   <aside className="flex h-screen w-72 flex-col border-r border-border bg-background">
<div className="flex h-20 items-center border-b border-border px-6">
  <AdminLogo />
</div>
<nav className="flex-1 overflow-y-auto px-4 py-6">
  {navSections.map((section) => (
    <div key={section.title} className="mb-8">
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground/70">
        {section.title}
      </p>

      <div className="space-y-1">
        {section.items.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              <Icon
                size={18}
                className="transition-transform group-hover:scale-110"
              />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  ))}
</nav>
    </aside>
  );
}