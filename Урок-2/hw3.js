/*
Задача 3. Перепишите код, заменив оператор `switch` на оператор `if..else`:
switch (val) {
case 'a':
console.log( 'a' );
break;
case 'b':
case 'c':
case 'd':
case 'e':
console.log( 'others' );
break;
default:
console.log( 'unknown' );
}
*/

var val = "a";
if (val == "a") {console.log( 'Задание 3. Ответ: a' )}
 else
   if (val == "b" || val == "c" || val == "d" || val == "e") 
	{console.log( 'Задание 3. Ответ: others' )}
    else
	{console.log( 'Задание 3. Ответ: unknown' )};
