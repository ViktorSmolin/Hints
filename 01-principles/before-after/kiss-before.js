export function formatPrice(v, c) {
  if ((v || v === 0) && typeof v === "number" && !Number.isNaN(v)) {
    if (c === "USD" || c === "EU" || c === "RUB") {
      return (c === "USD" ? "$" : c === "EU" ? "€" : "₽") + v.toFixed(2);
    }
  }
  return "—";
}
