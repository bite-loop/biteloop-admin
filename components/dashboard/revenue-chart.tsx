"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

import { revenueData } from "@/lib/data/revenue";

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            Revenue Overview
          </h3>

          <p className="text-sm text-muted-foreground">
            Last 7 days performance
          </p>
        </div>

        <div className="rounded-xl bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
          This Week
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient
                id="revenueGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#dc2626"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#dc2626"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#dc2626"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}