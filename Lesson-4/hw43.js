/*
Задача 4.3.

Создать имплементацию функции `every`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
every(arr, function(item, i, arr) {});
*/

function Every(array, callback, thisArg) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' это не массив');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' это не функция');
    }

    for (var i = 0; i < array.length; i++) {
        if (!callback.call(thisArg, array[i], i, array)) {
            return false;
        }
    }
    return true;
}

const arr = [1, 2, 3];

console.log(`Заданный массив [${arr}]`);
console.log('Обработка [все элементы числа]:');

EveryArray = Every(arr, function (item, i, arr) {
      return typeof item === 'number'});
console.log('-> ' + EveryArray);


console.log('Обработка [все элементы < 0]:');
EveryArray = Every(arr, function (item, i, arr) {
    return item < 0});
console.log('-> ' + EveryArray);