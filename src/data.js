//import pokemon from "./data/pokemon/pokemon.js";

// Función para filtrar la data por nombre y número

export const  searchPokemon = (pokemonData, searchPoke) => {
  return pokemonData.filter(pokemon => {
    if(isNaN(searchPoke)) {
      return pokemon.name.toLowerCase().includes(searchPoke.toLowerCase())
    } else {
        return pokemon.num.includes(searchPoke)
      }
  })
}

 // Función sort para ordenar la data ascendente y descendente numéricamente

const orderAsc = (a,b) => {
  return a.num - b.num
};
const orderDesc = (a,b) => {
  return b.num - a.num
};
export const orderPokeData = (pokemonData, datavalue) => {   
  if(datavalue === "ascend"){
    return pokemonData.sort(orderAsc);
  }
  if(datavalue === "descend"){
    return pokemonData.sort(orderDesc);
  }
};






//export default function searchPokemon(searchPoke) {  
//      let searchPokeName;
//      let searchPokeId;
//      if (isNaN(inputSearch.value)) { 
//         searchPokeName = searchPoke.find(pokemon => 
//         pokemon.name.toLowerCase() === inputSearch.value.toLowerCase());       
//         return searchPokeName;
//        }
//        else{
//              searchPokeId = searchPoke.find(pokemon => pokemon.id === parseInt(inputSearch.value));         
//              return searchPokeId;
//         } 
//     }


     
  

        
 




