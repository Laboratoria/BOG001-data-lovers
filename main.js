//import data from './data/lol/lol.js';
//console.log(data);
    
function fetchData () {
  fetch ('./data/lol/lol.json')
  .then(response=> response.json()) // Indicamos el formato en que se desea obtener la información
  .then (result => {
    characters(result.data);
  })
}

function characters (charactersData){
  console.log(charactersData)
  for ( let character in charactersData) {
       console.log(charactersData[character].name)

    let tarjetas = document.createElement ("div");
    tarjetas.classList.add ("personajes");
    tarjetas.innerHTML= charactersData[character].name; 
    document.getElementById ("container").appendChild(tarjetas);
    console.log(tarjetas)
 // antes de appenchild indicamos en que parte de HTML vamos agregar el nuevo elemento que unimos con appenChild

    let images = document.createElement("img"); // Se crea otra variable para crear el elemento img 
    images.src= images.innerHTML= charactersData[character].img; // para darle un atributo a ese elemnto se llama la variable. ___ y se coloca el nombre del atributo
    tarjetas.appendChild(images);
    console.log (images)
 

    

  /*let prop;
      for (prop in data) {

         console.log(`data.${prop}`,data[prop]);
        /*let tarjeta =  document.getElementById("container");
        tarjeta += `${data["id"]["ïmg"]}`;
    }
    document.getElementById ("container").innerHTML= data.Aatrox;
    innerHTML +=
`<div class="tarjeta">
 <img src= "${character.image}" alt= "${character.name}">

    */



}
}
fetchData();
  

      
      

     
      
    