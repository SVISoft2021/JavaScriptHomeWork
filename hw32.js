/*
Задача 3.2. Напишите функцию `f` которая возвращает сумму всех параметров. Количество параметров может быть любым. Данная функция должна обязательно содержать 
проверку входных параметров, потому что принимать она может только числа.
*/

function f(value) {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            result += arguments[i];
        } else {
            throw new Error('all parameters should be a Number type');
        }
    }

    return result;
};


console.log("Задача 3.2. Ответ: " + f(1, 2, 3)); // 6
console.log("Задача 3.2. Ответ: " + f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
console.log("Задача 3.2. Ответ: " + f(1, 2, 's', 4)); // Error: all parameters should be a Number type

