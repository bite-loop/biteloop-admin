

import { LucideIcon, TrendingUp } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change?: string;
  changeType?: "increase" | "decrease";
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  change = "+12.5%",
  changeType = "increase",
}: StatsCardProps) {
  return (
    <div className="group rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-lg">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-tight">
            {value}
          </h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100">
          <Icon size={22} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
            changeType === "increase"
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          <TrendingUp size={12} />
          {change}
        </div>

        <span className="text-xs text-muted-foreground">
          compared to last month
        </span>
      </div>
    </div>
  );
}