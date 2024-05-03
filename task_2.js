// Задача 2. Написать функцию/метод, которая на вход получает массив
// положительных целых чисел произвольной длины.
// Например [42, 12, 18]. На выходе возвращает массив чисел,
// которые являются общими делителями для всех указанных числе.
// В примере это будет [2, 3, 6].

const array = [42, 12, 18];
let minNumb = Infinity;
const tempArray = [];

for (const numb of array) {
  if (numb < minNumb) minNumb = numb;
}

for (let i = 2; i <= minNumb; i++) {
    for (const num of array) {
        if (num % i == 0) {
            tempArray.push(i);
        }
    }
}
console.log(tempArray);

const uniqArray = tempArray.reduce((idx, numb ) => {
    if (idx.includes(numb)) {
        return idx;
    }
    return [...idx, numb];
}, []);
console.log(uniqArray);

let count = tempArray.reduce(function (array, idx) {
  return array[idx] ? ++array[idx] : (array[idx] = 1), array;
}, {});

console.log(count);