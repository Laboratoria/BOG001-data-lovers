import { example } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

//funcione primera vista
const locations = document.getElementById("locations");
const firstPage = document.getElementById("firstPage");
const bttnLocations = document.getElementById("bttnLocations");
const backHome = document.getElementById("backHome");
let slider = document.querySelector(".slider-container");
let individualSlider = document.querySelectorAll(".slider-content");
let contador = 1;
let intervalo = 3000;

bttnLocations.addEventListener("click", showLocation);
backHome.addEventListener("click", returnHome);
window.addEventListener("resize", resizeWindow);

let width = 0;

function showLocation() {
  firstPage.style.display = "none";
  locations.style.display = "block";
  width = individualSlider[0].clientWidth;
  setInterval(function () {
    slides();
  }, intervalo);
  //   locations.className = "";
}
function returnHome() {
  firstPage.style.display = "block";
  locations.style.display = "none";
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
      slider.style.transform = "translate (0px)";
      slider.style.transition = "transform 0s";
      contador = 1;
    }, 1500);
  }
}
