export function Bad({ html }) {
  // Никогда так не делай с внешними данными
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
