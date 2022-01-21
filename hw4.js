/*
Задача 4. Перепишите код с использованием одной конструкции `switch`:
var a = 0;
if (a == 0) {
console.log( 0 );
}
if (a == 1) {
console.log( 1 );
}
if (a == 2 || a == 3) {
console.log( '2,3' );
}
*/

var a = 0;
switch (a) {
case 0:
	console.log("Задание 4. Ответ:" + 0 );
	break;
case 1:
	console.log( "Задание 4. Ответ:" + 1 );
	break;
case 2:
case 3:
	console.log("Задание 4. Ответ:" +  '2,3' );}