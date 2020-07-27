//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = data.results;

let personajes = datos.slice(0, 99);

// PAGINA DE PERSONAJES
console.log(window.location.pathname)
if (window.location.pathname === "/src/Personajes.html") {

  function popUp(e , arrayPersonajes) {
    const indicator = e.target.dataset.personajes;

    let information = [];
    let characterCards = document.getElementById("pruebaTarjeta");

    information += ` <div class= "tarjeta"> <img class="tarjetaImg" src="${arrayPersonajes[indicator].image} "> <div class="tarjetaText"> <p> Name: ${arrayPersonajes[indicator].name}
      </p> <p> Gender: ${arrayPersonajes[indicator].gender} </p> <p> Species: ${arrayPersonajes[indicator].species} </p>
      <p> Origin: ${arrayPersonajes[indicator].origin.name} </p> <p> Status: ${arrayPersonajes[indicator].status} </p> </div> </div>`

    characterCards.innerHTML = information;
  };

  function show(arrayPersonajes) {

    let names = [];
    for (let i = 0; i < arrayPersonajes.length; i++) {
      names += `<div class= "personajes1"  id="${arrayPersonajes[i].id}-${i}">
        <img class= "image" data-personajes="${i}" src="${arrayPersonajes[i].image} ">
      <p data-personajes="${i}" class= "nombres" >${arrayPersonajes[i].name.slice(0, 17)} </p>  </div>`
    };



    let characterButtons = document.getElementById("charactersZone");

    characterButtons.innerHTML = names;


    for (let i = 0; i < arrayPersonajes.length; i++) {
      const boton = document.getElementById(`${arrayPersonajes[i].id}-${i}`);
      boton.addEventListener("click", (e) => popUp (e , personajes) );
    };

    //Cierre funcion show
  };
  show(personajes)

  // Filtro para los personajes vivos

  function alive(arrayPersonajes) {

    let alivePersonajesFiltros = arrayPersonajes.filter(personaje => personaje.status == "Alive");
    show(alivePersonajesFiltros);
    
  }
  const aliveButton = document.getElementById("alive")
  aliveButton.addEventListener("click", ()=> alive(personajes));

  // Metodo SORT();

  function comparar(a, b)
    {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;}
       else { return 0 }
    }

    function az(arrayPersonajes) {
      let personajesOrdenados = arrayPersonajes.sort(comparar);
      show(personajesOrdenados);
      popUp (e , personajesOrdenados )
    }
    const sortButton = document.getElementById("sortButton")
    sortButton.addEventListener("click", (e)=>az(personajes));

    // Busqueda de muñecos 

      function searching( string , arrayPersonajes ) {
        let busqueda = arrayPersonajes.find( personaje => personaje.name.toLowerCase() === string.value.toLowerCase() );
        show(busqueda);
      };
      
        let  palabra = document.getElementById("searchButton");
        
        palabra.addEventListener("click", () => searching( palabra, personajes ));

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
