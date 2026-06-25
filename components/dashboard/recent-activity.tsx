import {
  Store,
  ShoppingBag,
  Users,
} from "lucide-react";

const activities = [
  {
    icon: Store,
    title: "Restaurant Approved",
    subtitle: "Burger House joined BiteLoop",
  },
  {
    icon: ShoppingBag,
    title: "Order Refunded",
    subtitle: "Order #BL20391",
  },
  {
    icon: Users,
    title: "New User",
    subtitle: "John Doe created an account",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4"
            >
              <div className="rounded-xl bg-red-50 p-3 text-red-600">
                <Icon size={18} />
              </div>

              <div>
                <p className="font-medium">
                  {activity.title}
                </p>

                <p className="text-sm text-muted-foreground">
                  {activity.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}