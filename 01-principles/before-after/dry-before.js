export async function fetchUsers() {
  const res = await fetch("/api/users");
  if (!res.ok) throw new Error("Network");
  const json = await res.json();
  if (!Array.isArray(json)) throw new Error("Shape");
  return json;
}

export async function fetchPosts() {
  const res = await fetch("/api/posts");
  if (!res.ok) throw new Error("Network");
  const json = await res.json();
  if (!Array.isArray(json)) throw new Error("Shape");
  return json;
}
