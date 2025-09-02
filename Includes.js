const permissions = ["read", "write", "delete"];

// Проверка прав доступа
const canDelete = permissions.includes("delete"); // true

// Поиск в строке
const email = "user@example.com";
const isValidDomain = email.includes("@example.com"); // true

// Практический пример: фильтрация по тегам
const hasRequiredTags = (postTags, requiredTags) => {
  return requiredTags.every((tag) => postTags.includes(tag));
};

// Параметры функции:

// postTags — массив тегов, которые есть у поста
// requiredTags — массив тегов, которые должны быть у поста

// Логика работы:

// requiredTags.every() — проходит по каждому обязательному тегу
// (tag) => postTags.includes(tag) — для каждого тега проверяет, есть ли он в массиве тегов поста
// postTags.includes(tag) — возвращает true, если тег найден в массиве тегов поста
// every() возвращает true только если ВСЕ обязательные теги найдены

// Теги поста
const postTags = ["javascript", "react", "frontend", "tutorial"];

// Обязательные теги для фильтрации
const requiredTags = ["javascript", "react"];

// Проверяем наличие всех обязательных тегов
const result = hasRequiredTags(postTags, requiredTags);

// Пошаговое выполнение:
// 1. every() берет первый тег: 'javascript'
//    postTags.includes('javascript') → true
// 2. every() берет второй тег: 'react'
//    postTags.includes('react') → true
// 3. Все теги найдены → every() возвращает true

console.log(result); // true

// Различные сценарии использования

console.log(hasRequiredTags(postTags, requiredTags)); // true

const postTagsNew = ["javascript", "vue", "tutorial"];

console.log(hasRequiredTags(postTagsNew, requiredTags)); // false

const tags = ["javascript", "react"];
const requiredTagsZero = []; // нет обязательных тегов

console.log(hasRequiredTags(tags, requiredTagsZero)); // true

// Практическое применение

// Фильтрация постов блога

const blogPosts = [
  {
    title: "Введение в React",
    tags: ["javascript", "react", "frontend"],
  },
  {
    title: "Node.js для начинающих",
    tags: ["javascript", "nodejs", "backend"],
  },
  {
    title: "React Hooks",
    tags: ["javascript", "react", "hooks", "frontend"],
  },
];

// Ищем посты с тегами 'javascript' И 'react'
const filterTags = ["javascript", "react"];

const filteredPosts = blogPosts.filter((post) =>
  hasRequiredTags(post.tags, filterTags)
);

console.log(filteredPosts);
// Результат: посты "Введение в React" и "React Hooks"

// Система разрешений

const userPermissions = ["read", "write", "delete", "admin"];
const requiredPermissions = ["read", "write"];

const hasAccess = hasRequiredTags(userPermissions, requiredPermissions);
console.log(`Доступ ${hasAccess ? "разрешен" : "запрещен"}`);

// Альтернативная реализация (для сравнения)

// Без every() - более громоздко
const hasRequiredTagsManual = (postTags, requiredTags) => {
  for (let tag of requiredTags) {
    if (!postTags.includes(tag)) {
      return false; // Если хотя бы один тег не найден
    }
  }
  return true; // Все теги найдены
};

// С every() - более элегантно и читаемо
const hasRequiredTagsS = (postTags, requiredTags) => {
  return requiredTags.every((tag) => postTags.includes(tag));
};

// Для больших массивов лучше использовать Set
const hasRequiredTagsOptimized = (postTags, requiredTags) => {
  const postTagsSet = new Set(postTags);
  return requiredTags.every((tag) => postTagsSet.has(tag));
};

// Функция hasRequiredTags — отличный пример того, как every() делает код более читаемым и
// выразительным при решении задач проверки соответствия всех элементов определенному условию.
