export type UserRole = "master" | "superadmin" | "admin" | "editor";

export type UserStatus = "active" | "suspended";

export type TemporaryLeave = {
  isAway: boolean;
  startAt?: string;
  endAt?: string;
  reason?: string;
};

export type AdminUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: string;
  createdBy?: number;
  canVote: boolean;
  leave: TemporaryLeave;
  isOriginalMaster?: boolean;
};

export type AuditLog = {
  id: number;
  action: string;
  actorUserId: number;
  actorName: string;
  targetType: "user" | "product" | "page" | "governance" | "system";
  targetId: string;
  description: string;
  createdAt: string;
  metadata?: Record<string, unknown>;
};

export type GovernanceDecisionType =
  | "publish_page"
  | "rollback_page"
  | "suspend_superadmin"
  | "financial_override"
  | "critical_settings";

export type GovernanceVoteValue = "approve" | "reject";

export type GovernanceVote = {
  userId: number;
  userName: string;
  value: GovernanceVoteValue;
  createdAt: string;
};

export type GovernanceDecisionStatus = "pending" | "approved" | "rejected";

export type GovernanceDecision = {
  id: number;
  type: GovernanceDecisionType;
  title: string;
  description: string;
  createdByUserId: number;
  createdByName: string;
  createdAt: string;
  status: GovernanceDecisionStatus;
  eligibleVoters: number;
  quorumRequired: number;
  votes: GovernanceVote[];
  relatedEntityId?: string;
};

export type PageBlockType = "hero" | "text" | "image" | "grid" | "cta";

export type PageBlock = {
  id: string;
  type: PageBlockType;
  title?: string;
  subtitle?: string;
  content?: string;
  imageUrl?: string;
  buttonLabel?: string;
  buttonHref?: string;
  items?: string[];
};

export type PageVersionStatus = "active" | "draft" | "archived";

export type PageVersion = {
  id: number;
  slug: string;
  title: string;
  versionNumber: number;
  status: PageVersionStatus;
  createdAt: string;
  createdByUserId: number;
  createdByName: string;
  changeSummary: string;
  blocks: PageBlock[];
};

export type ManagedPage = {
  slug: string;
  title: string;
  activeVersionId: number;
  draftVersionId?: number;
  versions: PageVersion[];
};

export type ProductRecord = {
  id: number;
  name: string;
  category: string;
  cost: number;
  salePrice: number;
  marginPercent: number;
  createdAt: string;
  createdByUserId: number;
  blockedByMargin: boolean;
};