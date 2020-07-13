// estas funciones son de ejemplo

import data from './data/lol/lol.js';

let champions = Object.values(data.data);
console.log(champions);
alert("Hello! I am an alert box!!");

export let list=() => {
    return champions;
}
 export default {list};
