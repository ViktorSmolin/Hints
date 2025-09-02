const users = [
  { id: 1, name: "John", active: false },
  { id: 2, name: "Jane", active: true },
  { id: 3, name: "Bob", active: true },
];

// Найти первого активного пользователя
const activeUser = users.find((user) => user.active);
console.log(activeUser); // { id: 2, name: 'Jane', active: true }

// Практический пример: поиск компонента по ID
const findComponentById = (components, targetId) => {
  return components.find((comp) => comp.id === targetId);
};
