import { filterByRol } from "./data.js";

import data from "./data/lol/lol.js";

const champions = Object.values(data.data);
//console.log(champions);

const print = (champions) =>{
  let contenedor = document.getElementById("card");
  contenedor.innerHTML = "";
  champions.forEach(element => {
    let championContainer = document.createElement("div");
    championContainer.classList.add("champions");
    const image = document.createElement("img");
    image.src = element.img;
    championContainer.appendChild(image);
    const parrafoName = document.createElement("p");
    parrafoName.appendChild(document.createTextNode("Name:" + " " + element.name));
    const parrafoRol = document.createElement("p");
    parrafoRol.appendChild(document.createTextNode("Rol:" + " " + element.tags));
    championContainer.appendChild(parrafoName);
    championContainer.appendChild(parrafoRol);
    contenedor.appendChild(championContainer);

    let infoContainer = document.createElement("div");
    infoContainer.classList.add("information");
    const parrafoAttack = document.createElement("p");
    parrafoAttack.appendChild(document.createTextNode("Attack:" + " " + element.info.attack));
    const parrafoDefense = document.createElement("p");
    parrafoDefense.appendChild(document.createTextNode("Defense:" + " " + element.info.defense));
    const parrafoMagic = document.createElement("p");
    parrafoMagic.appendChild(document.createTextNode("Magic:" + " " + element.info.magic));
    const parrafoDifficulty = document.createElement("p");
    parrafoDifficulty.appendChild(document.createTextNode("Difficulty:" + " " + element.info.difficulty));
    infoContainer.appendChild(parrafoAttack);
    infoContainer.appendChild(parrafoDefense);
    infoContainer.appendChild(parrafoMagic);
    infoContainer.appendChild(parrafoDifficulty);
    contenedor.appendChild(infoContainer);
   });
}
     
/* --------Menu--------*/
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');
//var menuRol = document.getElementById('menuRol');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})

/* --------Filtro--------*/

let roles = document.querySelector(".rolesLol");
roles.addEventListener('click', function(e){
const btnRol = e.target.textContent;
const filterData = filterByRol(champions,btnRol);
//console.log(filterData);
print (filterData);
});

print(champions);