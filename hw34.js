/*
Задача 3.4. Сделайте функцию `f`, которая принимает параметром число от 1 до 7, а затем возвращает день недели на русском языке. Данная функция должна обязательно 
содержать проверку входного параметра, потому что принимать она может только числа от 1 до 7.
*/

const week = {
    1: 'Воскресенье',
    2: 'Понедельник',
    3: 'Вторник',
    4: 'Среда',
    5: 'Четверг',
    6: 'Пятница',
    7: 'Суббота',
};

function f(dayNumber) {
    if (arguments.length > 1) {
        throw new Error('should be one parameters');
    }

    if (typeof dayNumber !== 'number') {
        throw new Error('parameter type is not a Number');
    }

    if (dayNumber < 1 || dayNumber > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    return week[dayNumber];
};

console.log("Задача 3.4. Ответ: " + f(1)); // Воскресенье
console.log("Задача 3.4. Ответ: " + f(2)); // Понедельник
console.log("Задача 3.4. Ответ: " + f(8)); // Error: parameter should be in the range of 1 to 7
console.log("Задача 3.4. Ответ: " + f('1')); // Error: parameter type is not a Number