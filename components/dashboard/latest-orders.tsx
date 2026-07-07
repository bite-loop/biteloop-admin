import { ShoppingBag } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LatestOrders() {
  return (
    <Card className="rounded-2xl border-border/60 shadow-none">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <CardTitle className="text-base font-semibold">
          Latest Orders
        </CardTitle>

        <span className="text-sm text-muted-foreground">
          Today
        </span>
      </CardHeader>

      <CardContent>
        <div className="flex h-72 flex-col items-center justify-center rounded-xl border border-dashed border-border/60">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/60">
            <ShoppingBag className="h-5 w-5 text-muted-foreground" />
          </div>

          <h4 className="mt-4 text-sm font-medium">
            No recent orders
          </h4>

          <p className="mt-1 max-w-xs text-center text-sm text-muted-foreground">
            Incoming orders will appear here as customers place them.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}