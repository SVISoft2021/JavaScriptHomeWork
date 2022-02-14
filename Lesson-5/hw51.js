/*
Задача 5.1

Напишите свою имплементацию функции `bind`
Принимает такие параметры:
- Первый параметр — функция которую мы хотим привязать
- Второй параметр — ссылка на this
- Третий параметр до ...n — параметры для функции которую мы хотим привязать

Пример вызова:
const obj = {
getName: function(message) {
return `${message}: ${this.name}`;
}
};
const getName = obj.getName;
const f = bind(getName, {name: 'Pitter'}, 'My name');
console.log(f()); // My name: Pitter

*/


function bind(f, context, ...args) {
    return () => f.call(context, ...args)
  }
  
  const obj = {
    getName: function (message) {
      return `${message}: ${this.name}`
    },
  }
  
  const getName = obj.getName
  const f = bind(getName, { name: 'Pitter' }, 'My name')
  console.log(f()) // My name: Pitter