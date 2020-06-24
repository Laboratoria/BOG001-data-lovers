//import { objectToArray } from './data.js';
import {anotherExample} from './data.js';
import data from './data/lol/lol.js';
var lolData = Object.entries(data.data)
console.log(lolData)

let championsCards = document.querySelector('.card-champions');

let items =Object.entries(data.data);

var attribute = lolData.map(function(champions){
  
  const cards = document.createElement('article');
  
  const image = document.createElement('img');
  image.setAttribute('src',champions[1].splash);
  cards.appendChild(image)

  const name = document.createElement('h2');
  name.textContent = champions[1].name;
  cards.appendChild(name); 

  const title = document.createElement('h3');
  title.textContent = champions[1].title;
  cards.appendChild(title); 
  
   
  
  return championsCards.appendChild(cards);

});


console.log(attribute)




 
/* fetch(./data/lol/lol.json)
.then((resp) => resp.json()) // Transform the data into json
.then(function(data) {
  // Create and append the li's to the ul
  const table = createElement('span');
    
    table.appendChild(data.data.Alistar.tags);
  })
}); */







  
  