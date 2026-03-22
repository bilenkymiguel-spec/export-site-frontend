const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiGet<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error("Erro na API");
  }

  return res.json();
}

export async function getOrders() {
  return apiGet("/orders");
}

export async function getGovernance() {
  return apiGet("/governance");
}