// Принцип работы:
// Функция принимает массив arr и искомое значение x
// Проходит по каждому элементу массива последовательно
// Если находит совпадение с искомым значением, возвращает индекс элемента
// Если элемент не найден, возвращает -1
// Сложность алгоритма: O(n), где n - размер массив

function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) if (arr[i] === x) return i;
  return -1;
}

// Принцип работы:
// Работает только с отсортированным массивом
// Использует метод деления отрезка пополам
// l и r - левая и правая границы поиска
// m - середина текущего отрезка
// Если значение в середине равно искомому - возвращает индекс
// Если значение меньше искомого - сужает поиск вправо
// Если значение больше искомого - сужает поиск влево
// Сложность алгоритма: O(log n)

function binarySearch(sortedArr, x) {
  let l = 0,
    r = sortedArr.length - 1;
  while (l <= r) {
    const m = (l + r) >> 1;
    if (sortedArr[m] === x) return m;
    if (sortedArr[m] < x) l = m + 1;
    else r = m - 1;
  }
  return -1;
}

function measure(label, fn) {
  const t0 = performance.now();
  const res = fn();
  const t1 = performance.now();
  console.log(label, (t1 - t0).toFixed(3), "ms");
  return res;
}

const N = 1_000_000;
const arr = Array.from({ length: N }, (_, i) => i);
const target = N - 10;

measure("linear O(n)", () => linearSearch(arr, target));
measure("binary O(log n)", () => binarySearch(arr, target));
