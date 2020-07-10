import { example } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const locations = document.getElementById("locations");
const firstPage = document.getElementById("firstPage");
const bttnLocations = document.getElementById("bttnLocations");
const backHome = document.getElementById("backHome");
// const routSortData = document.getElementById("routSortData");
const sortingView = document.getElementById("sortingView");
let slider = document.querySelector(".slider-container");
let individualSlider = document.querySelectorAll(".slider-content");
let contador = 1;
let intervalo = 3000;
let pageNumber = 0;
let uniqueLocations = [];
let uniqueLocationsAndUrl = [];
const advancePageLink = document.getElementById("advancePageLink");
const returnPageLink = document.getElementById("returnPageLink");
const pagesNumber = document.getElementById("pagesNumber");
const pagesControl = document.getElementById("pagesControl");
const showAllLocations = document.getElementById("showAllLocations");
// const cardContainer = document.getElementById("cardContainer");
let width = 0;

advancePageLink.addEventListener("click", advancePage);
returnPageLink.addEventListener("click", returnPage);
bttnLocations.addEventListener("click", showLocation);
showAllLocations.addEventListener("click", returnAllLocations);
backHome.addEventListener("click", returnHome);
// routSortData.addEventListener("click", showAZ);
window.addEventListener("resize", resizeWindow);

window.onload = function () {
  loadLocations();
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  // console.log(alphabet);
  for (let i = 0; i < alphabet.length; i++) {
    let buttonId = "btn" + alphabet[i];
    let button = document.getElementById(buttonId);
    button.addEventListener("click", function () {
      filterList(alphabet[i]);
      pagesControl.style.display = "none";
      showAllLocations.style.display = "block";
    });
  }
};
function returnAllLocations() {
  showAllLocations.style.display = "none";
  pagesControl.style.display = "block";
  let listLocations = loadLocationsPage(0);

  let showAll = document.getElementById("showAll");
  showAll.innerHTML =
    `<div class="row" style="justify-content: center;">` +
    listLocations +
    `</div>`;
}

function filterList(letter) {
  let filterLocations = uniqueLocations.filter(function (locationName) {
    return locationName.charAt(0) === letter;
  });
  let listLocations = loadFilterLocations(filterLocations);

  let showAll = document.getElementById("showAll");
  showAll.innerHTML =
    `<div class="row" style="justify-content: center;">` +
    listLocations +
    `</div>`;
}

function showLocation() {
  firstPage.style.display = "none";
  showAllLocations.style.display = "none";
  locations.style.display = "block";
  sortingView.style.display = "block";
  width = individualSlider[0].clientWidth;
  setInterval(function () {
    slides();
  }, intervalo);
  //   locations.className = "";
}
function returnHome() {
  firstPage.style.display = "block";
  locations.style.display = "none";
  sortingView.style.display = "none";
}

function loadLocations() {
  let listLocations = "";
  uniqueLocations = [];
  pagesNumber.innerHTML = "1";

  // uniqueLocations.push(data.results[0].location.name);

  for (let i = 0; i < data.results.length; i++) {
    if (uniqueLocations.includes(data.results[i].location.name) === false) {
      uniqueLocations.push(data.results[i].location.name);
      fetch(data.results[i].location.url).then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            let obj = {};
            obj["name"] = data.results[i].location.name;
            obj["dimension"] = json.dimension;
            obj["type"] = json.type;
            listLocations = loadLocationsPage(0);
            uniqueLocationsAndUrl.push(obj);
          });
        }
      });
    }
  }
  uniqueLocations = uniqueLocations.sort();
  uniqueLocations.pop();

  let showAll = document.getElementById("showAll");
  showAll.innerHTML =
    `<div class="row" style="justify-content: center;">` +
    listLocations +
    `</div>`;
}

function loadLocationsPage(startIndex) {
  let listLocations = "";
  let dimension = "";
  let type = "";
  for (let i = startIndex; i < startIndex + 6; i++) {
    for (let j = 0; j < uniqueLocationsAndUrl.length; j++) {
      if (uniqueLocationsAndUrl[j].name === uniqueLocations[i]) {
        dimension = uniqueLocationsAndUrl[j].dimension;
        type = uniqueLocationsAndUrl[j].type;
      }
    }
    listLocations += `<div class="card-location " id="${"card" + i}">
              <h2>${uniqueLocations[i]}</h2>
              <div class="flip-card">
            <div id="cardInner" class="flip-card-inner" onclick="
              if(this.style.transform === 'rotateY(180deg)'){
                this.style.transform = 'rotateY(0deg)';
              }else{
                this.style.transform = 'rotateY(180deg)';
              }
            " >
              <div class="flip-card-front">
              <img src="${
                "/src/image/" + uniqueLocations[i] + ".jpg"
              }" onerror="this.src='/src/image/error404.svg';" />
              </div>
              <div class="flip-card-back">
                <h1>${uniqueLocations[i]}</h1>
                <p>Dimension: ${dimension.replace("Dimension", "")}</p>
                <p>Type: ${type}</p>
              </div>
            </div>
          </div>
              
            </div>`;
  }
  return listLocations;
}

function loadFilterLocations(filterLocations) {
  let listLocations = "";
  for (let i = 0; i < filterLocations.length; i++) {
    listLocations += `<div class="card-location" id="${"card" + i}">
              <h2>${filterLocations[i]}</h2>
              <img src="${
                "/src/image/" + filterLocations[i] + ".jpg"
              }" onerror="this.src='/src/image/error404.svg';" />
            </div>`;
  }
  return listLocations;
}

function returnPage() {
  movePage("-");
}
function advancePage() {
  movePage("+");
}

function movePage(symbol) {
  if (pageNumber === 0 && symbol === "-") {
    return;
  }
  let maxPages = uniqueLocations.length / 6 - 1;
  if (pageNumber === maxPages && symbol === "+") {
    return;
  }
  if (symbol === "+") {
    pageNumber++;
  }
  if (symbol === "-") {
    pageNumber--;
  }
  pagesNumber.innerHTML = pageNumber + 1;
  let showAll = document.getElementById("showAll");
  showAll.innerHTML =
    `<div class="row" style="justify-content: center;">` +
    loadLocationsPage(pageNumber * 6) +
    `</div>`;
}

function resizeWindow() {
  width = individualSlider[0].clientWidth;
}

function slides() {
  let operacion = -width * contador;
  slider.style.transform = "translate(" + operacion + "px)";
  slider.style.transition = "transform .8s";
  contador++;

  if (contador == individualSlider.length) {
    setTimeout(function () {
      for (let i = 1; i < individualSlider.length; i++) {
        individualSlider[i].style.display = "none";
      }
      slider.style.transform = "translate (0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
    setTimeout(function () {
      for (let i = 1; i < individualSlider.length; i++) {
        individualSlider[i].style.display = "flex";
      }
    }, 3000);
  }
}
