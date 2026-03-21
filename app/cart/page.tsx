"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, getTotal } = useCart();

  return (
    <div style={{ padding: 20 }}>
      <h1>Carrinho</h1>

      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          <div style={{ marginTop: 20 }}>
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  padding: 16,
                  marginBottom: 16,
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: 100,
                    height: 100,
                    objectFit: "cover",
                    borderRadius: 8,
                  }}
                />

                <div style={{ flex: 1 }}>
                  <h3>{item.name}</h3>
                  <p>Preço unitário: R$ {item.price}</p>
                  <p>Quantidade: {item.quantity}</p>
                  <p>Subtotal: R$ {item.price * item.quantity}</p>
                </div>

                <button onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </div>
            ))}
          </div>

          <h2>Total: R$ {getTotal()}</h2>
        </>
      )}
    </div>
  );
}