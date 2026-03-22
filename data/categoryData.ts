export type Category = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "moda",
    title: "Moda",
    description: "Moda brasileira premium",
    image: "/images/moda.jpg",
  },
  {
    slug: "acessorios",
    title: "Acessórios",
    description: "Acessórios sofisticados",
    image: "/images/acessorios.jpg",
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}