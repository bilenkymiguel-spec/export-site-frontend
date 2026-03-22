import type { PageBlock } from "../types/pageVersion";

export function renderPageBlocks(blocks: PageBlock[] = []): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "luxury":
          return `
            <section style="padding:64px 24px;border-bottom:1px solid #2b2b2b;background:#0a0a0a;color:#f5f1e8;">
              <div style="max-width:1100px;margin:0 auto;">
                <p style="font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:#c6b48a;margin-bottom:12px;">
                  ${block.subtitle ?? ""}
                </p>
                <h2 style="font-size:42px;line-height:1.2;margin-bottom:16px;">
                  ${block.title ?? ""}
                </h2>
                <p style="font-size:16px;line-height:1.8;color:#d8d2c4;max-width:720px;">
                  ${block.description ?? ""}
                </p>
                ${
                  block.ctaLabel && block.ctaHref
                    ? `
                  <div style="margin-top:28px;">
                    <a
                      href="${block.ctaHref}"
                      style="display:inline-block;padding:12px 22px;border:1px solid #c6b48a;color:#f5f1e8;text-decoration:none;text-transform:uppercase;letter-spacing:0.2em;font-size:12px;"
                    >
                      ${block.ctaLabel}
                    </a>
                  </div>
                `
                    : ""
                }
              </div>
            </section>
          `;

        case "slider":
          return `
            <section style="padding:64px 24px;border-bottom:1px solid #e7dfd4;background:#f7f3ee;color:#111;">
              <div style="max-width:1100px;margin:0 auto;">
                <p style="font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:#8a7a5c;margin-bottom:12px;">
                  ${block.subtitle ?? ""}
                </p>
                <h2 style="font-size:36px;line-height:1.2;margin-bottom:28px;">
                  ${block.title ?? ""}
                </h2>

                <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;">
                  ${(block.products ?? [])
                    .map(
                      (product) => `
                        <article style="background:#fff;border:1px solid #e7dfd4;border-radius:18px;overflow:hidden;">
                          <div style="height:220px;background:#f0ebe4;display:flex;align-items:center;justify-content:center;">
                            ${
                              product.image
                                ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;" />`
                                : `<span style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#9b9286;">Sem imagem</span>`
                            }
                          </div>
                          <div style="padding:18px;">
                            <p style="font-size:12px;text-transform:uppercase;letter-spacing:0.2em;color:#8a7a5c;margin-bottom:8px;">
                              ${product.category ?? "Produto"}
                            </p>
                            <h3 style="font-size:18px;margin-bottom:10px;">
                              ${product.name}
                            </h3>
                            <p style="font-size:15px;color:#4d4d4d;margin-bottom:12px;">
                              ${new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              }).format(product.price)}
                            </p>
                          </div>
                        </article>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            </section>
          `;

        default:
          return "";
      }
    })
    .join("");
}