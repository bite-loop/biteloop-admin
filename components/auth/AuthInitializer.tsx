"use client";

import { useEffect, useRef } from "react";
import { useAuthStore } from "@/lib/stores/authStore";

export default function AuthInitializer() {
  const user = useAuthStore((s) => s.user);
  const fetchProfile = useAuthStore((s) => s.fetchProfile);

  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || user) return;

    initialized.current = true;

    fetchProfile().catch(console.error);
  }, [user, fetchProfile]);

  return null;
}