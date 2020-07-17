//import data from './data/lol/lol.js';
//console.log(data);

//function cargarData(){
    fetch ('./data/lol/lol.json')
    .then(response=> response.json()) // Indicamos el formato en que se desea obtener la información
    .then (data => {
       console.log(data)
       let todo= document.getElementById('todosPersonajes')
       todo.innerHTML = '<div>${data}</div>'
       // personajes.innerHTML += 
         //<diV>
    })
        //let personajes= document.createElement ('section')
           // personajes.innerHTML += 
             // </div>

     
//
            
     
 // Aqui mostramos dicha información     


 //cargarData()
 

