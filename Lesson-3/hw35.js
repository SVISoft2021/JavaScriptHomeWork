/*
Задача 3.5. Дан массив с числами `[1, 2, -4, 3, -9, -1, 7]`. Создайте из него новый массив, где останутся лежать только положительные числа `[1, 2, 3, 7]`. 
Создайте для этого вспомогательную функцию `isPositive(-3)`, которая параметром будет принимать число и возвращать true, если число положительное, 
и false — если отрицательное. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
*Для добавление нового элемента в конец массива используйте метод push*
*/

const array = [1, 2, -4, 3, -9, -1, 7];


function isPositive(numM) {
    if (typeof numM != "number") {
        throw new Error("Parameter type is not a Number");
    }

    if (numM > 0) {
        return true;
    } else {
        return false;
    }
}

function newArr(array) {
    var newArr = [];

    array.forEach(element => {
        if (isPositive(element)) {
            newArr.push(element);
        }
    });

    return newArr;
}


console.log("Задача 3.5. Ответ: " + isPositive(-3)); // false
console.log("Задача 3.5. Ответ: " + isPositive(3)); // true
console.log("Задача 3.5. Ответ: " + newArr([1, 2, -4, 3, -9, -1, 7])); // 
console.log("Задача 3.5. Ответ: " + isPositive('s')); // Error: parameter type is not a Number
