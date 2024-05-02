// Задача 1. Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, 
// содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа. 
// Например, при вводе числа 25 функция должна возвращать "25 компьютеров", 
// для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров"


const wordDeclension = (number) => {
    const remainder = number % 10;
    switch (remainder) {
        case 1:
            return `${number} компьютер`;
        case 2:
        case 3:
        case 4:
            return `${number} компьютера`;
        default:
            return `${number} компьютеров`;
    }
}

// проверка
wordDeclension(1);
wordDeclension(2);
wordDeclension(43);
wordDeclension(49);
wordDeclension(100);