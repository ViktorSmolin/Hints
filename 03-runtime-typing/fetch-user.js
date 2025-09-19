import { z } from "zod";

const User = z.object({ id: z.number(), email: z.string().email() });

export async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  const json = await res.json();
  const parsed = User.safeParse(json);
  if (!parsed.success) {
    throw {
      code: "BAD_SHAPE",
      userMessage: "Что-то пошло не так. Попробуйте позже.",
    };
  }
  return parsed.data;
}
