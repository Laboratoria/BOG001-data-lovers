// estas funciones son de ejemplo

import data from './data/lol/lol.js';

let champions = Object.values(data.data);
/*console.log(champions);*/

export let list = () => {
  return champions;
}
export default {
  list
};

/*et filter = champions;

function rolMage(mage){
  return mage = tags["Mage"];
}

function myFunction (){
  document.getElementById("champions").innerHTML = champions.filter(rolMage);
}
console.log(myFunction);*/

let prueba = champions.filter(function(rol){
  return (rol.tags === "Mage");
 });
 console.log(prueba);
