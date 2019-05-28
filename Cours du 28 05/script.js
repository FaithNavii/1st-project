'use strict';

/*
Arrays (Tableaux)
*/
/*
let username1 = "Jeremy";
let username2 = "Toto";
let username3 = "Gio";

let usernames = ["Jeremy", "Toto", "Gio"];
console.log('usernames', usernames);

usernames[0] //premier élément
*/

let website1 = "myanimelist.net"
let website2 = "youtube.com"
let website3 = "jetanime.com"

let websites = ["myanimelist.net", "youtube.com", "jetanime.com"];
console.log('websites', websites);

websites[0] //premier élément
websites[1] //deuxiéme élément
websites[2] //troisième élément
let websitesLength = websites.length //3
websites[websitesLength] // undefined
websites[websitesLength - 1] // troisième élément
console.log('website1', websites[0]);
console.log('website2', websites[1]);
console.log('website3', websites[2]);
console.log('webitesLength', websites)

let myArray = [[1, 2, 3], null, undefined, 2, [4, 2, 3]];
console.log('premier el du premier el', myArray[0][0]);

// Créez un tableau qui contient 3 tableaux.
// Logguez dans la console le 2éme élément du premier élément.
// Logguez dans la console le dernier élément du dernier élément.

let myArray1 = [[11,12,18],['Perceval','marsoin','bonbay'],[16,26,17]];
console.log ('le deuxieme elements',myArray1[0][1]);
console.log ('le troisieme element',myArray1[2][2]);

const myArr = ['Hello', 'Bonjour', 'Hola'];
console.log(myArr);

//push (ajouter un élément à la fin d'un tableau)
myArr.push('Hallo');
console.log('après le push', myArr);

//unshift (ajouter un élément au début du tableau)

myArr.unshift('Nihao')
console.log('après le unshift', myArr);

// pop (supprimer le dernier élément)
myArr.pop();
//shift (supprimer le premier élément)
myArr.shift('RESULT: myArr', myArr);

let myArray2 = [1, 2, 3, 4, 5, 6, 7];
console.log(myArray2);
myArray2.pop();
myArray2.shift();
myArray2.unshift(10);
console.log('après le unshift', myArray2);
myArray2.push(100);
console.log('après le push', myArray2);
console.log('RESULT: myArray2', myArray2);

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let result = arr1.concat(arr2);
console.log('concat result', result);

let arrr1 = [1, 2, 3]
let arrr2 = [4, 5, 6]
let arrr3 = [7, 8, 9, 10]
let arrr4 = [11, 12, 13, 14]
let result1 = arrr1.concat(arrr2, arrr3, arrr4);
console.log('concat result1', result1);

let myString = 'Bonjour!';
// Split transformer string en tableau
// console.log(myString.split()) // ['B', 'o', 'n', ...]
let myArr3 = myString.split('');
// reverse (inverser un tableau)
let reversedArr = myArr3.reverse();
console.log('reversedArr', reversedArr);
// join (transformer un tableau en une chaine de caractères)
let res = reversedArr.join();
console.log('res', res);

let myString1 = 'Hello World';
let myArr4 = myString1.split('');
console.log('split', myArr4);
let myArr5 = myArr4.reverse();
console.log('reverse', myArr5);
let myArr6 = myArr5.join('');
console.log('res', myArr6);

// Parcourir un tableau
// map ou forEach

let myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
myNum.forEach((elem)=>{
  console.log('my array element', elem);
  myString +=elem; // a l'intérieur de forEach
  console.log('my array element', elem)
});
console.log('RESULT', myString); // '123456789'

let myNum2 = ['What', 'A', 'Wonderful', 'World']
myNum2.forEach((elem1)=>{
  console.log('my array element', elem1);
});

let test = '';
let mynUM1 = ['Hello ', 'I ', 'am ', 'John ', 'Doe']
mynUM1.forEach((elem2)=>{
test += elem2
});
console.log('my array element', test);

/*
let test = ''; // à l'extérieur du forEach
test += 'Hello '; // à l'intérieur du forEach
*/
