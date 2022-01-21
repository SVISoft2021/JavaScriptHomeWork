/*
Задача 3.3. Сделайте функцию `f`, которая отнимает от первого числа второе и делит на третье. Данная функция должна обязательно содержать проверку входных 
параметров, потому что принимать она может только числа.
*/

function f(a, b, c) {
    if (typeof a != "number" ||
        typeof b != "number" ||
        typeof c != "number") {
            throw new Error("all parameters type should be a Number");
    }
  
    return (a - b) / c;
}

console.log("Задача 3.3. Ответ: " + f(9, 3, 2)); // 3
console.log("Задача 3.3. Ответ: " + f('s', 9, 3)); // Error: all parameters type should be a Number