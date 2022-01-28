/*
Задача 7

Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ['abcd', 'abcde', 'ab', 'abc'];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}
console.log( arrLength ); // 4,5,2,3

Перепишите выделенный участок:
- используйте вместо цикла `for` метод `map`
*/

var array = ['abcd', 'abcde', 'ab', 'abc'];
var arrayNew = array.map(val => val.length);

console.log(`\nЗаданный массив - [${array}]`);
console.log('Обработка [массив из длины элементов]:');

console.log(`->  [${arrayNew}]`);