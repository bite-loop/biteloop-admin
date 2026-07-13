import {
  Store,
  CheckCircle2,
  XCircle,
  Clock3,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Activity {
  id: string;
  restaurantName: string;
  status: string;
  type: string;
  createdAt: {
    _seconds: number;
    _nanoseconds: number;
  };
}

interface Props {
  activities: Activity[];
}

function getStatusBadge(status: string) {
  const config = {
    approved: {
      color: "bg-emerald-500",
      text: "Approved",
      textColor: "text-emerald-600",
    },
    rejected: {
      color: "bg-red-500",
      text: "Rejected",
      textColor: "text-red-600",
    },
    pending: {
      color: "bg-amber-500",
      text: "Pending",
      textColor: "text-amber-600",
    },
  };

  const current =
    config[
      (status as keyof typeof config) ??
        "pending"
    ] || config.pending;

  return (
    <div
      className={`flex items-center gap-2 text-xs font-medium ${current.textColor}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${current.color}`}
      />

      {current.text}
    </div>
  );
}

function getActivityMessage(activity: Activity) {
  switch (activity.status) {
    case "approved":
      return "Approved for onboarding.";

    case "rejected":
      return "Onboarding rejected.";

    default:
      return "Awaiting review.";
  }
}

function formatTime(timestamp: Activity["createdAt"]) {
  const created = new Date(
    timestamp._seconds * 1000
  );

  const now = new Date();

  const diff = now.getTime() - created.getTime();

  const mins = Math.floor(diff / 60000);
  const hrs = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins} min ago`;
  if (hrs < 24) return `${hrs} hr ago`;
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days} days ago`;

  return created.toLocaleDateString();
}

function getActivityIcon(status: string) {
  switch (status) {
    case "approved":
      return {
        icon: CheckCircle2,
        className:
          "bg-emerald-500/10 text-emerald-600",
      };

    case "rejected":
      return {
        icon: XCircle,
        className:
          "bg-red-500/10 text-red-600",
      };

    default:
      return {
        icon: Clock3,
        className:
          "bg-amber-500/10 text-amber-600",
      };
  }
}

export default function RecentActivity({
  activities,
}: Props) {
  return (
    <Card className="rounded-3xl border-border/60 shadow-none">
      <CardHeader className="pb-1.5 px-5 pt-5">
        <CardTitle className="text-lg font-semibold">
          Recent Activity
        </CardTitle>
      </CardHeader>

    <CardContent className="max-h-[420px] overflow-y-auto p-0">
        {activities.length === 0 ? (
          <div className="flex h-52 flex-col items-center justify-center px-6 text-center">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Store className="h-7 w-7 text-primary" />
            </div>

            <h3 className="text-base font-semibold">
              No recent activity
            </h3>

            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Restaurant onboarding activity will
              appear here once restaurants start
              interacting with the platform.
            </p>
          </div>
        ) : (
          <div>
            {activities.map((activity) => {
              const {
                icon: Icon,
                className,
              } = getActivityIcon(
                activity.status
              );

              return (
<div
  key={activity.id}
  className="flex items-start gap-3 border-b border-border/60 px-5 py-3 last:border-none transition-colors hover:bg-muted/40"
>
  <div
    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${className}`}
  >
    <Icon className="h-4 w-4" />
  </div>

  <div className="min-w-0 flex-1">

    <div className="flex items-center justify-between gap-3">

      <p className="truncate text-sm font-medium">
        {activity.restaurantName}
      </p>

      <span className="text-[11px] text-muted-foreground whitespace-nowrap">
        {formatTime(activity.createdAt)}
      </span>

    </div>

    <p className="mt-0.5 text-[13px] text-muted-foreground">
      {getActivityMessage(activity)}
    </p>

    <div className="mt-2">
      {getStatusBadge(activity.status)}
    </div>

  </div>
</div>
              );
            })}
          </div>
        )}
      </CardContent>
    </Card>
  );
}