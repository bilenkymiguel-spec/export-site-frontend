export type GovernanceStatus = "pending" | "approved" | "rejected";

export type GovernanceDecision = {
  id: number;
  title: string;
  description?: string;
  status: GovernanceStatus;
  createdAt: string;
  updatedAt?: string;
  createdBy: {
    id: number;
    name: string;
    email: string;
  };
};