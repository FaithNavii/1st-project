'use strict';

let myVariable = 'Hello'; // déclarer une variable
console.log(myVariable);
myVariable = 'Bye';
console.log(myVariable);

const myConst = 'Hello'; // déclarer une constante
// myConst = 'Bye'; // console.error








let userAge = 19; //nombre
console.log('userAge', userAge);

const pi = 3.14; //nombre
console.log('pi',pi);

let nbliens = 'Chiffre'; //chaine de character
console.log('nbliens',nbliens);

const masseterrestre = 1; //nombre
console.log('masseterrestre',masseterrestre);

let anneencours = 2019; //nombre
console.log('anneencours',anneencours);

let choixplugin = 'Choose_Date'; //nombre
console.log('choixplugin',choixplugin);

const numpolice = 17; //nombre
console.log('numpolice',numpolice);

let poidutilisateur = 'Poid'; //nombre
console.log('poidutilisateur',poidutilisateur);


/* OPERATEUR JAVASCRIPT
+ (addition)
- (soustraction)
* (multiplier)
/ (division)
*/

let sum = 3 + 4;
sum = sum + 5; // 12
sum += 5; // 12
console.log('sum', sum);

let myNum = 0;
myNum++ // myNum = myNum + 1
myNum-- // myNum = myNum - 1

let numone = 5;
numone++;
console.log('numone',numone);

let numtwo = 5;
numtwo--;
console.log('numtwo',numtwo);

let string1 = 'Hello';
let string2 = 'Bye';
console.log(string1 + 'hfdsfsd' +string2);
console.log('${string1} hfdsfsd ${string2}');

/* OPERATEUR DE COMPARISON
> (supérieur)
>= (supérieur ou égal)
< (inférieur)
<= (inférieur ou égal)
== (égal: seulement à la valeur)
=== (égal: valeur et type)
*/

let num1 = 5;
let num2 = 7;
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(10 >= 10); // true
console.log(5 === 5); //true
console.log(5 === '5'); // false
console.log(5 == '5'); // true
console.log(5 !== 5); // false

console.log(5 > 3 || 7 > 10); //
