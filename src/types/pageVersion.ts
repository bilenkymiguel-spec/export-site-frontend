export type ProductBlockItem = {
  id: number;
  name: string;
  price: number;
  image?: string;
  category?: string;
  slug?: string;
};

export type LuxuryBlock = {
  id: string;
  type: "luxury";
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export type SliderBlock = {
  id: string;
  type: "slider";
  title: string;
  subtitle?: string;
  products: ProductBlockItem[];
};

export type PageBlock = LuxuryBlock | SliderBlock;

export type ManagedPage = {
  id: string;
  slug: string;
  title: string;
  isActive: boolean;
  blocks: PageBlock[];
  createdAt?: string;
  updatedAt?: string;
};

export type PageVersion = ManagedPage;