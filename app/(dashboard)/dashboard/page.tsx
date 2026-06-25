import DashboardHeader from "@/components/dashboard/dashboard-header";
import StatsCard from "@/components/dashboard/stats-card";
import {
  Users,
  Store,
  ShoppingBag,
  IndianRupee,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Dashboard"
        description="Monitor platform activity, revenue, and operational insights."
      />

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
   
  );
}