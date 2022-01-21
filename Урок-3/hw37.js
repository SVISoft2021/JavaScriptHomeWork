/*
Задача 3.7. Сделайте функцию `getDivisors`, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число начиная 
от 1 и заканчивая самим собой). Данная функция должна обязательно содержать проверку входного параметра, потому что принимать она может только число больше 0.
*/

function getDivisors(number) {
    if (typeof number !== 'number') {
        throw new Error('parameter type is not a Number');
    }

    if (number <= 0) {
        throw new Error('parameter can\'t be a 0');
    }

    const arrayDivisors = [];

    for (var i = 1; i <= number; i++) {
        if (number % i === 0) {
            arrayDivisors.push(i);
        }
    }

    return arrayDivisors;
};

console.log("Задача 3.7. Ответ: " + getDivisors(12)); // [1, 2, 3, 4, 6, 12]
console.log("Задача 3.7. Ответ: " + getDivisors('Content')); // Error: parameter type is not a Number
console.log("Задача 3.7. Ответ: " + getDivisors(0)); // Error: parameter can't be a 0