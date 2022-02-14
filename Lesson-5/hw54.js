/*
Задача 5.4

Написать свою имплементацию функции `compose`. Функция принимает неограниченное количество параметров. Каждый аргумент должен быть функцией. 
Каждый аргумент принимает 1 параметр. Функция `compose` возвращает другую функцию с одним параметром.

Суть работы функции `compose` отображает данная формула `compose(f, g)(x) = f(g(x))`

Пример вызова:
compose((str) => {
return str + 'c';
}, (str) => {
return str + 'b';
})('a'); // 'abc'

*/

function compose(...functions) {
    return functions.reduce((f, g) => {
      return function (arg) {
        return f(g(arg))
      }
    })
  }
  
  let a = compose(
    (str) => {
      return str + 'c'
    },
    (str) => {
      return str + 'b'
    }
  )('a') // 'abc'
  
  console.log(a)
