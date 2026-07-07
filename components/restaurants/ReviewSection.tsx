import { ReactNode } from "react";

interface ReviewSectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function ReviewSection({
  title,
  icon,
  children,
}: ReviewSectionProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      {/* Header */}

      <div className="flex items-center gap-3 border-b border-border px-6 py-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          {icon}
        </div>

        <h2 className="text-lg font-semibold tracking-tight">
          {title}
        </h2>
      </div>

      {/* Body */}

      <div className="grid gap-6 p-6 md:grid-cols-2">
        {children}
      </div>
    </section>
  );
}