export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-red-500" />
      </div>
    </header>
  );
}