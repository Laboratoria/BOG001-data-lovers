// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


// -----Dar función al botón para cambiar de vista----

var next = document.getElementById("continue");

next.addEventListener("click", () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Pokedex").style.display = "block";
}); 

// ----- Menú y vistas ----
// const tabs = Array.prototype.slice.apply(document.querySelectorAll("data-tab-target")); 
// const window = Array.prototype.slice.apply(document.querySelectorAll("[data-tab-content]")); 
// document.getElementById("tabs").addEventListener("click", e => { 
//     if (e.target.classList.contains("data-tab-target")) {
//         let i = tabs.indexOf(e.target);
//         window.map(window => window.classList.remove("window-1"));
//         window[i].classList.add("block");
//     }
// })

var home = document.getElementById("home");

home.addEventListener("click", () => {
    document.getElementById("Pokedex").style.display = "none"; 
    document.getElementById("Home").style.display = "grid"; 
});

var pokedex = document.getElementById("pokedex");

pokedex.addEventListener("click", () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Pokedex").style.display = "block";
}); 

// -----Desglosando el objeto de la data----
// var info = dataSet[0];
// var id = info.id;
// var num = info.num; 
// var name = info.name;
// var sum = (`${id} ${num} ${name}`); 

// -----Mostrar los pokemones en el HTML 
var dataSet = data.pokemon;
let result;
for (result of dataSet) {
document.getElementById("window-container").innerHTML += `<div class="card"><h2> ${result.num} </h2><p> ${result.name} </p><br><img src=${result.img}><div>`; 
}


