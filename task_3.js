// Задача 3. Написать функцию/метод, которая возвращает
// массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.
// Например, на вход переданы 2 числа: от 11 до 20  (диапазон считается включая граничные значения).
// На выходе программа должна выдать [11, 13 , 17, 19]

function arrayPrimeNumber(start_numb, end_numb) {
  const array = [];
    for (let i = start_numb; i <= end_numb; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j === 0 && j < i) {
        break;
      } else if (j === i) {
        array.push(i);
      }
    }
  }
  return array;
}
console.log(arrayPrimeNumber(11, 20));
