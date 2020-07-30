
import data from './data/pokemon/pokemon.js';
import { searchPokemon, orderPokeData } from './data.js';
//import pokemon from './data/pokemon/pokemon.js';

// Llamando elementos del DOM
const pokeDex = data.pokemon;
const root = document.querySelector("#root");
const mensaje = document.querySelector("#mensaje");
const inputSearch = document.querySelector("#inputSearch");
const ascend = document.querySelector("#ascend");
const descend = document.querySelector("#descend");

// Invocando la función searchPokemon para filtrar por nombre y número
inputSearch.addEventListener("keyup", (event) => {
    const inputValue = event.target.value;
    const searchPokeInfo = searchPokemon(pokeDex, inputValue)

    if(searchPokeInfo.length === 0){
    mensaje.innerHTML= "Check and try again";
    } else{
    printPokemons(searchPokeInfo);
    mensaje.innerHTML = "";
    }
});
// función que imprime todas las tarjetas en la interfaz
function printPokemons (pokemonGroup) {
    root.innerHTML = ""
    pokemonGroup.forEach(pokemon => {
        root.appendChild(pokemonCard(pokemon));
    });
}

// invocación de la función orderPokeData 
ascend.addEventListener("click",()=>{ 
    const order = orderPokeData(pokeDex,ascend.dataset.value);
    printPokemons(order);  
})

descend.addEventListener("click",()=>{
    const order = orderPokeData(pokeDex, descend.dataset.value);
    printPokemons(order);  
})

//llamando y guardando la data en nodos creados(tarjeta) para interacción del DOM funcion pokemonCard
function pokemonCard(pokemon) {
    const container = document.createElement("div");
    const pokemonNameCont = document.createElement("div");
    const pokemonTypeCount = document.createElement("div");
    
    const titleCard = document.createElement("h2");
    titleCard.innerHTML=`${pokemon.name}`;
    pokemonNameCont.appendChild(titleCard);
    container.appendChild(pokemonNameCont);

    const number = document.createElement("p");
    number.innerHTML =`${pokemon.num}`;
    container.appendChild(pokemonNameCont);
    pokemonNameCont.appendChild(number);

    const image = document.createElement("img");
    image.src= `${pokemon.img}`;
    container.appendChild(image);

    const type =document.createElement("span");
    type.innerHTML =`${pokemon.type}`;
    container.appendChild(pokemonTypeCount);
    pokemonTypeCount.appendChild(type);

    container.setAttribute("class", "pokemonsCard");
    pokemonNameCont.setAttribute("class", "pokemonName" );
    number.setAttribute("class", "pokemonsNumber")
    image.setAttribute("class", "pokemonImage");
    pokemonTypeCount.setAttribute("class", "pokemonTypeStyle");

    //Evento con el cual se invoca función para crear el template
    container.addEventListener('click', function () {pokemonInfo(pokemon)});
    return container;
}

  // Función con la cual se llama la data para crear el template  
function pokemonInfo (pokemon) {
    root.style.display = 'none';
    const infoCard = document.querySelector("#infoCard"); 
    let evolution;
    let preEvolution;
    console.log(pokemon);
        
    // Implementación del método array.map para invocar y guardar  las evoluciones en la data
    if (pokemon.next_evolution) {
        evolution = pokemon.next_evolution.map(pokemonEvo => 
            pokemonEvo.name)
    }
    else{ evolution = "None"}

    if (pokemon.prev_evolution) {
        preEvolution = pokemon.prev_evolution.map(pokemonEvo => 
       pokemonEvo.name)   
    }   
    else{ preEvolution = "None"}

//Generación del Template con el método innnerHTML
    infoCard.innerHTML =
    `<div class= "containerInfoCard" id=containInfocard>
        <button class= "close" id= "closed">X</button>
        <div class="template_nameId">
            <div class="tempName"><h2>${pokemon.name}</h2></div>
            <div class="tempNum"><h3>Num. ${pokemon.num}</h3></div>
        </div >
        <div class="template_image">
            <img class="template_imagePokemon" src= "${pokemon.img}">
        </div>
        <div class="template-type">
            <div class="tempTitleType"><h3>Type:</h3></div>
            <div class="tempType"><p><span>${pokemon.type}</span></p></div>
        </div>
        <div class="template_traits">
            <div class="traits">
                <h2 class= "h2Title">Traits</h2>
                <p>Height: <span>${pokemon.height}</span></p>
                <p>Weight: <span>${pokemon.weight}</span></p>
                <p>Candy: <span>${pokemon.candy}</span></p>
                <p>Candy count: <span>${pokemon.candy_count}</span></p>
            </div>
            <div class = "multiWeak">
                <div class="multipliers">
                    <h2 class= "h2Title">Multipliers:</h2>
                    <p><span>${pokemon.multipliers}</span></p>
                </div>
                <div class="weaknesses">
                    <h2 class="titleWeaknesses">Weaknesses:</h2>
                    <p>${pokemon.weaknesses}</p>
                </div>
            </div>    
        </div>
        <div class="evolutions">
            <h2 class="titleEvo h2Title">Evolutions</h2>
            <div class="evo">
                <div class="pre-evolution"><h3> Pre-evolution:</h3>
                <p><span>${preEvolution}</span></p></div>
                <div class="evolution"><h3> Evolution:</h3> 
                <p><span>${evolution}</span></p></div>
            </div>
        </div>
    </div>`

// Implementación de la función closeTemp para cerrar el template 
// y mostrar nuevamante todas las tarjetas
    const close = document.querySelector("#closed");
    const containInfocard = document.querySelector("#containInfocard");

    close.addEventListener("click", closeTemp);

    function closeTemp(){
        containInfocard.classList.toggle("closeTemplate");
        root.style.display = 'flex';
    }
}

//Invocaión de la función que imprime todas las tarjetas en la interfaz
printPokemons(pokeDex);