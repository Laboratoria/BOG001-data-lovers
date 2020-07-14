// estas funciones son de ejemplo

import data from './data/lol/lol.js';

let champions = Object.values(data.data);
console.log(champions);

export let list = () => {
  return champions;
}
export default {
  list
};
