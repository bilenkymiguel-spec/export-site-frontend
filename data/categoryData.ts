export type CategoryItem = {
  name: string;
  description: string;
};

export type Category = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  items: CategoryItem[];
};

const categories: Category[] = [
  {
    slug: "moda-neutra-couro-e-acessorios",
    title: "Moda, estilo e acessórios",
    shortTitle: "Moda neutra, couro e acessórios",
    eyebrow: "Seleção",
    description:
      "Bolsas de crochê, bolsas de couro, coturnos femininos, sapatos sociais, óculos de sol, carteiras e nécessaires em uma curadoria moderna, elegante e sem marcas aparentes.",
    heroImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        name: "Bolsas de crochê",
        description: "Peças artesanais com leitura sofisticada e contemporânea.",
      },
      {
        name: "Bolsas de couro",
        description: "Modelos elegantes, discretos e adequados a mercados premium.",
      },
      {
        name: "Coturnos femininos",
        description: "Força estética com acabamento refinado e presença editorial.",
      },
      {
        name: "Sapatos sociais",
        description: "Linhas clássicas com visual limpo e internacional.",
      },
      {
        name: "Óculos de sol",
        description: "Acessórios neutros e sofisticados para composições elegantes.",
      },
      {
        name: "Carteiras e nécessaires",
        description: "Peças funcionais com acabamento visual premium.",
      },
    ],
  },
  {
    slug: "ceramica-decoracao-e-casa",
    title: "Casa, cerâmica e decoração",
    shortTitle: "Cerâmica, decoração e casa",
    eyebrow: "Seleção",
    description:
      "Peças de decoração em cerâmica, pratos, xícaras, travessas e enxoval apresentados com estética minimalista, refinada e acolhedora.",
    heroImage:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1600&q=80",
    items: [
      {
        name: "Peças de decoração em cerâmica",
        description: "Objetos com presença visual silenciosa e sofisticada.",
      },
      {
        name: "Pratos e travessas",
        description: "Formas elegantes com linguagem contemporânea e acolhedora.",
      },
      {
        name: "Xícaras",
        description: "Peças delicadas com acabamento adequado a uma mesa refinada.",
      },
      {
        name: "Enxoval",
        description: "Têxteis e composições com leitura minimalista e premium.",
      },
      {
        name: "Objetos para casa",
        description: "Seleção funcional e estética para ambientes sofisticados.",
      },
      {
        name: "Decoração autoral",
        description: "Itens com identidade brasileira apresentados de forma internacional.",
      },
    ],
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}