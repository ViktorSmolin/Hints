import { useEffect, useState } from "react";
export default function Dashboard() {
  const [time, setTime] = useState(null);
  useEffect(() => setTime(new Date().toISOString()), []);
  return (
    <main>
      <h1>CSR Page</h1>
      <p>Time: {time ?? "loading..."}</p>
    </main>
  );
}
