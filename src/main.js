// import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


// -----Dar función al botón para cambiar de vista----

var next = document.getElementById("continue");

next.addEventListener("click", nextPage);

function nextPage() {
    document.getElementById('window-1').style.display = 'none';
    document.getElementById('window-2').style.display = 'block';
} 

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


