import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsCard from "@/components/dashboard/stats-card";
import {
  Users,
  Store,
  ShoppingBag,
  IndianRupee,
} from "lucide-react";
import RevenueChart from "@/components/dashboard/revenue-chart";
import RecentActivity from "@/components/dashboard/recent-activity";
import LatestOrders from "@/components/dashboard/latest-orders";
import PlatformHealth from "@/components/dashboard/platform-health";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard"
        description="Monitor platform activity, revenue, and operational insights."
      />

<div className="grid grid-cols-1 gap-6 md:grid-cols-2 2xl:grid-cols-4">
  <StatsCard
    title="Total Users"
    value="12,450"
    icon={Users}
    change="+18.4%"
  />

  <StatsCard
    title="Restaurants"
    value="342"
    icon={Store}
    change="+5.2%"
  />

  <StatsCard
    title="Orders"
    value="8,920"
    icon={ShoppingBag}
    change="+23.7%"
  />

  <StatsCard
    title="Revenue"
    value="₹4.8L"
    icon={IndianRupee}
    change="+14.8%"
  />
</div>
<div className="grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <RevenueChart />
  </div>

  <RecentActivity />
</div>

<div className="mt-6 grid gap-6 lg:grid-cols-3">
  <div className="lg:col-span-2">
    <LatestOrders />
  </div>

  <PlatformHealth />
</div>
      </div>
   
  );
}