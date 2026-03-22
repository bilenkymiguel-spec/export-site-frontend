"use client";

import Link from "next/link";
import Image from "next/image";
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
        <Image src={image} alt={alt} fill className="home-category-image" />
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
          {categories.map((category, index) => (
            <CategoryCard
              key={category.slug}
              href={`/produtos/${category.slug}`}
              image={category.heroImage}
              alt={category.title}
              eyebrow={category.eyebrow.toUpperCase()}
              title={category.title.toUpperCase()}
              description={category.shortDescription}
              delay={120 + index * 120}
            />
          ))}
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
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
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