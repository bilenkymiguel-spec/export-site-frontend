import type { AdminUser } from "../types/admin";

export function canAccessGovernance(user?: AdminUser | null) {
  if (!user) return false;

  return user.role === "admin" || user.role === "super_admin";
}