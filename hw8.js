/*
Задача 8. Написать код который посчитает сумму всех четных элементов в массиве, в суммировании учaствуют только элементы больше 3.
var arr = [1,2,3,4];
**Внимание**! Не разрашается использовать специальные методы массивов.
*/

var allN = 0;
var arr = [1,2,3,4];
for (i of arr) {
 if (i%2 == 0 && i > 3) allN += i;
}
console.log("Задание 8. Ответ: " + allN);