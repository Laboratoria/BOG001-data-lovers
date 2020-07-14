import { removeDuplicates } from "./data.js";
import { filterByLetter } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

const navBar = document.getElementById("navBar");
const menuHamburguer = document.getElementById("menuHamburguer");
const locations = document.getElementById("locations");
const firstPage = document.getElementById("firstPage");
const bttnLocations = document.getElementById("bttnLocations");
const backHome = document.getElementById("backHome");
// const routSortData = document.getElementById("routSortData");
const sortingView = document.getElementById("sortingView");
let pageNumber = 0;
let uniqueLocations = [];
let uniqueLocationsAndUrl = [];
const advancePageLink = document.getElementById("advancePageLink");
const returnPageLink = document.getElementById("returnPageLink");
const pagesNumber = document.getElementById("pagesNumber");
const pagesControl = document.getElementById("pagesControl");
const showAllLocations = document.getElementById("showAllLocations");

advancePageLink.addEventListener("click", advancePage);
returnPageLink.addEventListener("click", returnPage);
bttnLocations.addEventListener("click", showLocation);
showAllLocations.addEventListener("click", returnAllLocations);
backHome.addEventListener("click", returnHome);
// routSortData.addEventListener("click", showAZ);

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

const showMenu = () => {
  if (navBar.classList.contains("show-button")) {
    navBar.classList.remove("show-button");
    navBar.classList.add("hidde-button");
  } else {
    navBar.classList.remove("hidde-button");
    navBar.classList.add("show-button");
  }
};
menuHamburguer.addEventListener("click", showMenu);

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
  let filterLocations = filterByLetter(uniqueLocations, letter);
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

  uniqueLocations = removeDuplicates(uniqueLocations, data);
  for (let j = 0; j < uniqueLocations.length; j++) {
    for (let i = 0; i < data.results.length; i++) {
      if (uniqueLocations[j] === data.results[i].location.name) {
        fetch(data.results[i].location.url).then((response) => {
          if (response.ok) {
            response.json().then((json) => {
              let obj = {};
              obj["name"] = data.results[i].location.name;
              obj["dimension"] = json.dimension;
              obj["type"] = json.type;
              uniqueLocationsAndUrl.push(obj);
            });
          }
        });
        break;
      }
    }
  }

  setTimeout(function () {
    listLocations = loadLocationsPage(0);

    let showAll = document.getElementById("showAll");
    showAll.innerHTML =
      `<div class="row" style="justify-content: center;">` +
      listLocations +
      `</div>`;
  }, 1000);
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
              <h4>${uniqueLocations[i]}</h4>
              <div class="flip-card">
            <div id="cardInner${i}" class="flip-card-inner" onclick="
            rotateCard('cardInner${i}')
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
  let dimension = "";
  let type = "";
  for (let i = 0; i < filterLocations.length; i++) {
    for (let j = 0; j < uniqueLocationsAndUrl.length; j++) {
      if (uniqueLocationsAndUrl[j].name === filterLocations[i]) {
        dimension = uniqueLocationsAndUrl[j].dimension;
        type = uniqueLocationsAndUrl[j].type;
      }
    }
    listLocations += `<div class="card-location " id="${"card" + i}">
              <h4>${filterLocations[i]}</h4>
              <div class="flip-card">
            <div id="cardInner${i}" class="flip-card-inner" onclick="
            rotateCard('cardInner${i}')
            " >
              <div class="flip-card-front">
              <img src="${
                "/src/image/" + filterLocations[i] + ".jpg"
              }" onerror="this.src='/src/image/error404.svg';" />
              </div>
              <div class="flip-card-back">
                <h1>${filterLocations[i]}</h1>
                <p>Dimension: ${dimension.replace("Dimension", "")}</p>
                <p>Type: ${type}</p>
              </div>
            </div>
          </div>
              
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
