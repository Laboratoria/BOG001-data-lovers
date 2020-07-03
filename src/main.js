//import { example } from "./data.js";
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
import data from "./data/rickandmorty/rickandmorty.js";

//console.log(example, data);

let url = window.location.href;
let separatorUrl = url.split('?');
let pageOne = separatorUrl[0];
console.log(pageOne);

// let parameterUrl = window.location.search;
// let separatorParameter = parameterUrl.split('=');
// let nextPage = parseInt (separatorParameter[1]) + 1;
// currentParameter = "?page=" + nextPage;
// currentPage = pageOne + currentParameter;
console.log(currentPage)

let parameterUrl = window.location.search;
let currentPage;

//funcion pagina siguiente:
if (parameterUrl == "") {
    //page = 1
    currentPage = pageOne + "?page=2";
} else {
    let separatorParameter = parameterUrl.split('=');
    let nextPage = parseInt (separatorParameter[1]) + 1;
    currentParameter = "?page=" + nextPage;
    currentPage = pageOne + currentParameter;
}

;
console.log(page)

let characters = document.getElementById("characters");
let dataGroup = data.results;
let arrData = dataGroup.slice(0,10);

let fragment = document.createDocumentFragment();
let dataMap = arrData.map(function(current, index){
    let image = arrData[index].image;
    let name = arrData[index].name;
    let gender = arrData[index].gender;
    let species = arrData[index].species;
    let origin = arrData[index].origin.name;

    let containerCharacters = document.createElement('div');
    let imgCharacter = document.createElement('img');
    let textName = document.createElement('p');
    let textGender = document.createElement('p');
    let textSpecies = document.createElement('p');
    let textOrigin = document.createElement('p');

    imgCharacter.setAttribute("src",image);
    textName.textContent = name;
    textGender.textContent = gender;
    textSpecies.textContent = species;
    textOrigin.textContent = origin;

    characters.appendChild(containerCharacters);
    containerCharacters.appendChild(imgCharacter);
    containerCharacters.appendChild(textName);
    containerCharacters.appendChild(textGender);
    containerCharacters.appendChild(textSpecies);
    containerCharacters.appendChild(textOrigin);


    fragment.appendChild(containerCharacters);
    
    return fragment
})
characters.appendChild(fragment);

console.log(fragment);



