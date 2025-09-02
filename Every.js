// every() — это встроенный метод массивов в JavaScript,
// который проверяет, удовлетворяют ли все элементы массива
// условию, заданному в передаваемой функции.

array.every(callback[(_, thisArg)]);

// callback — функция, которая вызывается для каждого элемента массива
// thisArg (необязательный) — значение this при выполнении callback

const numbers = [2, 4, 6, 8, 10];

// Проверяем, все ли числа четные
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true

const mixedNumbers = [2, 4, 5, 8];
const allEvenMixed = mixedNumbers.every((num) => num % 2 === 0);
console.log(allEvenMixed); // false (из-за числа 5)
