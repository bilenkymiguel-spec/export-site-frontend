import type { AdminUser, UserRole } from "../types/admin";

export function isDirector(role: UserRole) {
  return role === "master" || role === "superadmin";
}

export function canAccessGovernance(user?: AdminUser | null) {
  if (!user) return false;
  return isDirector(user.role) && user.status === "active" && !user.leave.isAway;
}

export function canOverrideMargin(user?: AdminUser | null) {
  if (!user) return false;
  return user.role === "master" || user.role === "superadmin";
}

export function canEditPages(user?: AdminUser | null) {
  if (!user) return false;
  return (
    user.status === "active" &&
    !user.leave.isAway &&
    ["master", "superadmin", "admin", "editor"].includes(user.role)
  );
}

export function canPublishPages(user?: AdminUser | null) {
  if (!user) return false;
  return isDirector(user.role) && user.status === "active" && !user.leave.isAway;
}

export function canCreateSuperadmin(user?: AdminUser | null) {
  if (!user) return false;
  return user.role === "master" || user.role === "superadmin";
}

export function canSuspendSuperadmin(user?: AdminUser | null) {
  if (!user) return false;
  return user.role === "master";
}

export function canDeleteUser(actor?: AdminUser | null, target?: AdminUser | null) {
  if (!actor || !target) return false;
  if (target.isOriginalMaster) return false;
  return actor.role === "master" || actor.role === "superadmin";
}