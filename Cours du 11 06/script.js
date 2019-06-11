'use strict';
/*
Sélectionnez tous les paragraphes.
Sélectionnez tous les divs par le nom de class.
Sélectionnez les div bleu.
Sélectionnez les spans qui se trouvent dans les paragraphes.
*/

const paragraphs = document.getElementsByTagName('p') // liste de nodes
console.log(paragraphs); // modifier le texte dans un node
paragraphs[0].innerText = 'Hello World'

const paragraphs2 = document.querySelectorAll('p');
console.log(paragraphs2); // modifie la structure HTML
paragraphs2[1].innerHTML = '<strong>Hello you!</strong>'

// Sélectionnez tou les divs par le nom de class.

const circles = document.getElementsByClassName('circle');
const circles2 = document.querySelectorAll('.circle');
circles[0].style.backgroundColor = 'red';

// Sélectionnez le div bleu.

const myDiv = document.getElementById('middle-circle');
const myDiv2 = document.querySelector('#middle-circle');
console.log('myDiv2', myDiv2);
myDiv2.classList.remove('circle'); // supprimer une classe class CSS
myDiv.classList.add('square'); // ajouter une classe CSS

let myFavouriteArtist = {
  lastname : 'Marshall',
  firstname : 'Bruce',
  nickname : 'Eminem',
  album : [
    {
      title : 'The Eminem Show',
      releaseYear: 2002,
      songs: ['Without Me', 'Sing for the Moment', 'Cleanin Out My Closet']
    }
  ]
}
console.log(myFavouriteArtist.lastname);
console.log(myFavouriteArtist.albums[0].title);
