async function fetchList(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Network");
  const json = await res.json();
  if (!Array.isArray(json)) throw new Error("Shape");
  return json;
}

export const fetchUsers = () => fetchList("/api/users");
export const fetchPosts = () => fetchList("/api/posts");
