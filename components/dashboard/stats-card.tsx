import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border bg-card p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <Icon className="h-5 w-5 text-primary" />
      </div>

      <h3 className="mt-4 text-2xl font-bold tracking-tight">
        {value}
      </h3>
    </div>
  );
}