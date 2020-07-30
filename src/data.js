
export const filterByRol = (data,option) =>{
  const filter = data.filter((rol) => rol.tags.join("").includes (option));
  return filter;
  }
  console.log(filterByRol)

