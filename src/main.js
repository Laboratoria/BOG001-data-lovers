//import { objectToArray } from './data.js';
//import {anotherExample} from './data.js';
import data from './data/lol/lol.js';
var lolData = Object.entries(data.data)

let championsCards = document.querySelector('.card-champions');


window.onload = () =>{
const attribute = lolData.map(champions=> `
  
    <article class="card"> 
      <img src = '${champions[1].splash}'>
      <h2>${champions[1].name}</h2>
      <p>${champions[1].title}</p>
    </article>`
    
  ).join('');

 championsCards.innerHTML= attribute;
};


 



