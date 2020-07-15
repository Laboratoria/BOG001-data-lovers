import { filterByType } from './data.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/;

const pokeDex = data.pokemon;
const root = document.querySelector("#root");
const pokemonsNumber = 151;
const menu = document.querySelector("#menu");
const buttonPokeMenu = document.querySelector("#buttonPokeMenu");

buttonPokeMenu.addEventListener("click", showMenu);

function showMenu(){
    menu.classList.toggle("appear");
};


function pokemonCard(pokemon) {
    let container = document.createElement("div");
    let pokemonNameCont = document.createElement("div");
    let pokemonTypeCount = document.createElement("div");
    

    let titleCard = document.createElement("h2");
    titleCard.innerHTML=`${pokemon.name}`;
    pokemonNameCont.appendChild(titleCard);
    container.appendChild(pokemonNameCont);


    let number = document.createElement("p");
    number.innerHTML =`${pokemon.num}`;
    container.appendChild(pokemonNameCont);
    pokemonNameCont.appendChild(number);

    let image = document.createElement("img");
    image.src= `${pokemon.img}`;
    container.appendChild(image);

    let type =document.createElement("span");
    type.innerHTML =`${pokemon.type}`;
    container.appendChild(pokemonTypeCount);
    pokemonTypeCount.appendChild(type);

    container.setAttribute("class", "pokemonsCard");
    pokemonNameCont.setAttribute("class", "pokemonName" );
    number.setAttribute("class", "pokemonsNumber")
    image.setAttribute("class", "pokemonImage");
    pokemonTypeCount.setAttribute("class", "pokemonTypeStyle");

    
    container.addEventListener('click', function () {pokemonInfo(pokemon)});
    return container;
};


function printPokemons (pokemonGroup) {
    pokemonGroup.forEach(pokemon => {
        root.appendChild(pokemonCard(pokemon));
    });

};
    
function pokemonInfo (pokemon) {

    root.style.display = 'none';
    let infoCard = document.querySelector("#infoCard"); 
    let evolution;
    let preEvolution;
    
    console.log(evolution);
    

    if (pokemon.next_evolution) {
        evolution = pokemon.next_evolution.map(pokemonEvo => 
            pokemonEvo.name)
    }

    if (pokemon.prev_evolution) {
        preEvolution = pokemon.prev_evolution.map(pokemonEvo => 
       pokemonEvo.name)   
    }   

    infoCard.innerHTML=
    `<div class= "containerInfoCard">
        <div class="template_nameId">
            <h2>${pokemon.name} Num. ${pokemon.num}</h2>
        </div >
        <div class="template_image">
            <img class="template_imagePokemon" src= "${pokemon.img}">
        </div>
        <div>
            <h2>Type</h2>
            <p><span>${pokemon.type}</span></p>
        </div>
        <div class="template_traits">
            <div>
                <h3>Traits</h3>
                <p>Height: <span>${pokemon.height}</span></p>
                <p>Weight: <span>${pokemon.weight}</span></p>
                <p>Candy: <span>${pokemon.candy}</span></p>
                <p>Candy count: <span>${pokemon.candy_count}</span></p>
            </div>
            <div>
                <h3>Multipliers:</h3>
                <p><span>${pokemon.multipliers}</span></p>
            </div>
            <div>
                <h2>Weaknesses:</h2>
                <p><span>${pokemon.weaknesses}</span></p>
            </div>
        </div>
        <div class="evolutions">
            <h3>Evolutions</h3>
            <h4> Pre-evolution:</h4> 
            <p><span>${preEvolution}</span></p>
            <h4> Evolution:</h4> 
            <p><span>${evolution}</span></p>
        </div>
    </div>`
};


printPokemons(pokeDex);

   



