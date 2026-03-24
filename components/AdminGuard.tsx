"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../app/providers";

type AdminGuardProps = {
  children: React.ReactNode;
  redirectTo?: string;
};

export default function AdminGuard({
  children,
  redirectTo = "/login",
}: AdminGuardProps) {
  const router = useRouter();
  const { isAuthenticated, isAdmin } = useAuth();

  useEffect(() => {
    if (!isAuthenticated || !isAdmin) {
      router.replace(redirectTo);
    }
  }, [isAuthenticated, isAdmin, redirectTo, router]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  return <>{children}</>;
}