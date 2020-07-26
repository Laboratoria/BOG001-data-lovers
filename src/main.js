//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = data.results;

let personajes = datos.slice(0, 99);

// PAGINA DE PERSONAJES
console.log(window.location.pathname)
if (window.location.pathname === "/src/Personajes.html") {

  function popUp(e) {

    const indicator = e.target.dataset.personajes;

    let information = [];
    let characterCards = document.getElementById("pruebaTarjeta");

    information += ` <div class= "tarjeta"> <img src="${personajes[indicator].image} "><p> Name: ${personajes[indicator].name}
      </p> <p> Gender: ${personajes[indicator].gender} </p> <p> Species: ${personajes[indicator].species} </p>
      <p> Origin: ${personajes[indicator].origin.name} </p> <p> Status: ${personajes[indicator].status} </p> <div>`

    characterCards.innerHTML = information;
  };

  let names = [];
  for (let i = 0; i < personajes.length; i++) {
    names += `<div class= "personajes1"  id="${personajes[i].id}-${i}">
        <img class= "image" data-personajes="${i}" src="${personajes[i].image} ">
      <p data-personajes="${i}" class= "nombres" >${personajes[i].name.slice(0,17)} </p>  </div>`
  };

  let characterButtons = document.getElementById("charactersZone");

  characterButtons.innerHTML = names;

  for (let i = 0; i < personajes.length; i++) {
    const boton = document.getElementById(`${personajes[i].id}-${i}`);
    boton.addEventListener("click", popUp);
  };

// Filtro para los personajes vivos

function alive () { 
  let vivos = personajes.filter ( item => {
  return personajes.status = "Alive" } 
  );
  console.log(vivos)
}
console.log(alive)

// Metodo SORT();

function az() {
  names.sort();
}
const sortB = document.getElementById("sortButton")
sortB.addEventListener("click", az());




  // esta } es cierre de if de la ventana
};

//PARA PAGINA MUNDOS 

if (window.location.pathname === "/src/Mundo.html") {

  // Para conseguir el nombre de los mundos 

  let world = [];
  for (let i = 0; i < personajes.length; i++) {
    // saber si en world ya existe ese nombre del planeta . poner en el HTML 
    let nombreplaneta = `<div class= "personajesW" <img src="mundos.jpg"> <p> ${personajes[i].origin.name} </p> </div>`

    if (!world.includes(nombreplaneta)) { world.push(nombreplaneta) }
  };
// Como filtrar personajes origen de cada mundo



  let worldButtons = document.getElementById("worldZone");
  worldButtons.innerHTML = world;







  // esta } es cierre de if de la ventana
};

//PARA PAGINA DE TEMPORADAS

if (window.location.pathname === "/src/Temporada.html") {

  // Para conseguir los Capitulos 

  let chapters = [];

  for (let i = 0; i < personajes.length; i++) {
    // saber si en world ya existe ese nombre del capitulos 
    let nombrecapitulos = `<div class= "personajesS" <img class= "imageS" src="season1.jpg"> <p> Episode: ${personajes[i].episode[1]}</p></div>`

    if (!chapters.includes(nombrecapitulos)) { chapters.push(nombrecapitulos) }

  };

  let seasonButtons = document.getElementById("seasonZone");
  seasonButtons.innerHTML = chapters;

  console.log(chapters)
  // esta } es cierre de if de la ventana
}; 


// Botones paginas 

function turnPageC() { 
 window.location.href = 'Personajes.html'; 
}
function turnPageW() { 
 window.location.href = 'Mundo.html'; 
}
function turnPageS() { 
 window.location.href = 'Temporada.html'; 
}

document.querySelector('#toCharacters').addEventListener('click', turnPageC) 
document.querySelector('#toWorlds').addEventListener('click', turnPageW)
document.querySelector('#toSeasons').addEventListener('click', turnPageS) 

