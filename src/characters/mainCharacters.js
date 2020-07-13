import data from "../data/rickandmorty/rickandmorty.js";
import filterFunctions from "./dataCharacters.js";

// ----------------Efecto parallax-------------------
let rick = document.getElementById("containerRick");
window.addEventListener('scroll',function(){
    var value = window.scrollY;
    rick.style.bottom = value * -0.5 + 'px';
});

//-------------Ocultar o mostrar ventana de filtros al darle click al icono de filtro 
let btnFilter = document.getElementById("btnFilter");
let filtersOptions = document.getElementById("filtersOptions");
btnFilter.addEventListener('click',function(){
    filtersOptions.classList.toggle('hide');
});

// ------------- Cambio de pagina ---------------
let btnPrevius = document.getElementById("previus");
let btnNext = document.getElementById("next");
let containerBtnPreviusNext = document.getElementById("btnPrevNext");

// containerBtnPreviusNext.addEventListener('click', function(e){
        
//     console.log(e.Target);

// });

//Evento boton siguiente
btnNext.addEventListener('click', setFilterParameters);

//Evento boton atras
btnPrevius.addEventListener('click', setFilterParameters);

// Almacenar los checkbox   
let arrChkbSpecies = document.querySelectorAll('.specie');
let optionsFilter = document.getElementById('specie');
//Declaración de variables
const dataGroup = data.results;
const characters = document.getElementById("characters");

// Almacenar la URL base 
let urlFull = window.location.href;
let separatorUrl = urlFull.split('?');
let urlBase = separatorUrl[0];

//Obtener numero pagina
const parameterUrl = separatorUrl[1];
let page;
if (parameterUrl !== undefined){
    const separatorParameter = parameterUrl.split('=');
    page = parseInt (separatorParameter[1]);
} else {
    page = 0
}

//Función para establecer los parametros de los filtros activos 
function setFilterParameters (event) {
    console.log(event.currentTarget.id);

    let filterParmeters = []; 
    let initParameter = "&filter="
    let arrActiveFilters = filterFunctions.detectCheck(arrChkbSpecies);
    arrActiveFilters.forEach(element => {
        filterParmeters.push(initParameter + element);
    });
    if (event.currentTarget.id == "next"){
        nextPag(urlBase, page, filterParmeters);
    } 
} 

//funcion pagina siguiente:
const nextPag = (urlBase, page, filterParameters) => {    
    const nextPage = page + 1;
    const nextParameterPage = "?page=" + nextPage;    
    const nextUrl = urlBase + nextParameterPage + filterParameters; //+ lo que me devuelva la funcion de parametros de filtros
    const a = nextUrl.replace(",", "&", "gi");
    const newNextUrl = a.replace("&&", "&", "gi");
    window.location.href = newNextUrl;
}; 

