/*
Задача 9. Отсортировать массив по убыванию.
var arr = [1,2,3,4,5,6];
// [6,5,4,3,2,1]
**Внимание**! Не разрашается использовать специальные методы массивов.
*/

var arr = [1,2,3,4,5,6];
for (var i = 1; i < arr.length; i++) {
    for (var j = 0; j < i; j++) {
        if (arr[i] > arr[j]) {
            var NumM = arr[i];
            arr[i] = arr[j];
            arr[j] = NumM;
        }
    }
}
console.log("Задание 9. Ответ: " + arr);