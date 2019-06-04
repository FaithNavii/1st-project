'use strict';

let dividedNumbers = [];
let numbers = [0, 1, 2, 3, 4, 5];
numbers.forEach(function(element) {
let result;
result = element/2;
dividedNumbers.push(result);
})
console.log(dividedNumbers);

let dividedNumbers1 = [];
let numbers1 = [-1, -2, 3, 4, -9, 6];
numbers1.forEach(function(element) {
if (element >=0) {
  dividedNumbers1.push(element)
}
});
console.log(dividedNumbers1);

let celsus = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let farhenheit = []
celsus.forEach(function(element) {
let result;
result = (element *9/5) +32;
farhenheit.push(result)
});
console.log(farhenheit)

// Objects

/*
let user= {
  username: 'Sasha',
  type: 'Human',
  age: 23,
  friend: {
    name: 'Claire'
  }
}
*/

// propriété : username
// clé de propriété 'username
// valeur de la propriété 'Sasha'

/*
console.log(user.username) //Sasha
const objKey = 'type'
console.log(user[objKey]); //Human
console.log(user['type']); //Human
*/

let user = {
  id: 'Tom',
  name: 'Lexius NX',
  car: {
    id: 'AB107F',
    brand: 'Lexius',
    color: 'Grey',
  }
}

console.log(user.id); //TOM
console.log(user.car.id); //AB107F
console.log(user.car.color); //Grey

let user1 = {
  nom: 'Hendrix',
  prénom: 'Jimi',
  pseudo: 'Jimi Hendrix',
  album1: {
    titre: 'Experience',
    année: 1971,
    nbchansons: 2,
    liste: ['Opening Jam', 'Room Full Of Mirrors'],
  },
  album2: {
    titre: 'Electric Ladyland',
    année: 1968,
    nbchansons: 2,
    liste: ['...And the Gods Made Love', 'Crosstown Traffic'],
    }
}

let cat = {
  name: 'Cookie',
  favoritePlaces: ['random box', 'laps', 'Christmas tree'],
  petMyCat: function() {
    console.log('Mrrr');
  },
}
console.log(cat.favoritePlaces)
cat.petMyCat()

//par le nom de balise (liste)
document.getElementsByClassName('p');
document.querySelectorAll('p');

//par le nom de classe (liste)
document.getElementsByClassName('my-class')
document.querySelectorAll('.my-class')

//par id (node)
document.getElementsByClassName('my-id')
document.querySelector('#my-id')

let myBody = document.getElementsByTagName('body');
console.log('myBody', myBody);
