// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};
import champions from './data/lol/lol.js';

let dataChampions = Object.values(champions.data);

console.log(dataChampions);

export let list = () => {
  return dataChampions;
}

export default {
  list
};
