/*
Задача 4.9.

Сделайте функцию `arrayFill`, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве.
Функция должна содержать проверки:
- Первый параметр обязателен и может принимать только число, строку, объект, массив
- Второй параметр обязателен и может принимать только число

arrayFill('x',5); // [x,x,x,x,x]

*/

function arrayFill(Dani, ColIter) {
    if (typeof Dani !== "number" && typeof Dani !== 'string' && typeof Dani !== 'object' && !Array.isArray(array)) {
        throw new Error("входящий параметр не является ни числом, ни строкой, ни объектом, ни массивом");
    }
    if (typeof ColIter !== "number") {
        throw new Error("тип параметра (количество повторений) не является числом");
    }
    var array = new Array(ColIter);
    for (let i = 0; i < array.length; i++) {
        array[i] = Dani;
    }
    return array;
}


console.log(`\nУсловие: arrayFill('x',5) \nСозданный массив -> [${arrayFill('x',5)}]`);
console.log(`\nУсловие: arrayFill(3,10) \nСозданный массив -> [${arrayFill(3,10)}]`);
console.log(`\nУсловие: arrayFill([1,2,3],3) \nСозданный массив -> [${arrayFill([1,2,3],3)}]`);