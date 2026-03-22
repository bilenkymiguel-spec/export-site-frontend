export type Product = {
  id: number;
  slug: string;
  categorySlug: string;
  name: string;
  shortName: string;
  priceBRL: number;
  image: string;
  gallery: string[];
  material: string;
  origin: string;
  production: string;
  availability: string;
  description: string;
  purpose: string;
};

export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  heroImage: string;
};

export const categories: Category[] = [
  {
    slug: "moda",
    title: "Moda Neutra, Couro e Acessórios",
    eyebrow: "Seleção",
    shortDescription:
      "Bolsas de crochê, bolsas de couro, coturnos femininos, sapatos sociais, óculos de sol, carteiras e nécessaires em uma curadoria elegante e sem marcas aparentes.",
    heroImage: "/images/moda.jpg",
  },
  {
    slug: "casa",
    title: "Cerâmica, Decoração e Casa",
    eyebrow: "Seleção",
    shortDescription:
      "Peças de cerâmica, pratos, xícaras, travessas e itens de decoração com estética minimalista, refinada e acolhedora.",
    heroImage: "/images/casa.jpg",
  },
];

export const products: Product[] = [
  {
    id: 1,
    slug: "bolsa-couro-estruturada",
    categorySlug: "moda",
    name: "Bolsa de Couro Estruturada",
    shortName: "Bolsa de Couro",
    priceBRL: 890,
    image: "/images/products/bolsa-couro-1.jpg",
    gallery: [
      "/images/products/bolsa-couro-1.jpg",
      "/images/products/bolsa-couro-2.jpg",
      "/images/products/bolsa-couro-3.jpg",
    ],
    material: "Couro legítimo",
    origin: "Brasil",
    production: "Artesanal",
    availability: "Limitada",
    description:
      "Uma peça de presença discreta, com construção firme e acabamento sofisticado para contextos urbanos e internacionais.",
    purpose:
      "Desenvolvida para unir funcionalidade e estética discreta em ambientes urbanos contemporâneos.",
  },
  {
    id: 2,
    slug: "carteira-couro-minimal",
    categorySlug: "moda",
    name: "Carteira de Couro Minimal",
    shortName: "Carteira de Couro",
    priceBRL: 320,
    image: "/images/products/carteira-1.jpg",
    gallery: [
      "/images/products/carteira-1.jpg",
      "/images/products/carteira-2.jpg",
    ],
    material: "Couro legítimo",
    origin: "Brasil",
    production: "Artesanal",
    availability: "Limitada",
    description:
      "Carteira compacta, refinada e silenciosa visualmente, pensada para rotina premium sem excessos.",
    purpose:
      "Criada para quem valoriza objetos duráveis, discretos e bem resolvidos.",
  },
  {
    id: 3,
    slug: "coturno-feminino-couro",
    categorySlug: "moda",
    name: "Coturno Feminino em Couro",
    shortName: "Coturno Feminino",
    priceBRL: 690,
    image: "/images/products/coturno-1.jpg",
    gallery: [
      "/images/products/coturno-1.jpg",
      "/images/products/coturno-2.jpg",
    ],
    material: "Couro legítimo",
    origin: "Brasil",
    production: "Artesanal",
    availability: "Sob consulta",
    description:
      "Silhueta firme, acabamento elegante e construção pensada para presença, conforto e durabilidade.",
    purpose:
      "Desenvolvido para oferecer linguagem contemporânea com resistência e identidade.",
  },
  {
    id: 4,
    slug: "vaso-ceramica-escultural",
    categorySlug: "casa",
    name: "Vaso de Cerâmica Escultural",
    shortName: "Vaso Escultural",
    priceBRL: 540,
    image: "/images/products/vaso-1.jpg",
    gallery: [
      "/images/products/vaso-1.jpg",
      "/images/products/vaso-2.jpg",
    ],
    material: "Cerâmica",
    origin: "Brasil",
    production: "Artesanal",
    availability: "Limitada",
    description:
      "Peça decorativa com presença arquitetônica, volumes limpos e acabamento tátil sofisticado.",
    purpose:
      "Criado para trazer identidade material e serenidade visual a interiores contemporâneos.",
  },
  {
    id: 5,
    slug: "conjunto-pratos-ceramica",
    categorySlug: "casa",
    name: "Conjunto de Pratos em Cerâmica",
    shortName: "Pratos em Cerâmica",
    priceBRL: 760,
    image: "/images/products/pratos-1.jpg",
    gallery: [
      "/images/products/pratos-1.jpg",
      "/images/products/pratos-2.jpg",
    ],
    material: "Cerâmica",
    origin: "Brasil",
    production: "Artesanal",
    availability: "Sob encomenda",
    description:
      "Conjunto com linguagem natural e refinada, pensado para composições de mesa com calma e personalidade.",
    purpose:
      "Desenvolvido para valorizar rituais cotidianos com matéria, forma e autenticidade.",
  },
  {
    id: 6,
    slug: "xicara-ceramica-natural",
    categorySlug: "casa",
    name: "Xícara de Cerâmica Natural",
    shortName: "Xícara de Cerâmica",
    priceBRL: 210,
    image: "/images/products/xicara-1.jpg",
    gallery: [
      "/images/products/xicara-1.jpg",
      "/images/products/xicara-2.jpg",
    ],
    material: "Cerâmica",
    origin: "Brasil",
    production: "Artesanal",
    availability: "Limitada",
    description:
      "Peça de uso diário com acabamento sensorial, linhas limpas e presença acolhedora.",
    purpose:
      "Criada para aproximar utilidade e beleza em ambientes minimalistas e sofisticados.",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}