export const API_URL = "http://localhost:3001";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products`);
  if (!res.ok) {
    throw new Error("Erro ao buscar produtos");
  }
  return res.json();
}

export async function createOrder(order: any) {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });

  if (!res.ok) {
    throw new Error("Erro ao criar pedido");
  }

  return res.json();
}

export async function getOrders() {
  const res = await fetch(`${API_URL}/orders`);
  if (!res.ok) {
    throw new Error("Erro ao buscar pedidos");
  }
  return res.json();
}

export async function updateOrderStatus(id: number, status: string) {
  const res = await fetch(`${API_URL}/orders/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) {
    throw new Error("Erro ao atualizar status");
  }

  return res.json();
}