interface ReviewFieldProps {
  label: string;
  value?: string | number | null;
}

export default function ReviewField({
  label,
  value,
}: ReviewFieldProps) {
  const hasValue =
    value !== undefined &&
    value !== null &&
    value !== "";

  return (
    <div className="rounded-2xl border border-border/60 bg-background transition-all duration-200 hover:border-primary/30 hover:shadow-sm">

      <div className="border-b border-border/60 px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </p>
      </div>

      <div className="flex min-h-[72px] items-center px-5 py-4">
        <p
          className={`break-words text-sm ${
            hasValue
              ? "font-medium text-foreground"
              : "italic text-muted-foreground"
          }`}
        >
          {hasValue ? value : "Not provided"}
        </p>
      </div>

    </div>
  );
}