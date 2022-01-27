/*
  Задача 4.1.
  Создать имплементацию функции `forEach`, логика работы такая же как и у родного метода.
  Функция должна содержать проверки:
  - Первый параметр обязателен и может принимать только массив
  - Второй параметр обязателен и может принимать только функцию

const arr = [1,2,3];
forEach(arr, function(item, i, arr) {});

*/

 function forEach(array, callback) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' это не массив');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' это не функция');
    }

    for (var index = 0; index < array.length; index++) {
        callback(array[index], index, array);
    }
}

const arr = [1, 2, 3];

console.log(`Заданный массив [${arr}]`);
console.log('Обработка [перебор элементов]:');

forEach(arr, function (item, i, arr) {
    console.log(`-> элемент [${i}] = ${item}`);
});

//forEach(arr, 'Текст');
//forEach('Текст', arr);