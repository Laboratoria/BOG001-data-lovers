import data from './data/lol/lol.js';
const lolData = Object.entries(data.data)

let championsCards = document.querySelector('.card-champions');

window.onload = () =>{
const attribute = lolData.map(champions=> `
  
    <article style= "background-image:url('${champions[1].splash}')" class="card"> 
      <div class="name-title-container">
        <h2>${champions[1].name}</h2>
        <p>${champions[1].title}</p>
      </div>
    </article>`
    
  ).join('');

 championsCards.innerHTML= attribute;
};


 



