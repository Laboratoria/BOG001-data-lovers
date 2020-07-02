//import { example } from './data.js';
// import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

const viewTwo=document.getElementsByClassName("viewTwo")[0];
viewTwo.style.display='none'; 

const viewOne = document.getElementsByClassName("viewOne")[0];

const viewThree = document.getElementsByClassName("viewThree")[0];
viewThree.style.display='none'; 

const explore=document.getElementsByClassName("explore")[0];
explore.addEventListener("click", viewChamp);

function viewChamp(){
    viewOne.style.display = 'none';
    viewTwo.style.display = 'block';
}
   
const endpoint = 'https://raw.githubusercontent.com/Laboratoria/BOG001-data-lovers/master/src/data/lol/lol.json';

const dataPromise = fetch(endpoint);
  console.log(dataPromise);
  dataPromise.then(response => {                          // Get the response
      return response.json();                             //  Get de Json - no parseJson needed
  }).then(lolData =>{
      
    var lolDataArrayTemp = Object.values(lolData);       //Object to array
    const lolDataArray = lolDataArrayTemp.slice(3);      //Only the data we need
    console.log(lolDataArray);

    var everyChampArray = [];                            //New array just for that specific data
    
    function logLolData(temp){
      everyChampArray = Object.values(temp);
      console.log(everyChampArray);
    } 
    lolDataArray.forEach(logLolData);

    let lolDataHTML;

    everyChampArray = everyChampArray.reverse();

  for(let i=0; i<everyChampArray.length; i++){
    lolDataHTML = `
      <div data-arrayposition="${[i]}" class = "uniqueChamp">
      <img class ="imageChampion"src = "${everyChampArray[i].img}">
      <h2 class = "champName">${everyChampArray[i].id}</h2>
      </div>` + lolDataHTML;
  }

  document.getElementById("here").innerHTML = lolDataHTML;

  //const myFragment = document.createRange().createContextualFragment(lolDataHTML);
  //document.getElementById("here").innerHTML = myFragment;

  const uniqueChampDiv = document.querySelectorAll('.uniqueChamp'); //nodelist vs htmlCollection -- getelementbyclassname
  //console.log(`query de div unique ${selectChamp}`);

  function selectChamp(abc){
      console.log("le di click al champion xd");

      const specificTarget = abc.currentTarget.dataset.arrayposition;
      console.log(specificTarget); //the parameter that keeps the mouse event info 
      viewTwo.style.display='none'; 
      viewThree.style.display='block'; 


      const champDescription = `
      <div>
      <img class ="imageChampion"src = "${everyChampArray[specificTarget].splash}">
        <h1>${everyChampArray[specificTarget].id}</h1>
        <h3>${everyChampArray[specificTarget].title}</h3>
        <h3>${everyChampArray[specificTarget].tags}</h3>
        <p>${everyChampArray[specificTarget].blurb}</p>
      </div>`;

      document.getElementById("here too").innerHTML = champDescription;

    //   const infoChamp = `
    //   <div class = "uniqueChamp ${everyChampArray[i].id}">
    //   <img class ="imageChampion"src = "${everyChampArray[i].img}">
    //   <h2 class = "champName">${everyChampArray[i].id}</h2>
    //   </div>`



      

  }

  uniqueChampDiv.forEach(function(clickEvent){ //anon function
    clickEvent.addEventListener('click', selectChamp);
  });



  }) //Api end
  
