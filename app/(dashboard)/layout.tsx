import ProtectedRoute from "@/components/protected-route/protected-route";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      {/* existing dashboard layout */}
      {children}
    </ProtectedRoute>
  );
}