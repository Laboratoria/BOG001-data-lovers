import data from "./data.js";

let champions = data.list();
/*console.log(data)*/

champions.forEach(element => {
  /*console.log(element.name)*/
  let contenedor = document.getElementById("champions");
  let championContainer = document.createElement("div");
  championContainer.classList.add("champions");
  const image = document.createElement("img");
  //const imgContenedor = document.createElement("div");
  //image.classList.add("imgContenedor");
  image.src = element.img;
  championContainer.appendChild(image);
  championContainer.appendChild(document.createTextNode(element.name));
  championContainer.appendChild(document.createTextNode("Rol:" + "" + element.tags));
  contenedor.appendChild(championContainer);
});

/* --------Menu--------*/
var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu');
var menuRol = document.getElementById('menuRol');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})

