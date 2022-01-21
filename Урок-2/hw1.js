/*
Задача 1. Перепишите код, заменив оператор `if` на тернарный оператор `?`
var result;
if (a + b < 4) {
result = true;
} else {
result = false;
}
*/

var result;
var a=2;
var b=3;
 (a + b < 4) ? result = true : result = false;
console.log("Задание 1. Ответ: " + result);