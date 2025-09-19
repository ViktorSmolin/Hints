const ERROR = (code, message, userMessage, meta = {}) => ({
  code,
  message,
  userMessage,
  retryable: code === "NETWORK",
  ...meta,
});

export async function httpGet(url) {
  try {
    const res = await fetch(url);
    if (!res.ok)
      throw ERROR(
        "HTTP",
        `Status ${res.status}`,
        "Сервис недоступен, попробуйте позже"
      );
    const json = await res.json();
    return json;
  } catch (e) {
    if (e.code) throw e;
    if (e.name === "TypeError")
      throw ERROR("NETWORK", e.message, "Проверьте подключение к интернету");
    throw ERROR("UNKNOWN", String(e?.message || e), "Непредвиденная ошибка");
  }
}

// пример маппинга на UX:
export function handleErrorToUX(err) {
  if (err.code === "NETWORK") return { toast: err.userMessage, retry: true };
  if (err.code === "HTTP") return { toast: err.userMessage, retry: true };
  if (err.code === "BAD_SHAPE")
    return { toast: "Данные некорректны", retry: false };
  return { toast: "Что-то пошло не так", retry: true };
}
