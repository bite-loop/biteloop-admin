"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NotificationDropdown from "./NotificationDropdown";

interface Notification {
  id: string;
  restaurantId: string;
  restaurantName: string;
  status: string;
  type: string;
  read: boolean;
}

export default function NotificationButton() {
  const [notifications, setNotifications] =
    useState<Notification[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          "/api/notifications"
        );

        const data = await res.json();

        if (data.success) {
          setNotifications(
            data.notifications
          );
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const unreadCount =
    notifications.filter(
      (notification) => !notification.read
    ).length;

  return (
    <Popover>

      <PopoverTrigger asChild>

        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-all hover:bg-accent">

          <Bell size={18} />

          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {unreadCount > 99
                ? "99+"
                : unreadCount}
            </span>
          )}

        </button>

      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-auto border-0 bg-transparent p-0 shadow-none"
      >
        <NotificationDropdown
          notifications={notifications}
          loading={loading}
        />
      </PopoverContent>

    </Popover>
  );
}