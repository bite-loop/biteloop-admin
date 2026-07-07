import { ArrowUpRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "../ui/card";


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
    <Card className="group rounded-2xl border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:border-border hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              {value}
            </h2>
          </div>

          <div className="text-muted-foreground transition-all duration-300 group-hover:scale-110 group-hover:text-foreground">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground">
            <ArrowUpRight className="h-4 w-4" />
            <span>{change}</span>
          </div>

          <span className="text-xs text-muted-foreground">
            Since last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
}