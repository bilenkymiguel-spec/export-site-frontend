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

export type PageVersion = {
  id: number;
  slug: string;
  title: string;
  versionNumber: number;
  status: "active" | "draft" | "archived";
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