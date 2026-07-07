import {
  Store,
  ShoppingBag,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const activities = [
  {
    icon: Store,
    title: "Restaurant Approved",
    subtitle: "Burger House joined BiteLoop",
    time: "2m ago",
  },
  {
    icon: ShoppingBag,
    title: "Order Refunded",
    subtitle: "Order #BL20391",
    time: "18m ago",
  },
  {
    icon: Users,
    title: "New User",
    subtitle: "John Doe created an account",
    time: "1h ago",
  },
];

export default function RecentActivity() {
  return (
    <Card className="rounded-2xl border-border/60 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Recent Activity
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="group flex items-start gap-4 rounded-xl px-2 py-3 transition-colors hover:bg-muted/40"
            >
              <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border/60">
                <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="truncate text-sm font-medium">
                    {activity.title}
                  </p>

                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}