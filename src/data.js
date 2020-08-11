// ----OTRA FORMA DE ORDENAR----

// export const orderSort = (setDat, sort) => { 
//   console.log(sort);
//   if(sort === "A-Z" || sort === "Z-A"){
//     let sorting = setDat.sort((x,y) => {
//       if(x.name > y.name ) {
//         return 1;
//       } else { return -1;}
//     }); 
//     if (sort === "Z-A"){
//       sorting.reverse();
//     }
//       return sorting; 
//   } else {
//     let sorting = setDat.sort((x,y) => {
//       if(x.id > y.id ) {
//       return 1;
//     } else { return -1; }
//   }); 
//     if (sort === "151-1"){
//       sorting.reverse();
//   } 
//     return sorting; 
// }}; 

export const orderSort = (setData, order) => {
  let sorting = setData.sort((a,z) => {
    let result;
    let x;
    let y;
    if(order === "A-Z" || order === "Z-A") {
      x = a.name;
      y = z.name;
    
    } if(order === "1-151" || order === "151-1") {
      x = a.id;
      y = z.id;
    }
    if (x > y){ result = 1;}
    if(x < y) { result = -1;}
    return result; 
  }) 
  if (order === "Z-A" || order === "151-1") {
    sorting.reverse()
  } return sorting;
  };

  export const pokemonTypes = (setData, orderType) => {
	let filtering = setData.filter((pokemon) => {
		const tiposArr = pokemon.type;
		return tiposArr.includes(orderType);
	});
	return filtering;
};




