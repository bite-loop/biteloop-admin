interface ReviewFieldProps {
  label: string;
  value?: string | number | null;
}

export default function ReviewField({
  label,
  value,
}: ReviewFieldProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </p>

      <div className="min-h-[52px] rounded-2xl border border-border bg-background px-4 py-3">
        <p className="break-words text-sm font-medium text-foreground">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}