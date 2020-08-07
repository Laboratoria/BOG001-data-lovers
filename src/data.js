    // FUNCIONES
// estas funciones son de ejemplo

// export const filter = () => {

//   Array.prototype.filter()


//   return 'example';
// };

// export const anotherExample = () => {
//   return 'OMG';
// };


// si comento este codigo, el boto de la 2da ventana no funciona
export const orderSort = (setData, order) => {
  let sorting = setData.sort(function (a,z) {
    if(a.name > z.name){
      return 1;
    }
    else { return -1; }
  }) 
  if (order === "Z-A") {
    sorting.reverse()
  } return sorting;
  };

  




