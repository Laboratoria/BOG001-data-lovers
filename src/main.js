//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = data.results;


let personajes = datos.slice(0, 99);

function popUp(e) {

  const personaje = e.target.dataset.personajes;

  console.log(personaje)

  let information = [];


  information += `  <img src="${personajes[personaje].image} "><p> Name: ${personajes[personaje].name}
      </p> <p> Gender: ${personajes[personaje].gender} </p> <p> Species: ${personajes[personaje].species} </p>
      <p> Origin: ${personajes[personaje].origin.name} </p> `


  var characterCards = document.getElementById("pruebaTarjeta");
  characterCards.innerHTML = information;

};



let names = [];
for (var i = 0; i < personajes.length; i++) {
  names += `<button id="${personajes[i].id}-${i}"> <img data-personajes="${i}" src="${personajes[i].image} ">
  <p data-personajes="${i}" > Nombre: ${personajes[i].name} </p>  </button>`
};
var characterButtons = document.getElementById("charactersZone");
characterButtons.innerHTML = names;

for (var i = 0; i < personajes.length; i++) {
  const boton = document.getElementById(`${personajes[i].id}-${i}`);
  boton.addEventListener("click", popUp);

}
