"use client";

import NotificationItem from "./NotificationItem";
import { Loader2, Bell } from "lucide-react";

interface Notification {
  id: string;
  restaurantId: string;
  restaurantName: string;
  status: string;
  type: string;
  read: boolean;
}

interface Props {
  notifications: Notification[];
  loading: boolean;
}

export default function NotificationDropdown({
  notifications,
  loading,
}: Props) {
  return (
    <div className="w-[420px] overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl">

      {/* Header */}

      <div className="border-b border-border px-5 py-4">
        <h2 className="text-lg font-semibold">
          Notifications
        </h2>

        <p className="text-sm text-muted-foreground">
          Restaurant onboarding requests
        </p>
      </div>

      {/* Body */}

      <div className="max-h-[500px] overflow-y-auto">

        {loading ? (
          <div className="flex h-44 items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : notifications.length === 0 ? (
          <div className="flex h-52 flex-col items-center justify-center gap-4 px-6 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <Bell className="h-7 w-7 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">
                You're all caught up
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                No new notifications.
              </p>
            </div>

          </div>
        ) : (
          <div className="divide-y divide-border">

            {notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                {...notification}
              />
            ))}

          </div>
        )}

      </div>

    </div>
  );
}