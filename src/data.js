export const removeDuplicates = (data) => {
  let locations = [];
  for (let i = 0; i < data.results.length; i++) {
    if (locations.includes(data.results[i].location.name) === false) {
      locations.push(data.results[i].location.name);
    }
  }
  locations = locations.sort();
  locations.pop();
  return locations;
};

export const filterByLetter = (uniqueLocations, letter) => {
  let filterLocations = uniqueLocations.filter(function (locationName) {
    return locationName.charAt(0) === letter;
  });

  return filterLocations;
};

export const countCharactersByLocation = (uniqueLocations, data) => {
  let charactersByLocation = [];
  for (let i = 0; i < uniqueLocations.length; i++) {
    let contador = 0;
    for (let j = 0; j < data.results.length; j++) {
      if (uniqueLocations[i] === data.results[j].location.name) {
        contador++;
      }
    }
    let obj = {};
    obj["name"] = uniqueLocations[i];
    obj["count"] = contador;
    if (contador > 10) {
      charactersByLocation.push(obj);
    }
  }
  return charactersByLocation;
};
