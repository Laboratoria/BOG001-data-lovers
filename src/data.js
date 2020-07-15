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
  
  var dropdown = document.querySelectorAll('.dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown,0);
  dropdownArray.forEach(function(el){
    var button = el.querySelector('a[data-toggle="dropdown"]'),
        menu = el.querySelector('.dropdown-menu'),
        arrow = button.querySelector('i.icon-arrow');
  
    button.onclick = function(event) {
      if(!menu.hasClass('show')) {
        menu.classList.add('show');
        menu.classList.remove('hide');
        arrow.classList.add('open');
        arrow.classList.remove('close');
        event.preventDefault();
      }
      else {
        menu.classList.remove('show');
        menu.classList.add('hide');
        arrow.classList.remove('open');
        arrow.classList.add('close');
        event.preventDefault();
      }
    };
  })
  
  Element.prototype.hasClass = function(className) {
      return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
  };
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

/* Dropdown Menu
//var dropdown = document.querySelectorAll('.dropdown');
//var dropdownArray = Array.prototype.slice.call(dropdown,0);
dropdownArray.forEach(function(el){
	var button = el.querySelector('a[data-toggle="dropdown"]'),
			menu = el.querySelector('.dropdown-menu'),
			arrow = button.querySelector('i.icon-arrow');

	button.onclick = function(event) {
		if(!menu.hasClass('show')) {
			menu.classList.add('show');
			menu.classList.remove('hide');
			arrow.classList.add('open');
			arrow.classList.remove('close');
			event.preventDefault();
		}
		else {
			menu.classList.remove('show');
			menu.classList.add('hide');
			arrow.classList.remove('open');
			arrow.classList.add('close');
			event.preventDefault();
		}
	};
})

Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};*/