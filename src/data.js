// estas funciones son de ejemplo

import data from './data/lol/lol.js';

let champions = Object.values(data.data);
console.log(champions);

export let list = () => {
  return champions;
}
export default {
  list
};


// selector Menu
let menu = document.querySelector('.hamburger')
// method menu
function toggleMenu(event) {
  this.classList.toggle('is-active');
  document.querySelector(".menuppal").classList.toggle("is_active");
  event.preventDefault();
}

// event menu
menu.addEventListener('click', toggleMenu, false);

//Solución con jQUery
/*$(document).ready(function(){
	$('.hamburger').click(function() {
		$('.hamburger').toggleClass('is-active');
		$('.menuresponsive').toggleClass('is-active');
		return false;
	});
});*/
