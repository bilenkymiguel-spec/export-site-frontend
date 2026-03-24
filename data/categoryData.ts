export type Category = {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription?: string;
  heroImage?: string;
};

const categories: Category[] = [
  {
    id: "fashion-accessories",
    slug: "moda-estilo-e-acessorios",
    title: "Moda neutra, couro e acessórios",
    description:
      "Seleção de bolsas de crochê, bolsas de couro, coturnos femininos, sapatos sociais, óculos de sol, carteiras de couro e nécessaires com leitura premium e sem marcas aparentes.",
    shortDescription:
      "Moda casual, couro e acessórios com acabamento refinado e apelo internacional.",
    heroImage:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "home-decor",
    slug: "casa-e-decoracao",
    title: "Cerâmica, decoração e casa",
    description:
      "Curadoria de peças de decoração em cerâmica, pratos, xícaras, travessas e enxoval apresentados com estética minimalista, acolhedora e sofisticada.",
    shortDescription:
      "Cerâmica, decoração e casa com linguagem visual elegante e atemporal.",
    heroImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}