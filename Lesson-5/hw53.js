/*
Задача 5.3

Улучшите свою имплементацию функции `mix`. Если на каком то из уровней callback сгенерировал ошибку → отловите ее, 
а затем перейдите на следующий callback. Функция `mix` всегда должна возвращать объект в котором будет 2 поля `errors` и `value`. 
Обратите внимание что `value` содержит результат вызовов всех функций, а `errors` содержит массив с информацией про все ошибки 
а также индекс callback где он сгенерировался.

Пример вызова:

mix(() => {
return 0;
}, (prev) => {
return prev + 1;
}, (prev) => {
throw new RangeError('Range is wrong');
}, (prev) => {
return prev * 3;
});

// Функция вернет
{
errors: [{
name: 'RangeError',
message: 'Range is wrong',
stack: 'Стек вызовов'
}],
value: 3
}

*/


function mix(...functions) {
    var state = { value: null, errors: [] }
    functions.forEach((f, idx) => {
      try {
        state.value = f(state.value)
      } catch ({ name, message, stack }) {
        state.errors.push({ name, message, stack, errorOnIteration: idx + 1 })
      }
    })
    return state
  }
  
  const res = mix(
    () => {
      return 0
    },
    (prev) => {
      return prev + 1
    },
    (prev) => {
      throw new RangeError('Range is wrong')
    },
    (prev) => {
      return prev * 3
    }
  )
  
  console.log(JSON.stringify(res))
  