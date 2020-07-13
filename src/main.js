import data from "./data.js";

let champions = data.list();
console.log(data)  

champions.forEach(element => {
    console.log(element.name)
    let contenedor = document.getElementById("champions");
    let championContainer = document.createElement("div");
    championContainer.classList.add("champions");
    championContainer.appendChild(document.createTextNode(element.name))
    const image = document.createElement("img");
    image.src = element.img;
    championContainer.appendChild(image);
    contenedor.appendChild(championContainer);
});
