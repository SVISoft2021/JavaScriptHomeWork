/*
Задача 7. Написать код который посчитает сумму всех четных элементов в масиве.
var arr = [1,2,3,4];
**Внимание**! Не разрашается использовать специальные методы массивов.
*/

var allN = 0;
var arr = [1,2,3,4];
for (i of arr) {
 if (i%2 == 0) allN += i;
}
console.log("Задание 7. Ответ: " + allN);