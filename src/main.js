import { filterByType } from './data.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/;

const pokeDex = data.pokemon;
const root = document.querySelector("#root");
const containerInfoCard = document.querySelector(".containerInfocard");
const menu = document.querySelector("#menu");
const buttonPokeMenu = document.querySelector("#buttonPokeMenu");
const close = document.querySelector("#closed");

/*if(close)
{close.addEventListener("click", closeTemplate)};

function closeTemplate(){

   if(containerInfoCard) {containerInfoCard.style.display = 'none';
    root.style.display = 'block';}
    console.log(containerInfoCard);
};*/

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


    console.log(evolution);
    console.log(preEvolution);


    infoCard.innerHTML=
    `<div class= "containerInfoCard">
        <div class= "close" id= "closed">X</div>
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
                    <h2>Weaknesses:</h2>
                    <p><span>${pokemon.weaknesses}</span></p>
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
};


printPokemons(pokeDex);

   



