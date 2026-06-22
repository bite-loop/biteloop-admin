export default function AdminLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white font-bold">
        B
      </div>

      <div>
        <h1 className="text-sm font-semibold">
          BiteLoop Admin
        </h1>

        <p className="text-xs text-muted-foreground">
          Control Center
        </p>
      </div>
    </div>
  );
}