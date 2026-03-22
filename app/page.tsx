"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
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
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1100px) 100vw, 50vw"
          className="home-category-image"
        />
        <div className="home-category-overlay" />
      </div>

      <div className="home-category-content">
        <span className="home-category-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{description}</p>

        <span className="home-category-cta">
          <span className="home-category-cta-text">EXPLORAR</span>
          <span className="home-category-cta-line" />
          <span className="home-category-cta-arrow">↗</span>
        </span>
      </div>

      <span className="home-category-cursor">
        <span>VER</span>
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
      <Navbar />

      <section className="home-hero-premium">
        <div className="home-hero-premium-inner">
          <span className="home-hero-kicker">CURADORIA BRASILEIRA PARA O MUNDO</span>

          <h1 className="home-brand-title">D&apos;OUTRO LADO</h1>

          <p className="home-hero-description">
            Produtos brasileiros selecionados com linguagem visual refinada,
            materialidade forte e apresentação internacional.
          </p>

          <div className="home-proof-strip">
            <span>Brasil → Europa</span>
            <span>Curadoria independente</span>
            <span>Sem marcas aparentes</span>
          </div>

          <div className="home-locale-bar">
            <span>Shipping to: {detectCountryLabel(countryCode)}</span>
            <span>Currency: {currency}</span>
          </div>
        </div>
      </section>

      <section className="home-editorial-intro">
        <div className="section-shell">
          <div className="home-editorial-copy reveal-card" style={{ animationDelay: "100ms" }}>
            <span className="section-kicker">Posicionamento</span>
            <h2>Uma boutique internacional com curadoria brasileira refinada.</h2>
            <p>
              A D&apos;OUTRO LADO reúne moda neutra, couro, acessórios e objetos
              para casa com presença discreta, estética sofisticada e potencial
              real para mercados internacionais.
            </p>
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
              delay={140 + index * 120}
            />
          ))}
        </div>
      </section>

      <section className="home-featured-products">
        <div className="section-shell">
          <div className="section-heading">
            <span className="section-kicker">Seleção em destaque</span>
            <h2>Objetos e acessórios com identidade, não tendência.</h2>
            <p>
              Uma edição comercial mais precisa para compradores que buscam
              design brasileiro com apresentação premium e leitura internacional.
            </p>
          </div>

          <div className="product-grid">
            {featuredProducts.map((product) => {
              const convertedPrice = convertFromBRL(product.priceBRL, currency);

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
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
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
                      <strong>{formatCurrency(convertedPrice, currency)}</strong>
                      <span>Add to selection</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="home-final-statement">
        <div className="section-shell">
          <div className="home-final-card">
            <span className="section-kicker">International access</span>
            <h2>Access Brazilian design without intermediaries.</h2>
            <p>
              Curadoria, apresentação e direção visual pensadas para aproximar
              produção local de clientes internacionais com mais clareza, valor
              percebido e sofisticação.
            </p>

            <div className="home-final-actions">
              <Link href="/sobre" className="secondary-action">
                Sobre a curadoria
              </Link>
              <Link href="/checkout" className="primary-action">
                Iniciar pedido
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}