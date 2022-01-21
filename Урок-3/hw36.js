/*
Задача 3.6. Сделайте функцию `isEven()`, которая параметром принимает целое число и проверяет: чётное оно или нет. Если чётное — функция возвращает `true`, 
если нечётное — `false`. Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число.
*Чётные числа могут делится на 2 без остатка.*
*/

function isEven(number) {
    if (typeof number === 'number') {
        return number % 2 === 0; // true || false
    } else {
        throw new Error('parameter type is not a Number');
    }
};

console.log("Задача 3.6. Ответ: " + isEven(3)); // false
console.log("Задача 3.6. Ответ: " + isEven(4)); // true
console.log("Задача 3.6. Ответ: " + isEven('Content')); // Error: parameter type is not a Number