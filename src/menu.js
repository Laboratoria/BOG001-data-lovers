const menu = document.querySelector("#menu");
const buttonPokeMenu = document.querySelector("#buttonPokeMenu");
const buttonMenu = document.querySelector(".buttonMenu");
const subButtonOrder = document.querySelector("#subButtonOrder");
const subBtnOrder = document.querySelector("#subBtnOrder");
const subButtonType = document.querySelector("#subButtonType");
const subButtonWeaknesses = document.querySelector("#subButtonWeaknesses");

buttonPokeMenu.addEventListener("click", showMenu);

function showMenu(){
    menu.classList.toggle("appear");
}

buttonMenu.addEventListener("click", showSubButtons);
function showSubButtons(){
    subButtonOrder.style.display = "block";
    subButtonType.style.display = "block";
    subButtonWeaknesses.style.display = "block";
 }

/*subButtonOrder.addEventListener("click", showSubBtnOrder);
function showSubBtnOrder(){
    subBtnOrder.classList.toggle("showOrder");

}*/






