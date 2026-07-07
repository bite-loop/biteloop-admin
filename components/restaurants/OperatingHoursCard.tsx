import { Clock3 } from "lucide-react";

interface Props {
  hours?: Record<
    string,
    {
      isOpen: boolean;
      openTime: string;
      closeTime: string;
    }
  >;
}

const DAYS = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export default function OperatingHoursCard({
  hours,
}: Props) {
  return (
    <section className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-200 hover:shadow-md">

      {/* Header */}

      <div className="flex items-center gap-4 border-b border-border/60 bg-muted/30 px-6 py-5">

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
          <Clock3 className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Operating Hours
          </h2>

          <p className="text-sm text-muted-foreground">
            Weekly opening schedule
          </p>
        </div>

      </div>

      {/* Body */}

      <div className="divide-y divide-border/60">

        {DAYS.map((day) => {
          const value = hours?.[day];

          return (
            <div
              key={day}
              className="flex items-center justify-between px-6 py-4"
            >
              <div>
                <p className="font-medium capitalize">
                  {day}
                </p>
              </div>

              {value?.isOpen ? (
                <div className="flex items-center gap-3">

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600">
                    Open
                  </span>

                  <span className="font-medium text-sm">
                    {value.openTime} – {value.closeTime}
                  </span>

                </div>
              ) : (
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-600">
                  Closed
                </span>
              )}
            </div>
          );
        })}

      </div>

    </section>
  );
}