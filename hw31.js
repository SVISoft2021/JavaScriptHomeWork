/*
Задача 3.1. Напишите функцию `f`, которая возвращает куб числа. Число передается параметром. Данная функция должна обязательно содержать проверку входного параметра, 
потому что принимать она может только число.
*/

function f(value) {
    if (typeof value !== 'number') {
        throw new Error('parameter is not a number type');
    }

    return Math.pow(value, 3); // value ** 3
};


console.log("Задание 3.1. Ответ: " + f(2)); // 8
console.log("Задание 3.1. Ответ: " + f("Content"));  //Error: parameter type is not a Number
