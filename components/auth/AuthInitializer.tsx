"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/lib/stores/authStore";

export default function AuthInitializer() {
  const user = useAuthStore((s) => s.user);
  const fetchProfile = useAuthStore(
    (s) => s.fetchProfile
  );

  useEffect(() => {
    if (!user) {
      fetchProfile().catch(console.error);
    }
  }, [user, fetchProfile]);

  return null;
}