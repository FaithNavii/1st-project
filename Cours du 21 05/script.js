'use strict';

/*
if (condition) {
  // si c'est vrai
} else {
  // si c'est faux
}
*/
/*
let myVar = 1;
if (myVar > 5) {
  console.log('Vrai');
} else if(4<6) {
  console.log('4<6 est vrai');
} else {
  console.log('Faux');
}

let myVar2 = 20;
if (myVar2 >=10||myVar2 <15) {
  console.log('yes');
} else {
  console.log('no');
}

let myVar3=6;
let myVar4=11;
if (myVar3<myVar4) {
  console.log(`The greatest numbers of ${myVar3} and ${myVar4} is ${myVar4}`);
} else {
  console.log(`The greatest numbers of ${myVar4} and ${myVar3} is ${myVar3}`);
}

let myVar6=59;
if (myVar6>=90) {
  console.log('A')
} else if (myVar6>=80&&myVar6<91) {
  console.log('B')
} else if (myVar6>=70&&myVar6<81) {
  console.log('C')
} else if (myVar6>=60&&myVar6<71) {
  console.log('D')
}  else if (myVar6<60) {
  console.log('F')
}
*/

/*
let myNum = 8;// Variable globale

// déclarer une fonction
function myFunction() {
  let myVar = 1; //variable locale
  console.log('myVar is ' + myVar);
}
// nouvelle façon de déclarer une fonction
const myFunc = () => {
  let myVar = 1;
  console.log('myVar is ' + myVar);
}
// appeler une fonction
myFunction();

function sumTwoNum(num1, num2) {
  console.log(num1);
  console.log(num2);
  const result = num1 + num2;
  console.log('result', result);
  return result; // cette valeur sera retournée
}

let a = sumTwoNum(2, 5);
console.log('a', a);

// Exo 1

myFunction2(24);

function myFunction2(num24) {
  console.log(num24);
  const result = num24;
  console.log('result', result);
  return result;
}


// planMyTrip

planMyTrip('I want to visit city1, city2, city3, city4');
function planMyTrip(city1, city2, city3, city4) {
  console.log(city1, city2, city3, city4);
  const result = city1 + city2 + city3 + city4;
  return result;
}

// calculateAgeChien

let num10 = 7;
let Human_Age = num10*7;
calculateDogAge(`This dog is ${Human_Age} years old`);
function calculateDogAge(num10) {
  console.log(num10);
  const result = Human_Age = num10*7;
}

// calculateSupply

calculateSupply(19,'pizza',3);
function calculateSupply(age,snack,quantity) {
  const day = 365;
  let age2 = 83-age;
  let NN = quantity*day*age2
  console.log(NN, age2);
  const result = `You will need ${NN} to last you until the ripe age of ${age2}`;
  console.log(result)
}

*/

'use strict';

let myCharacter = 'Luna Lovegood';

myCharacterHouse = useSortingHat()

isMyCharacterRich = checkMyGringottAccount()

function useSortngHat(char) {
  let choice = '';

  if (ch = 'Harry Potter') {
    let choice = 'Gryffindor';
  } else if(ch = 'Draco Malfoy') {
    let choice = 'Ravenclaw';
  } else if(ch = 'Luna Lovegood') {
    choice = 'Ravenclaw';
  } else {
    ch = 'Gryffindor'
  }

  result (`${char} goes to ${ch}`)
}

const checkMyGringottAccount = (10); {
  myMoney = Math.random() * 100

  if (myMoney > 0 || myMoney < 30) {
    console.log('Hello Weasley');
  } else if ( myMoney > 30 ||  myMoney < 75 ) {
    console.log(`Hey, that's cool`);
  } else {
    `You're reach!`
  }
}