checkFilters(arrChkbSpecies);
//Función que lea parametros de filtros en URL y activarlos en pagina actual
function checkFilters (checkbox) {
    const currentUrl = window.location.search.substring(1);
    const arrUrlParameters = currentUrl.split("&");
    console.log(arrUrlParameters);
    let arrParam = [];
    let arrFilterParam = [];
    arrUrlParameters.forEach(element => {
        arrParam.push(element.split('='));   
    });
    for (let index = 1; index < arrParam.length; index++) {            
        const element = arrParam[index];
        arrFilterParam.push(element[1]);
    }
    console.log(arrParam);
    console.log(arrFilterParam); // arr filtros en parametros
    console.log(checkbox[1]);
    checkbox.forEach(chb => {
        arrFilterParam.forEach(filterParameter => {
            if (chb.value == filterParameter){
                chb.checked = true;
                console.log("true")
            }
        });
    }); 



//funcion pagina anterior:
const previusPag = (urlBase, page) => {   
    btnPrevius.classList.remove('hide');       
    const previusPage = page - 1;
    const currentParameter = "?page=" + previusPage;
    const nextUrl = urlBase + currentParameter;
    window.location.href = nextUrl;
};


//Esconder boton de atras
if (page==0) {
    btnPrevius.classList.add('hide'); 
}

//Evento para detectar cuando se selecciona o se quita un filtro 
optionsFilter.addEventListener('change', filter);
// let pageData;

function filter() {
    let filters = filterFunctions.detectCheck(arrChkbSpecies);
    console.log(filters);
    let dataFiltered = filterFunctions.filterData(dataGroup,filters);
    console.log(dataFiltered);
    let pagination = filterFunctions.paginate(page, dataFiltered);
    renderData(pagination);
}

let prueba = document.getElementById('characters');
filter();
// prueba.innerHTML = "";
function renderData(pageData) {    
    prueba.innerHTML = "";
    let fragment = document.createDocumentFragment();    
    pageData.forEach(function(current){
        let image = current.image;
        let name = current.name;
        let gender = current.gender;
        let species = current.species;
        let origin = current.origin.name;

        let containerCharacter = document.createElement('div');
        let imgCharacter = document.createElement('img');
        let containerInfoCharacter = document.createElement('div');
        let textName = document.createElement('h4');
        let textGender = document.createElement('h5');
        let textSpecies = document.createElement('h5');
        let textOrigin = document.createElement('h5');
        
        containerInfoCharacter.setAttribute("id","infoCharacter");
        containerInfoCharacter.setAttribute("class","infoCharac");
        containerCharacter.setAttribute("class","containerCharacter");
        imgCharacter.setAttribute("src",image);
        imgCharacter.setAttribute("class","imgCharacter");
        textName.textContent = name;
        textGender.textContent = gender;
        textSpecies.textContent = species;
        textOrigin.textContent = origin;

        containerCharacter.appendChild(imgCharacter);
        containerInfoCharacter.appendChild(textName);
        containerInfoCharacter.appendChild(textGender);
        containerInfoCharacter.appendChild(textSpecies);
        containerInfoCharacter.appendChild(textOrigin);
        containerCharacter.appendChild(containerInfoCharacter);

        
        fragment.appendChild(containerCharacter);    
    })

    characters.appendChild(fragment);
}


//------------------------------------------------------------------------
//Funcion para mostrar la info de personajes cuando se de click en la img
// renderData();
// let infoCharac = getElementsByClassName("infoCharac");
// let imgCharacter = getElementsByClassName("imgCharacter");
// infoCharac.classList.add.hide;
// imgCharacter.addEventListener('click', function(){
//     showInfo(imgCharacter, infoCharac);
// });
// function showInfo(img, info) {
//     img.classList.add('info')
//     info.classList.remove('hide')
// }
//--------------------------------------------------------------------------



// console.log(fragment);

//filtro especie
let specieHuman = document.getElementById('Human');
let specie = document.getElementsByClassName('specie');
let divCheckbox = document.getElementById('specie');
// console.log(specieHuman);

// specieHuman.addEventListener ('change', function (event) {
//     if (specieHuman.checked) {
//         alert("estoy check");
//     } else {
//         alert("NO estoy checked");
//     }
// });





// function detectCheck() {
//     filtersChecked = [];
//     arrChkbSpecies.forEach(function (element){
//         if (element.checked) {
//             filtersChecked.push(element.value);
//        }
//     });    
//     console.log(filtersChecked);
//     xdf(filtersChecked);
//     // return filtersChecked;
// } 
// console.log(filtersChecked);

// let prueba = detectCheck();


// filtersChecked.forEach(element => {
//     dataGroup.species === filtersChecked.element
//     console.log(element);
    
// });


// arrChkbSpecies.forEach(function(element, i){
//     element.addEventListener ('change', function (event) {
//         console.log(element);
//         if (element.checked) {
//             filtersChecked.push(element.value);
//             console.log(filtersChecked);
//         } 
//     });
// });

// dataGroup.forEach(element => {
//     if (element.species === "Human"){

//     }
// });
// const arrSpecie = data.results[index].species
// console.log(data.results[index].species);

// arrSpecie.forEach(function(element){
    
// });

}

