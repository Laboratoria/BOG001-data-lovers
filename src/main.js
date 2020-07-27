// import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';

var next = document.getElementById("continue");

next.addEventListener("click", nextPage);

function nextPage() {
    document.getElementById('window-1').style.display = 'none';
    document.getElementById('window-2').style.display = 'block';
} 

console.log(data);