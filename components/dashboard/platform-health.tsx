import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    name: "API",
    status: "Operational",
  },
  {
    name: "Database",
    status: "Operational",
  },
  {
    name: "Firebase",
    status: "Operational",
  },
  {
    name: "Payments",
    status: "Operational",
  },
];

export default function PlatformHealth() {
  return (
    <Card className="rounded-2xl border-border/60 shadow-none">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">
          Platform Health
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-1">
        {services.map((service) => (
          <div
            key={service.name}
            className="flex items-center justify-between rounded-xl px-2 py-3 transition-colors hover:bg-muted/40"
          >
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-sm font-medium">
                {service.name}
              </span>
            </div>

            <span className="text-sm text-muted-foreground">
              {service.status}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}