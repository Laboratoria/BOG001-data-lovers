async function getCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  console.log(data);


};

getCharacters();


async function getLocation() {
  const response = await fetch('https://rickandmortyapi.com/api/location');
  const data = await response.json();
  console.log(data);

}
getLocation();


async function getEpisode() {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  console.log(data);

}
getEpisode();




/* fetch('https://rickandmortyapi.com/api/character?page=2').then(response => {
      response.json().then(data => {
          console.log(data);
      });
  });*/

