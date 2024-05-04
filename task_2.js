// Задача 2. Написать функцию/метод, которая на вход получает массив
// положительных целых чисел произвольной длины.
// Например [42, 12, 18]. На выходе возвращает массив чисел,
// которые являются общими делителями для всех указанных числе.
// В примере это будет [2, 3, 6].

// const array = [42, 12, 18];
const array = [120, 180, 240];

function commonDivisor(array) {
  const arrayLength = array.length;
  const tempArray = [];
  let minNumb = Infinity;

  for (const numb of array) {
    if (numb < minNumb) minNumb = numb;
  }

  for (let i = 2; i <= minNumb; i++) {
    for (const num of array) {
      if (num % i == 0) tempArray.push(i);
    }
  }

  const resultArray = tempArray.filter((item, index) => {
    return (
      tempArray.indexOf(item) === index &&
      tempArray.lastIndexOf(item) - index === arrayLength - 1
    );
  });

  return resultArray;
}

console.log(commonDivisor(array));
