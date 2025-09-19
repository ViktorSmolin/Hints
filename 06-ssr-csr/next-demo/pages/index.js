export async function getServerSideProps() {
  // SSR: данные попадают в HTML до загрузки JS
  return { props: { time: new Date().toISOString() } };
}
export default function Home({ time }) {
  return (
    <main>
      <h1>SSR Page</h1>
      <p>Time: {time}</p>
    </main>
  );
}
