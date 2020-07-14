export const removeDuplicates = (uniqueLocations, data) => {
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
