import StatsCard from "@/components/dashboard/stats-card";
import {
  Users,
  Store,
  ShoppingBag,
  IndianRupee,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Welcome back to BiteLoop Admin.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Users"
          value="12,450"
          icon={Users}
        />

        <StatsCard
          title="Restaurants"
          value="342"
          icon={Store}
        />

        <StatsCard
          title="Orders"
          value="8,920"
          icon={ShoppingBag}
        />

        <StatsCard
          title="Revenue"
          value="₹4.8L"
          icon={IndianRupee}
        />
      </div>
    </div>
  );
}