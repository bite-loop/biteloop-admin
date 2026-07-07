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
    <section className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm transition-all duration-200 hover:shadow-md">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-border/60 bg-muted/30 px-6 py-5">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/10">
            {icon}
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              {title}
            </h2>

            <p className="text-sm text-muted-foreground">
              Review the submitted information.
            </p>
          </div>

        </div>

      </div>

      {/* Body */}

      <div className="grid gap-5 p-6 md:grid-cols-2">
        {children}
      </div>

    </section>
  );
}