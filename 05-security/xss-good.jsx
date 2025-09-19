import DOMPurify from "dompurify";
export function Good({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />;
}

// DOMPurify помогает предотвратить XSS-атаки
// Использование dangerouslySetInnerHTML всё равно требует осторожности с источником данных
