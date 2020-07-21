export default {
  detectCheck,
  filterData,
  paginate,
  sort,
};

//Funcion para detectar filtros activos
function detectCheck(filtersBySpecies) {
  let filtersChecked = [];
  filtersBySpecies.forEach((element) => {
    if (element.checked) {
      filtersChecked.push(element.value);
    }
  });
  return filtersChecked;
}

//Función para bucar en la data los personajes que cumplan con los filtros activos
//Parametros necesarios: data de personajes, arr de filtros activos
function filterData(data, filters) {
  let dataFiltered = [];
  if (filters.length == 0) {
    return data;
  }
  data.forEach((character) => {
    filters.forEach((elementFilter) => {
      if (character.species == elementFilter) {
        //especie de personaje 1 = primer filtro / segundo filtro ...
        dataFiltered.push(character);
      }
    });
  });
  return dataFiltered;
}

//Funcion Slice para paginación
function paginate(page, dataFiltered) {
  const x = page * 10;
  const y = x + 10;
  const pageData = dataFiltered.slice(x, y);
  return pageData;
}

function sort(dataFiltered) {
  dataFiltered.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
}

// function searchDataTwo(data, filters){
//     let dataFiltered=[];
//     data.forEach(character => {
//         if (filters.include(character.specie)){
//             dataFiltered.push(character)
//         }
//     })
//     return dataFiltered
// }
