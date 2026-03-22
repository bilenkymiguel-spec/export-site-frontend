"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { categories, products } from "../src/data/catalogData";
import {
  convertFromBRL,
  detectCountryLabel,
  detectCurrency,
  formatCurrency,
  type CurrencyCode,
} from "../src/utils/intl";

type CategoryCardProps = {
  href: string;
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  delay?: number;
};

function CategoryCard({
  href,
  image,
  alt,
  eyebrow,
  title,
  description,
  delay = 0,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="home-category-card reveal-card"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="home-category-media">
        <img src={image} alt={alt} className="home-category-image" />
        <div className="home-category-overlay" />
      </div>

      <div className="home-category-content">
        <span className="home-category-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>

        <span className="home-category-cta">
          <span className="home-category-cta-text">Explore selection</span>
          <span className="home-category-cta-line" />
          <span className="home-category-cta-arrow">↗</span>
        </span>
      </div>

      <span className="home-category-cursor">
        <span>View</span>
      </span>
    </Link>
  );
}

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const [countryCode, setCountryCode] = useState("BR");
  const [currency, setCurrency] = useState<CurrencyCode>("BRL");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 60);

    const locale = navigator.language || "pt-BR";
    const inferredCountry = locale.split("-")[1]?.toUpperCase() || "BR";
    const inferredCurrency = detectCurrency(inferredCountry);

    setCountryCode(inferredCountry);
    setCurrency(inferredCurrency);

    return () => clearTimeout(timer);
  }, []);

  const featuredProducts = useMemo(() => products.slice(0, 4), []);

  const inspirationImages = [
    {
      title: "Neutral fashion",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
      tag: "Moda neutra",
    },
    {
      title: "Leather accessories",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
      tag: "Couro e acessórios",
    },
    {
      title: "Ceramic decor",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      tag: "Cerâmica e decoração",
    },
    {
      title: "Refined home objects",
      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      tag: "Casa refinada",
    },
  ];

  return (
    <main className={`home-page ${loaded ? "page-is-ready" : ""}`}>
      <section className="home-hero">
        <div className="home-hero-inner">
          <span className="home-hero-kicker">CURATED BRAZILIAN DESIGN</span>

          <h1 className="home-brand-title">D&apos;OUTRO LADO</h1>

          <p className="home-hero-description">
            Independent Brazilian curation for clients who value refined design,
            material integrity and objects with identity.
          </p>

          <div className="home-proof-strip">
            <span>Brazil → Europe</span>
            <span>Independent curation</span>
            <span>No apparent brands</span>
          </div>

          <div className="home-locale-bar">
            <span>Shipping to: {detectCountryLabel(countryCode)}</span>
            <span>Currency: {currency}</span>
          </div>
        </div>
      </section>

      <section className="home-category-section">
        <div className="home-category-grid">
          <CategoryCard
            href="/produtos/moda"
            image="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=80"
            alt="Moda neutra, couro e acessórios"
            eyebrow="SELEÇÃO"
            title="MODA NEUTRA, COURO E ACESSÓRIOS"
            description="Bolsas de crochê, bolsas de couro, coturnos femininos, sapatos sociais, óculos de sol, carteiras e nécessaires em uma curadoria elegante e sem marcas aparentes."
            delay={120}
          />

          <CategoryCard
            href="/produtos/casa"
            image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80"
            alt="Cerâmica, decoração e casa"
            eyebrow="SELEÇÃO"
            title="CERÂMICA, DECORAÇÃO E CASA"
            description="Peças de cerâmica, pratos, xícaras, travessas e itens de decoração com estética minimalista, refinada e acolhedora."
            delay={260}
          />
        </div>
      </section>

      <section className="home-inspiration-section">
        <div className="section-shell">
          <div className="section-heading">
            <span className="section-kicker">Visual direction</span>
            <h2>Uma referência visual próxima do que você pretende vender.</h2>
            <p>
              Esta seção serve como inspiração temporária para você enxergar o
              potencial da home com produtos relacionados ao seu catálogo.
            </p>
          </div>

          <div className="home-inspiration-grid">
            {inspirationImages.map((item) => (
              <div key={item.title} className="inspiration-card">
                <div className="inspiration-media">
                  <img src={item.image} alt={item.title} className="inspiration-image" />
                </div>
                <div className="inspiration-body">
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-featured-products">
        <div className="section-shell">
          <div className="section-heading">
            <span className="section-kicker">Featured selection</span>
            <h2>Access Brazilian design without intermediaries.</h2>
            <p>
              A tighter commercial edit for buyers seeking distinct materiality,
              premium presentation and export-ready curation.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => {
              const converted = convertFromBRL(product.priceBRL, currency);

              return (
                <Link
                  key={product.id}
                  href={`/produto/${product.slug}`}
                  className="product-card"
                >
                  <div className="product-card-image-wrap">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-card-image"
                    />
                  </div>

                  <div className="product-card-body">
                    <div className="product-card-topline">
                      <span>{product.material}</span>
                      <span>{product.origin}</span>
                    </div>

                    <h3>{product.name}</h3>
                    <p>{product.description}</p>

                    <div className="product-card-bottom">
                      <strong>{formatCurrency(converted, currency)}</strong>
                      <span>Add to selection</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}