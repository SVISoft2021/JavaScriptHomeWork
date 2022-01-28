/*
Задача 4.6.

Создать имплементацию функции `reduceRight`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

const arr = [1,2,3];
const acc = 0;
reduceRight(arr, function(acc, item, i, arr) {}, acc);

*/

function ReduceRight(array, callback, acc) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' это не массив');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' это не функция');
    }

    if (typeof acc !== 'number' && typeof acc !== 'string') {
        throw new Error('тип параметра не является числом или строкой');
    }
    var result = acc;
    for (var i = array.length - 1; i >= 0; i--) {
        result = callback(array[i], result);
    }
    return result;
}

const arr = [1, 2, 3];
const acc = 15;
console.log(`Заданный массив [${arr}]`);
console.log('Обработка [сумма всех элементов (с конца массива) начиная с ' + acc + ']:');
console.log('-> ' + 
    ReduceRight(arr, function (acc, item, i, arr) {return item + acc}, acc));


const arr1 = ['A', 'B', 'C'];
const acc1 = '#';
console.log(`\nЗаданный массив [${arr1}]`);
console.log('Обработка [слияние (с конца массива) элементов начиная с ' + acc1 + ']:');
console.log('-> ' + 
    ReduceRight(arr1, function (acc1, item, i, arr1) {return item + acc1}, acc1));    