//import data from './data/lol/lol.js';
//console.log(data);

//function cargarData(){
  function dataProp () {
    let personajes= document.getElementById('todosPersonajes')
    
   }
    fetch ('./data/lol/lol.json')
    .then(response=> response.json()) // Indicamos el formato en que se desea obtener la información
    .then (result => {
       console.log(result.data)
       let data = result.data;
       for (const prop in data) {
        console.log(`data.${prop}`,data[prop]);
      
      
      }
      


       /*let todo= document.getElementById('todosPersonajes')
       let cadena= "<label>"
       cadena+= `${data["data"]["Aatrox"]["title"]}`
       cadena+= "</label>"
       todo.innerHTML = cadena*/
      
       // personajes.innerHTML += 
         //<diV>
    })
        //let personajes= document.createElement ('section')
           // personajes.innerHTML += 
             // </div>

     
//
            
     
 // Aqui mostramos dicha información     


 //cargarData()
 

