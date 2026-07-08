"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NotificationDropdown from "./notification-dropdown";

interface Notification {
  id: string;
  restaurantId: string;
  restaurantName: string;
  status: string;
  type: string;
  read: boolean;
}

export default function NotificationButton() {
  const [notifications, setNotifications] = useState<
    Notification[]
  >([]);

  const [loading, setLoading] = useState(true);

  const fetchNotifications = async () => {
    try {
      const res = await fetch("/api/notifications");

      const data = await res.json();

      if (data.success) {
        setNotifications(data.notifications);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const removeNotification = (
    id: string
  ) => {
    setNotifications((prev) =>
      prev.filter(
        (notification) =>
          notification.id !== id
      )
    );
  };

  useEffect(() => {
    fetchNotifications();

    const interval = setInterval(
      fetchNotifications,
      30000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background transition-all hover:bg-accent">
          <Bell size={18} />

          {notifications.length > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {notifications.length > 99
                ? "99+"
                : notifications.length}
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
          onNotificationRead={
            removeNotification
          }
        />
      </PopoverContent>
    </Popover>
  );
}