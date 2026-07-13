import { redirect } from "next/navigation";
import { verifyAuth } from "@/helper/auth-helper/verify";
import DashboardLayout from "@/components/layout/dashboard-layout";
import AuthInitializer from "@/components/auth/AuthInitializer";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await verifyAuth();

  if (!user) {
    redirect("/login");
  }

  return (
  <DashboardLayout>
    <AuthInitializer />
    {children}
  </DashboardLayout>
  );
}