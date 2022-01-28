/*
Задача 4.10.

Создать имплементацию функции `reverse`, которая принимает массив в качестве параметра, а возвращает массив только в обратном порядке.

Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Генерировать ошибку если был передан пустой массив


const arr = [3,2,1];
reverse(arr); // [1,2,3]

*/

function Reverse(array) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' это не массив');
    }

    if (array.length === 0) {
        throw new Error(array + ' имеет нулевую длитну');
    }

    var arrayReverse = [];
    for (var i = array.length - 1; i >= 0; i--) {
        arrayReverse.push(array[i]);
    }
    return arrayReverse;
}

const arr = [3, 2, 1];
console.log(`\nЗаданный массив - [${arr}]`+'\nОбработка [обратный масив]-> ' + Reverse(arr));