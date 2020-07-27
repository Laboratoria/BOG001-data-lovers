export default function searchPokemon(searchPoke) {  

    let searchPokeName;
    let searchPokeId;
 
    if (isNaN(inputSearch.value)) { 
        searchPokeName = searchPoke.find(pokemon => /*filter - startwith*/
       /* pokemon.name.includes(inputSearch.value)*/
        pokemon.name.toLowerCase() === inputSearch.value.toLowerCase());/*indexoff*/
        return searchPokeName;
    } else{
        searchPokeId = searchPoke.find(pokemon => pokemon.id === parseInt(inputSearch.value));
        return searchPokeId;
    } 
}
   


        
 




