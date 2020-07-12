// estas funciones son de ejemplo

//const aNumeroTarjeta = Array.from(creditCardNumber1);

import informacion from "./data/rickandmorty/rickandmorty"

export const personajes = () => { informacion.map(informacion => `${informacion.name} ${informacion.status}`);
  return 'personajes';
};


export const status = () => {
  return 'status';
};
