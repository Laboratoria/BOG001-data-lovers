
import { orderSort, pokemonTypes} from './data.js';

// EVENTOS

// import { example } from './data.js';

import data from './data/pokemon/pokemon.js';


// -----BOTÓN PARA CAMBIAR DE VISTA----

var next = document.getElementById("continue");

next.addEventListener("click", () => {
    document.getElementById("Home").style.display = "none";
    document.getElementById("Pokedex").style.display = "block";
}); 

// ----- MENÚ ----
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

// -----DESGLOSANDO EL OBJETO----
// var info = dataSet[0];
// var id = info.id;
// var num = info.num; 
// var name = info.name;
// var sum = (`${id} ${num} ${name}`); 

// -----MOSTRAR POKEMONES EN HTML----
let dataSet = data.pokemon;
let result;
for (result of dataSet) {
document.getElementById("window-container").innerHTML += `<div class="card"><h2> ${result.num} </h2><p> ${result.name} </p><br><img src=${result.img}><div>`; 
}

// -----BOTÓN DE ORDENAR----
// let orderBtn = document.getElementById("aZ");
// orderBtn.addEventListener("change", () => {
//     var orderOption = orderBtn.options[orderBtn.selectedIndex].text;
//     console.log(orderOption)
// })

let orderBtn = document.getElementById("aZ");
orderBtn.addEventListener("change", () => {
    var arrData = orderSort(dataSet, event.target.value); 
    var orderOption = document.querySelector(".window-container");
    orderOption.textContent = "";
    for (let pokemon of arrData) {
    orderOption.innerHTML += `<div class="card"><h2> ${pokemon.num} </h2><p> ${pokemon.name} </p><br><img src=${pokemon.img}><div>`;
}}); 

// -----BOTÓN DE TIPOS----
// let typeBtn = document.getElementById("element")
// typeBtn.addEventListener("change", () => {
//     var typeOption = typeBtn.options[typeBtn.selectedIndex].text;
//     
// })

let typeBtn = document.getElementById("element");
typeBtn.addEventListener("change", (event) => {
	var typeOption = document.querySelector(".window-container");
	typeOption.textContent = "";
	const textSelect = event.target.value;
	const dataFilter = pokemonTypes(dataSet, textSelect);
	dataFilter.forEach((element) => {
		typeOption.innerHTML += `<div class="card"><h2> ${element.num} </h2><p> ${element.name} </p><br><img src=${element.img}><div>`;
	});
});




