// Número padrão (já usei o seu)
const DEFAULT_PHONE = "5516991977845";

// Gera link do WhatsApp com mensagem
export function buildWhatsAppLink(
  message: string,
  phone: string = DEFAULT_PHONE
): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

// Mensagem simples baseada no status do pedido
export function buildStatusMessage(status: string): string {
  switch (status.toLowerCase()) {
    case "pendente":
      return "Seu pedido foi recebido e está pendente de confirmação.";
    case "pago":
      return "Pagamento confirmado! Estamos preparando seu pedido.";
    case "enviado":
      return "Seu pedido foi enviado e está a caminho.";
    case "entregue":
      return "Pedido entregue com sucesso. Obrigado pela compra!";
    case "cancelado":
      return "Seu pedido foi cancelado. Se precisar, fale conosco.";
    default:
      return `Status do pedido: ${status}`;
  }
}

// Mensagem completa do pedido (opcional - útil pro admin)
export function buildOrderMessage(order: {
  id: string | number;
  customerName?: string;
  total?: number;
  currency?: string;
  status?: string;
}) {
  return `
Pedido #${order.id}
Cliente: ${order.customerName || "Não informado"}
Total: ${order.total || 0} ${order.currency || ""}
Status: ${order.status || "N/A"}
`.trim();
}