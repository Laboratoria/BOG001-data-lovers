import data from "../data/rickandmorty/rickandmorty.js";

//Efecto parallax
let rick = document.getElementById("containerRick");
window.addEventListener('scroll',function(){    
    var value = window.scrollY;
    rick.style.bottom = value * -0.5 + 'px';
});

//Paginación

//URL base 
let url = window.location.href;
let separatorUrl = url.split('?');
let firstPage = separatorUrl[0];
// window.location.assign(firstPage + "?page=0");
console.log(firstPage);

let btnPrevius = document.getElementById("previus");
let btnNext = document.getElementById("next");
let parameterUrl = window.location.search;
let currentPage;
let separatorParameter = parameterUrl.split('=');
let page = parseInt (separatorParameter[1]);
console.log(separatorParameter);
console.log(parameterUrl);
console.log(page);

//boton siguiente
btnNext.addEventListener('click',function() {
    nextPag(firstPage, parameterUrl, page);
});


//funcion pagina siguiente:
const nextPag = (firstPage, parameterUrl, page) => {
    if (parameterUrl == "") {
        //page = 1
        currentPage = firstPage + "?page=1";
        window.location.href = currentPage;
    } else {
        // let separatorParameter = parameterUrl.split('=');
        // console.log(separatorParameter);
        let nextPage = page + 1;
        console.log(nextPage);
        let currentParameter = "?page=" + nextPage;
        console.log(currentParameter);
        currentPage = firstPage + currentParameter;
        console.log(currentPage);
        window.location.href = currentPage;
        console.log(window.location.href);
    };
};


//Boton anterior
btnPrevius.addEventListener('click',function() {
    previusPag(firstPage, parameterUrl, page);
});

//funcion pagina anterior:
const previusPag = (firstPage, parameterUrl, page) => {
    if (parameterUrl == "") {
        //page = 1
                
    } else {
        btnPrevius.classList.remove('show');
        let separatorParameter = parameterUrl.split('=');
        console.log(separatorParameter);
        let previusPage = page - 1;
        console.log(previusPage);
        let currentParameter = "?page=" + previusPage;
        console.log(currentParameter);
        currentPage = firstPage + currentParameter;
        console.log(currentPage);
        window.location.href = currentPage;
        console.log(window.location.href);
    };
};



// if (page == 0) {
//     window.location.href = firstPage;
// }

// //Fragment HTML



const characters = document.getElementById("characters");
let dataGroup = data.results;
let x = page * 10;
let y = x + 10;
let arrData = dataGroup.slice(x,y);
// let arrData = dataGroup.slice(0,10);


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
