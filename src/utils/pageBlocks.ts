import type { PageBlock } from "../types/pageVersion";

export function renderPreviewHtml(title: string, blocks: PageBlock[]) {
  const htmlBlocks = blocks
    .map((block) => {
      switch (block.type) {
        case "hero":
          return `
            <section style="padding:64px 24px;border-bottom:1px solid #2b2b2b;">
              <h1 style="font-size:42px;margin-bottom:12px;">${block.title ?? ""}</h1>
              <p style="font-size:18px;color:#d6d0c4;">${block.subtitle ?? ""}</p>
            </section>
          `;
        case "text":
          return `
            <section style="padding:32px 24px;">
              <h2 style="font-size:28px;margin-bottom:12px;">${block.title ?? ""}</h2>
              <p style="line-height:1.7;color:#d6d0c4;">${block.content ?? ""}</p>
            </section>
          `;
        case "image":
          return `
            <section style="padding:32px 24px;">
              <img src="${block.imageUrl ?? ""}" alt="${block.title ?? ""}" style="width:100%;max-width:900px;border-radius:16px;display:block;margin:0 auto;" />
            </section>
          `;
        case "grid":
          return `
            <section style="padding:32px 24px;">
              <h2 style="font-size:28px;margin-bottom:18px;">${block.title ?? ""}</h2>
              <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;">
                ${(block.items ?? [])
                  .map(
                    (item) => `
                  <div style="background:#111;padding:20px;border:1px solid #2b2b2b;border-radius:14px;">
                    ${item}
                  </div>`
                  )
                  .join("")}
              </div>
            </section>
          `;
        case "cta":
          return `
            <section style="padding:48px 24px;text-align:center;">
              <h2 style="font-size:30px;margin-bottom:12px;">${block.title ?? ""}</h2>
              <p style="margin-bottom:18px;color:#d6d0c4;">${block.content ?? ""}</p>
              <a href="${block.buttonHref ?? "#"}" style="display:inline-block;padding:14px 24px;background:#f4efe6;color:#000;text-decoration:none;border-radius:999px;font-weight:600;">
                ${block.buttonLabel ?? "Saiba mais"}
              </a>
            </section>
          `;
        default:
          return "";
      }
    })
    .join("");

  return `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
      </head>
      <body style="margin:0;background:#050505;color:#f4efe6;font-family:Arial, sans-serif;">
        ${htmlBlocks}
      </body>
    </html>
  `;
}