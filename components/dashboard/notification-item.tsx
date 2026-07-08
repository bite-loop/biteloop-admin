"use client";

import { Bell, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  restaurantId: string;
  restaurantName: string;
  status: string;
  type: string;
  read: boolean;
    onNotificationRead: (
    id: string
  ) => void;
}

export default function NotificationItem({
  id,
  restaurantId,
  restaurantName,
  status,
  type,
  read,
  onNotificationRead,
}: Props) {
  const router = useRouter();

const handleClick = async () => {
  try {
    await fetch("/api/notifications/read", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        notificationId: id,
      }),
    });

    onNotificationRead(id);

    router.push(`/restaurants/${restaurantId}`);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <button
    onClick={handleClick}
      className="flex w-full items-start gap-4 rounded-xl p-4 text-left transition hover:bg-accent"
    >
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Bell size={18} />
      </div>

      <div className="min-w-0 flex-1">

        <div className="flex items-center justify-between gap-3">

          <p className="truncate font-semibold">
            {restaurantName}
          </p>

          {!read && (
            <span className="h-2 w-2 rounded-full bg-blue-500" />
          )}

        </div>

        <p className="mt-1 text-sm text-muted-foreground">
          {type === "onboarding_submitted"
            ? "Submitted onboarding for review."
            : type}
        </p>

        <div className="mt-3 flex items-center justify-between">

          <span className="rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-medium text-yellow-600">
            {status}
          </span>

          <ChevronRight
            size={16}
            className="text-muted-foreground"
          />

        </div>

      </div>
    </button>
  );
}