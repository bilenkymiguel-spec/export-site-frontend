import type { ManagedPage } from "../types/pageVersion";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:3001";

export async function getManagedPage(slug: string): Promise<ManagedPage | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/pages/${slug}`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as ManagedPage;
    return data;
  } catch {
    return null;
  }
}

export { API_BASE_URL };