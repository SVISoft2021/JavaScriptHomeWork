/*
Задача 3.8. Дан массив с числами `[1, 2, 3]`. Создайте функцию `f`, которая принимает данный массив в качестве параметров, а затем последовательно выводит 
на экран его элементы. Обязательно нужно использовать рекурсию. Использовать цикл запрещено. Данная функция должна обязательно содержать проверку входного 
параметра, потому что принимать она может только не пустой массив.
*Возможно вам понадобится метод [splice](https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Array/splice).*
*/

function f(array) {
    if (!Array.isArray(array)) {
        throw new Error('parameter type should be an array');
    }

    if (array.length === 0) {
        throw new Error('parameter can\'t be an empty');
    }

    console.log(array.splice(0, 1).join(""));

    if (array.length > 0) {
        f(array);
    }
};


console.log("Задача 3.8. Ответ: ");
f([1, 2, 3]); // 1 2 3
console.log("Задача 3.8. Ответ: " + f(1, 2, 3)); // Error: parameter type should be an array
console.log("Задача 3.8. Ответ: " + f('Content')); // Error: parameter type should be an array
console.log("Задача 3.8. Ответ: " + f([])); // Error: parameter can't be an empty