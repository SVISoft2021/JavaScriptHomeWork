/*
Задача 4.2.

Создать имплементацию функции `filter`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
filter(arr, function(item, i, arr) {});

*/

function filter(array, callback, thisArg) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' это не массив');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' это не функция');
    }

    var filtered = [];
    for (var i = 0; i < array.length; i++) {
        if (callback.call(thisArg, array[i], i, array)) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}

const arr = [1, 2, 3];

console.log(`Заданный массив [${arr}]`);
console.log('Обработка [фильтр > 1]:');

filterArray = filter(arr, function (item, i, arr) {
      return item > 1; });

console.log(`-> новый массив [${filterArray}]`);