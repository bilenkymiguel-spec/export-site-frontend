export type AdminRole = "admin" | "super_admin";

export type AdminUser = {
  id: number;
  email: string;
  name: string;
  role: AdminRole;
  createdAt: string;
};