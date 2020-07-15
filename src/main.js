//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = data.results;


let personajes = datos.slice(0, 99);

  let names = [];
for (var i = 0; i < personajes.length; i++) {
    names += `<button > <img src="${personajes[i].image} ">
  <p> Nombre: ${personajes[i].name} </p> <id= ${personajes[i].id} >`
};
var characterButtons = document.getElementById("charactersZone");
characterButtons.innerHTML = names;


//${onclick = information }






