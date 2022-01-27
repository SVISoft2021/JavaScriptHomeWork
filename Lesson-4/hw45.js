/*
Задача 4.5.

Создать имплементацию функции `reduce`, логика работы такая же как и у родного метода.
Функция должна содержать проверки:

- Первый параметр обязателен и может принимать только массив
- Второй параметр обязателен и может принимать только функцию
- Третий параметр обязателен и может принимать только строку или число

```javascript
const arr = [1,2,3];
const acc = 0;
reduce(arr, function(acc, item, i, arr) {}, acc);
```
*/

function Reduce(array, callback, acc) {
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
    for (var i = 0; i < array.length; i++) {
        result = callback(array[i], result);
    }
    return result;
}

const arr = [1, 2, 3];
const acc = 15;
console.log(`Заданный массив [${arr}]`);
console.log('Обработка [сумма всех элементов начиная с ' + acc + ']:');
console.log('-> ' + 
    Reduce(arr, function (item, i, arr) {return item + acc}, acc));
