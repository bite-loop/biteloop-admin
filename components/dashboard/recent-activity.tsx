import { Store } from "lucide-react";

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

export default function RecentActivity({
  activities,
}: Props) {
  return (
    <Card className="rounded-2xl border-border/60 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Recent Activity
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        {activities.length === 0 ? (
          <div className="flex h-40 items-center justify-center text-center">
            <div>
              <Store className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />

              <p className="font-medium">
                No recent activity
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Restaurant onboarding activity will appear here.
              </p>
            </div>
          </div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="group flex items-start gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-muted/40"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60">
                <Store className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-medium">
                    {activity.restaurantName}
                  </p>

                  <span className="text-xs capitalize text-muted-foreground">
                    {activity.status}
                  </span>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.type === "onboarding_submitted"
                    ? "Submitted onboarding for review."
                    : activity.type}
                </p>
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}