'use strict'

// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21

function smartSum(...args){
   return [...args].flat(100).reduce((acc, item) => acc + item, 0); 
}

console.log(smartSum(1,2,[[3,4],5],6));

const smartSum = (...a) => a.reduce((s, e) => s + (typeof e === "number" ? e : smartSum(...e)), 0);