import { ArrowUpRight, LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change: string;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  change,
}: StatsCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl">
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-600 to-red-400" />

      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-gray-900">
            {value}
          </h2>
        </div>

        <div className="rounded-2xl bg-red-50 p-3 text-red-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-red-100">
          <Icon size={22} />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-600">
          <ArrowUpRight size={16} />
          {change}
        </div>

        <p className="text-xs text-gray-400">
          Since last month
        </p>
      </div>
    </div>
  );
}