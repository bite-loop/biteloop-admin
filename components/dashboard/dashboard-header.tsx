"use client";

import SearchBar from "./search-bar";
import NotificationButton from "./notification-button";
import ThemeToggle from "./theme-toggle";
import ProfileMenu from "./profile-menu";

interface DashboardHeaderProps {
  title: string;
  description: string;
}

export default function DashboardHeader({
  title,
  description,
}: DashboardHeaderProps) {
  return (
    <div className="mb-6 flex items-start justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          {title}
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar />
        <NotificationButton />
        <ThemeToggle />
        <ProfileMenu />
      </div>
    </div>
  );
}