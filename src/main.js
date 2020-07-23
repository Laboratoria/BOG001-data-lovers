import data from "./data/lol/lol.js";
const datos = Object.values(data.data);
const championsDiv = document.getElementById("root");


for (const champion of datos) {
    root.innerHTML += `
    <div>
      <h3>${champion.name}</h3>
      <img class = 'imgchampion' src = '${champion.splash}' />
    </div>
    `
  }
  
  const nombres = datos.map((dato) => dato.name); //map va dato por dato y ejecuta una función y lo pone en un arreglo nuevo//
  console.log(nombres);
  
  const difficult = datos.filter((dato) => dato.info.difficulty > 6);
  console.log(difficult);
  
  