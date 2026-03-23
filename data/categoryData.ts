export type Product = {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  material?: string;
  origin?: string;
  exportScore?: number;
};

export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "moda-acessorios",
    title: "Moda, estilo e acessórios",
    eyebrow: "CATÁLOGO 01",
    description:
      "Seleção de peças brasileiras com acabamento refinado, linguagem contemporânea e apelo internacional.",
    heroImage:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1400&auto=format&fit=crop",
    products: [
      {
        id: 1,
        slug: "bolsa-couro-aurora",
        name: "Bolsa de couro Aurora",
        shortDescription: "Bolsa estruturada em couro com presença elegante.",
        description:
          "Bolsa premium em couro com construção limpa, textura sofisticada e proposta versátil para mercados internacionais.",
        price: 1280,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
        material: "Couro legítimo",
        origin: "Brasil",
        exportScore: 94,
      },
      {
        id: 2,
        slug: "carteira-couro-serra",
        name: "Carteira Serra",
        shortDescription: "Carteira compacta em couro de acabamento premium.",
        description:
          "Carteira com design discreto, ideal para curadoria de acessórios masculinos e femininos com alto valor percebido.",
        price: 320,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1200&auto=format&fit=crop",
        material: "Couro legítimo",
        origin: "Brasil",
        exportScore: 89,
      },
      {
        id: 3,
        slug: "pulseira-couro-litoral",
        name: "Pulseira Litoral",
        shortDescription: "Pulseira artesanal de couro com leitura minimalista.",
        description:
          "Acessório leve, elegante e de fácil composição para catálogos premium e gift curation.",
        price: 180,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
        material: "Couro e metal",
        origin: "Brasil",
        exportScore: 84,
      },
      {
        id: 4,
        slug: "oculos-editorial-sol",
        name: "Óculos Editorial Sol",
        shortDescription: "Óculos com linguagem fashion e apelo visual forte.",
        description:
          "Peça de imagem para composições editoriais e curadoria de estilo com forte identidade visual.",
        price: 540,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
        material: "Acetato",
        origin: "Brasil",
        exportScore: 78,
      },
    ],
  },
  {
    slug: "casa-ceramica",
    title: "Casa, cerâmica e decoração",
    eyebrow: "CATÁLOGO 02",
    description:
      "Objetos, cerâmicas e peças de mesa com identidade brasileira refinada e estética exportável.",
    heroImage:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop",
    products: [
      {
        id: 5,
        slug: "prato-ceramica-brisa",
        name: "Prato Brisa",
        shortDescription: "Prato em cerâmica de acabamento fosco e desenho autoral.",
        description:
          "Peça para mesa posta premium, com leitura limpa, materialidade autêntica e bom encaixe em mercados de decoração.",
        price: 210,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=1200&auto=format&fit=crop",
        material: "Cerâmica artesanal",
        origin: "Brasil",
        exportScore: 91,
      },
      {
        id: 6,
        slug: "vaso-escultural-duna",
        name: "Vaso Duna",
        shortDescription: "Vaso escultural com visual contemporâneo.",
        description:
          "Objeto decorativo com forte apelo editorial, indicado para ambientes sofisticados e coleções de design.",
        price: 480,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1612196808214-b7e239e5f5b4?q=80&w=1200&auto=format&fit=crop",
        material: "Cerâmica",
        origin: "Brasil",
        exportScore: 93,
      },
      {
        id: 7,
        slug: "xicara-atelier-mar",
        name: "Xícara Atelier Mar",
        shortDescription: "Xícara delicada com assinatura artesanal.",
        description:
          "Peça de mesa e café para composições minimalistas, com valor agregado por narrativa de origem e acabamento.",
        price: 145,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
        material: "Cerâmica esmaltada",
        origin: "Brasil",
        exportScore: 86,
      },
      {
        id: 8,
        slug: "tigela-pedra-clara",
        name: "Tigela Pedra Clara",
        shortDescription: "Tigela versátil para mesa e decoração.",
        description:
          "Forma elegante, textura sutil e presença contemporânea para catálogos de casa e cozinha premium.",
        price: 165,
        currency: "BRL",
        image:
          "https://images.unsplash.com/photo-1603199506016-b9a594b593c0?q=80&w=1200&auto=format&fit=crop",
        material: "Cerâmica artesanal",
        origin: "Brasil",
        exportScore: 88,
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