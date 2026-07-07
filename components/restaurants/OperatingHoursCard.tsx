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
    <div className="rounded-3xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-lg font-semibold">
          Operating Hours
        </h2>
      </div>

      <div className="divide-y divide-border">
        {DAYS.map((day) => {
          const value = hours?.[day];

          return (
            <div
              key={day}
              className="flex items-center justify-between px-6 py-4"
            >
              <span className="capitalize font-medium">
                {day}
              </span>

              {value?.isOpen ? (
                <span className="text-sm text-muted-foreground">
                  {value.openTime} - {value.closeTime}
                </span>
              ) : (
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                  Closed
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}