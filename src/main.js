import { example } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const locations = document.getElementById("locations");
const firstPage = document.getElementById("firstPage");
const bttnLocations = document.getElementById("bttnLocations");
const backHome = document.getElementById("backHome");
const routSortData = document.getElementById("routSortData");
const sortingView = document.getElementById("sortingView");
let slider = document.querySelector(".slider-container");
let individualSlider = document.querySelectorAll(".slider-content");
let contador = 1;
let intervalo = 3000;
let pageNumber = 0;
let uniqueLocations = [];
const advancePageLink = document.getElementById("advancePageLink");
const returnPageLink = document.getElementById("returnPageLink");
const pagesNumber = document.getElementById("pagesNumber");
// const cardContainer = document.getElementById("cardContainer");

advancePageLink.addEventListener("click", advancePage);
returnPageLink.addEventListener("click", returnPage);
bttnLocations.addEventListener("click", showLocation);
backHome.addEventListener("click", returnHome);
// routSortData.addEventListener("click", showAZ);
window.addEventListener("resize", resizeWindow);

let width = 0;

window.onload = function () {
  loadLocations();
};

function showLocation() {
  firstPage.style.display = "none";
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
    }
  }

  uniqueLocations = uniqueLocations.sort();
  uniqueLocations.pop();
  listLocations = loadLocationsPage(0);

  let showAll = document.getElementById("showAll");
  showAll.innerHTML =
    `<div class="row" style="justify-content: center;">` +
    listLocations +
    `</div>`;
}

function loadLocationsPage(startIndex) {
  let listLocations = "";
  for (let i = startIndex; i < startIndex + 6; i++) {
    listLocations += `<div class="card-location" id="${"card" + i}">
              <h2>${uniqueLocations[i]}</h2>
              <img src="${
                "/src/image/" + uniqueLocations[i] + ".jpg"
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
