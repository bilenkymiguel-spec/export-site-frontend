const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "http://localhost:3001";

export type OrderItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  quantity: number;
  exportScore?: number;
};

export type Order = {
  id: number;
  createdAt: string;
  updatedAt?: string;
  status: string;
  buyer: {
    company?: string;
    name?: string;
    email: string;
    country: string;
    phone?: string;
    contactMethod?: string;
  };
  notes?: string;
  items: OrderItem[];
};

type RequestInitSafe = RequestInit & {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
};

async function request<T>(
  path: string,
  init?: RequestInitSafe
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
    cache: init?.cache ?? "no-store",
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `API error ${response.status} on ${path}${text ? `: ${text}` : ""}`
    );
  }

  return response.json() as Promise<T>;
}

export async function apiGet<T>(
  path: string,
  init?: Omit<RequestInitSafe, "method" | "body">
): Promise<T> {
  return request<T>(path, {
    ...init,
    method: "GET",
  });
}

export async function apiPost<T, B = unknown>(
  path: string,
  body?: B,
  init?: Omit<RequestInitSafe, "method" | "body">
): Promise<T> {
  return request<T>(path, {
    ...init,
    method: "POST",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export async function apiPut<T, B = unknown>(
  path: string,
  body?: B,
  init?: Omit<RequestInitSafe, "method" | "body">
): Promise<T> {
  return request<T>(path, {
    ...init,
    method: "PUT",
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

export async function apiDelete<T>(
  path: string,
  init?: Omit<RequestInitSafe, "method" | "body">
): Promise<T> {
  return request<T>(path, {
    ...init,
    method: "DELETE",
  });
}

/**
 * Corrige o erro:
 * Export getOrders doesn't exist in target module
 */
export async function getOrders(): Promise<Order[]> {
  try {
    return await apiGet<Order[]>("/orders");
  } catch (error) {
    console.error("Erro ao buscar pedidos:", error);
    return [];
  }
}