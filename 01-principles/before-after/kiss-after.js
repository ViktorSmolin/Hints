const symbols = { USD: "$", EU: "€", RUB: "₽" };

export function formatPrice(value, currency = "USD") {
  if (typeof value !== "number" || Number.isNaN(value)) return "—";
  const s = symbols[currency] ?? symbols.USD;
  return `${s}${value.toFixed(2)}`;
}
