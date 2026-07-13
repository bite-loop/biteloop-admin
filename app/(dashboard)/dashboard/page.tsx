"use client";

import { useEffect, useState } from "react";
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

  const [stats, setStats] = useState({
    totalRestaurants: 0,
  });

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await fetch(
          "/api/dashboard"
        );

        const data = await res.json();

        if (data.success) {
          setStats(data.stats);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (

    <div className="pt-5 space-y-6">
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
  value={
    loading
      ? "..."
      : stats.totalRestaurants.toString()
  }
  icon={Store}
  change="Live"
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