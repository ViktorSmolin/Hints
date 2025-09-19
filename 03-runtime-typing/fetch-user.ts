type ApiUser = { id: number; email: string };

async function fetchUserTs(id: number): Promise<ApiUser> {
  const res = await fetch(`/api/users/${id}`);
  // TS верит нам, но сервер может прислать что угодно!
  return res.json();
}
