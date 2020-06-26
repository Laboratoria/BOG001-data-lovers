import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const viewMain = document.getElementById("viewMain"); 
const viewChampions = document.getElementById("viewChampions"); 

viewChampions.style.display = "none";

console.log(example, data);
