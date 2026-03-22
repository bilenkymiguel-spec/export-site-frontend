"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { getProductBySlug } from "../../../src/data/catalogData";
import {
  convertFromBRL,
  detectCurrency,
  formatCurrency,
  type CurrencyCode,
} from "../../../src/utils/intl";

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);
  const [activeImage, setActiveImage] = useState(0);
  const [currency, setCurrency] = useState<CurrencyCode>("BRL");

  useEffect(() => {
    const locale = navigator.language || "pt-BR";
    const inferredCountry = locale.split("-")[1]?.toUpperCase() || "BR";
    setCurrency(detectCurrency(inferredCountry));
  }, []);

  const convertedPrice = useMemo(() => {
    if (!product) return 0;
    return convertFromBRL(product.priceBRL, currency);
  }, [product, currency]);

  if (!product) {
    notFound();
  }

  return (
    <main className="page-shell">
      <section className="product-detail-shell">
        <div className="product-gallery">
          <div className="product-main-image">
            <Image
              src={product.gallery[activeImage]}
              alt={product.name}
              fill
              className="product-main-image-el"
            />
          </div>

          <div className="product-thumb-row">
            {product.gallery.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`product-thumb ${activeImage === index ? "is-active" : ""}`}
                onClick={() => setActiveImage(index)}
              >
                <Image src={image} alt={`${product.name} ${index + 1}`} fill className="product-thumb-image" />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <span className="section-kicker">Product</span>
          <h1 className="page-title">{product.name}</h1>

          <div className="product-price-row">
            <strong>{formatCurrency(convertedPrice, currency)}</strong>
            <span>International pricing preview</span>
          </div>

          <p className="product-description">{product.description}</p>

          <div className="product-purpose">
            <h2>Why this product exists</h2>
            <p>{product.purpose}</p>
          </div>

          <div className="product-meta">
            <div>
              <span>Origin</span>
              <strong>{product.origin}</strong>
            </div>
            <div>
              <span>Material</span>
              <strong>{product.material}</strong>
            </div>
            <div>
              <span>Production</span>
              <strong>{product.production}</strong>
            </div>
            <div>
              <span>Availability</span>
              <strong>{product.availability}</strong>
            </div>
          </div>

          <div className="product-actions">
            <Link href="/checkout" className="primary-action">
              Initiate order
            </Link>
            <Link href={`/produtos/${product.categorySlug}`} className="secondary-action">
              Back to category
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}