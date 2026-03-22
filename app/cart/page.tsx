"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart } =
    useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="page-shell">
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <p className="eyebrow">Carrinho</p>
              <h1 className="section-title">Seus itens selecionados</h1>
            </div>

            <Link href="/produtos" className="outline-btn">
              Continuar comprando
            </Link>
          </div>

          {cart.length === 0 ? (
            <section className="empty-box">
              <p style={{ fontSize: 22, margin: 0, color: "var(--muted)" }}>
                Seu carrinho está vazio.
              </p>

              <div style={{ marginTop: 24 }}>
                <Link href="/produtos" className="gold-btn">
                  Ver catálogo
                </Link>
              </div>
            </section>
          ) : (
            <div className="cart-layout">
              <section className="cart-list">
                {cart.map((item) => (
                  <article key={item.id} className="cart-item">
                    <div className="cart-item-grid">
                      <div className="cart-item-media">
                        {item.image ? (
                          <img src={item.image} alt={item.name} />
                        ) : (
                          <div className="product-media-placeholder">
                            <p className="mini-brand">D’OUTRO LADO</p>
                            <p className="mini-copy">
                              Espaço reservado para imagem
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="cart-item-body">
                        <div>
                          <p className="product-category">
                            {item.category || "Produto"}
                          </p>
                          <h2 className="cart-item-name">{item.name}</h2>
                          <p className="cart-item-price">
                            {formatPrice(item.price)}
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 16,
                            alignItems: "center",
                            flexWrap: "wrap",
                          }}
                        >
                          <div className="qty-row">
                            <button
                              type="button"
                              onClick={() => decreaseQuantity(item.id)}
                              className="small-btn"
                            >
                              −
                            </button>

                            <span className="qty-number">{item.quantity}</span>

                            <button
                              type="button"
                              onClick={() =>
                                addToCart({
                                  id: item.id,
                                  name: item.name,
                                  price: item.price,
                                  image: item.image,
                                  category: item.category,
                                })
                              }
                              className="small-btn"
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="remove-btn"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </section>

              <aside className="cart-panel">
                <p className="eyebrow" style={{ marginBottom: 10 }}>
                  Resumo
                </p>
                <h3 style={{ margin: 0, fontSize: 34, fontWeight: 300 }}>
                  Pedido
                </h3>

                <div
                  style={{
                    marginTop: 28,
                    paddingTop: 22,
                    borderTop: "1px solid var(--line)",
                  }}
                >
                  <div className="summary-line">
                    <span>Itens</span>
                    <span>
                      {cart.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
                  </div>

                  <div className="summary-line">
                    <span>Total</span>
                    <span className="summary-total">{formatPrice(total)}</span>
                  </div>
                </div>

                <div className="stack" style={{ marginTop: 28 }}>
                  <Link href="/checkout" className="gold-btn">
                    Ir para checkout
                  </Link>

                  <button
                    type="button"
                    onClick={clearCart}
                    className="ghost-btn"
                  >
                    Limpar carrinho
                  </button>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}