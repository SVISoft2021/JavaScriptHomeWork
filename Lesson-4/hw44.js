/*
Задача 4.4.

Создать имплементацию функции `some`, логика работы такая же как и у родного метода.

Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию

```javascript
const arr = [1,2,3];
some(arr, function(item, i, arr) {});
```
*/

function Some(array, callback, thisArg) {
    if (!Array.isArray(array)) {
        throw new TypeError(array + ' это не массив');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' это не функция');
    }

    var resultYN = false;
    for (var i = 0; i < array.length; i++) {
        if (callback.call(thisArg, array[i], i, array)) {
            return true;
        }
    }
    return resultYN;
}

const arr = [1, '#2', 3];

console.log(`Заданный массив [${arr}]`);
console.log('Обработка [хотя бы один элемент число]:');

SomeArray = Some(arr, function (item, i, arr) {
      return typeof item === 'number'});
console.log('-> ' + SomeArray);

console.log('Обработка [хотя бы один элемент < 0]:');
SomeArray = Some(arr, function (item, i, arr) {
    return item < 0});
console.log('-> ' + SomeArray);