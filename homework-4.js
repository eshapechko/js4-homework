// Написать стрелочную функцию addTypeNames(types), которая принимает массив types и возвращает массив объектов, где ключ - это название типа, а значение - само значение из массива types.
// ...
const bigInt = 1234567890123456789012345678901234567890n;
const symbolValue = Symbol("symbol");
const types = [
  100,
  bigInt,
  "Hello there!",
  true,
  null,
  undefined,
  symbolValue,
  { key: "value" },
];

// На выходе массив должен выглядеть так:
// [
//   { number: 100 } ,
//   { bigInt: 1234567890123456789012345678901234567890n },
//   { string: 'Hello there!' },
//   { boolean: true },
//   { null: null },
//   { undefined: undefined },
//   { symbol: Symbol(symbol) },
//   { object: { key: 'value' } },
// ]
// Подсказка: значение null нужно проверять как  value === null, иначе будет 'object'
// const typesAndData = types.map((element) => {

const typesAndData = types.map((element) => {
  let obj = {};
  obj[typeof element] = element;
  if (obj[typeof element] === null) {
    return { null: null };
  }
  return obj;
});

console.log(typesAndData);

// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра

const getSum = (n1, n2) => {
  if (typeof n1 === "number" && typeof n2 === "number") {
    console.log(n1 + n2);
  } else if (typeof n1 === undefined || typeof n2 === undefined) {
    console.log("введите два параметра");
  } else if (typeof n1 !== "number" || typeof n2 !== "number") {
    console.log("введенные данные не являются числами");
  }
};

console.log(getSum(8, 10));
console.log(getSum());

// Задание 2
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка
// "Функция "square" не может быть вызвана без аргумента"

function square(a) {
  if (isNaN(a)) {
    console.log(
      `Uncaught Error: Функция "square" не может быть вызвана без аргумента`
    );
  } else {
    console.log(a * a);
  }
}

square(10);
square("r");
square();

// А так можно?

// function square(a) {
//   if (typeof a === undefined) {
//     console.log( `Uncaught Error: Функция "square" не может быть вызвана без аргумента`);
//   } else {
//     console.log(a * a);
//   }
// }

// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента

// Задание 3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.

// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”

// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.

// Написать функцию в стрелочном синтаксисе.

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const guessNumber = (number) => {
  let n = getRandomInteger(1, 10);
  if (number === n || (!(number >= 1) && !(number <= 10))) {
    return "Вы выиграли";
  } else if (number !== n) {
    return `Вы не угадали, ваше число - ${number},  а выпало число ${n}`;
  }
};

console.log(guessNumber(8));

// Задание 4

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];
const filterFor = (arr, a) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filterFor(arr, 2));

// Задание 5
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.

const copyArr = arr.map((element) => element);
console.log(copyArr);

// Задание 6

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: "string",
  d: 12,
};

const sumObjectValues = () => {
  let sum = 0;
  for (let key in objectWithNumbers) {
    if (typeof objectWithNumbers[key] === "number") {
      sum += objectWithNumbers[key];
    }
  }
  return sum;
};

console.log(sumObjectValues());
