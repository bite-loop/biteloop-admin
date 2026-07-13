"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/lib/stores/authStore";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const user = useAuthStore((s) => s.user);
  const isLoading = useAuthStore((s) => s.isLoading);
  const fetchProfile = useAuthStore((s) => s.fetchProfile);

useEffect(() => {
  if (!user) {
    fetchProfile();
  }
}, [user, fetchProfile]);

  useEffect(() => {
if (!isLoading && !user) {
  router.replace("/login");
}
  }, [user, isLoading, router, pathname]);

  if (isLoading) {
return (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      <p className="text-sm text-muted-foreground">
        Authenticating...
      </p>
    </div>
  </div>
);
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}