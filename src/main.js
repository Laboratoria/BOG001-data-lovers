//import { example } from "./data.js";
//console.log(example, data);
import data from "./data/rickandmorty/rickandmorty.js";

import {
  removeDuplicates,
  filterByLetter,
  countCharactersByLocation,
} from "./data.js";

import "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js";

const navBar = document.getElementById("navBar");
const doughnutChart = document.getElementById("doughnutChart");
const myChart = document.getElementById("myChart");
const locations = document.getElementById("locations");
const firstPage = document.getElementById("firstPage");
const bttnLocations = document.getElementById("bttnLocations");
// const containerCategoriesMenu = document.getElementById(
//   "containerCategoriesMenu"
// );
const backHome = document.getElementById("backHome");
const sortingView = document.getElementById("sortingView");
let pageNumber = 0;
let uniqueLocations = [];
let uniqueLocationsAndUrl = [];
const advancePageLink = document.getElementById("advancePageLink");
const returnPageLink = document.getElementById("returnPageLink");
const pagesNumber = document.getElementById("pagesNumber");
const pagesControl = document.getElementById("pagesControl");
const showAllLocations = document.getElementById("showAllLocations");

doughnutChart.addEventListener("click", showDoughnut);
advancePageLink.addEventListener("click", advancePage);
returnPageLink.addEventListener("click", returnPage);
bttnLocations.addEventListener("click", showLocation);
// containerCategoriesMenu.addEventListener("click");
showAllLocations.addEventListener("click", returnAllLocations);
backHome.addEventListener("click", returnHome);

window.onload = function () {
  loadLocations();
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
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

//--------------- Ocultar o mostrar ventana de categorias de menu ----------------
const btnMenu = document.getElementById("menu");
const categoriesMenu = document.getElementById("containerCategoriesMenu");
btnMenu.addEventListener("click", function () {
  categoriesMenu.classList.toggle("hide");
});

function showMenu() {
  if (navBar.classList.contains("show-button")) {
    navBar.classList.remove("show-button");
    navBar.classList.add("hidde-button");
  } else {
    navBar.classList.remove("hidde-button");
    navBar.classList.add("show-button");
  }
}

function returnAllLocations() {
  showAllLocations.style.display = "none";
  pagesControl.style.display = "flex";
  let listLocations = loadLocationsPage(0);

  let showAll = document.getElementById("showAll");
  showAll.innerHTML =
    `<div class="row" style="justify-content: center;">` +
    listLocations +
    `</div>`;
}

function showDoughnut() {
  if (myChart.style.display === "block") {
    myChart.style.display = "none";
  } else if (myChart.style.display === "none") {
    myChart.style.display = "block";
  }
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
  // containerCategoriesMenu.style.display = "none";
  locations.style.display = "block";
  sortingView.style.display = "block";
  doughnutChart.style.display = "block";
  showMenu();
}

function returnHome() {
  firstPage.style.display = "block";
  locations.style.display = "none";
  sortingView.style.display = "none";
  doughnutChart.style.display = "none";
}

function loadLocations() {
  let listLocations = "";
  uniqueLocations = [];
  pagesNumber.innerHTML = "1";

  uniqueLocations = removeDuplicates(data);
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
  let charactersByLocation = countCharactersByLocation(uniqueLocations, data);
  let labels = [];
  let dataset = [];

  for (let i = 0; i < charactersByLocation.length; i++) {
    labels.push(charactersByLocation[i].name);
    dataset.push(charactersByLocation[i].count);
  }

  let donut = document.getElementById("myChart").getContext("2d");

  // eslint-disable-next-line no-unused-vars
  let myChart;
  // eslint-disable-next-line no-undef
  myChart = new Chart(donut, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Characters per location",
          data: dataset,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

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
