'use strict'
const n = 1000;

function doors(n){
  // let matrix = [];
  // let openDoor = 0;
  // for (let i = 0; i < n; i++) {
  //   matrix.push("C");
  // }
  // for (let i = 1; i <= n; i++) {
  //   for (let j = i; j <= n; j++) {
  //     if (j % i == 0) {
  //       matrix[j-1] = (matrix[j-1] == "C") ? (matrix[j-1] = "O") : (matrix[j-1] = "C");
  //     }
  //   }
  //   if (i == n) {
  //     matrix.forEach(item => item == "O" ? openDoor ++ : openDoor);
  //   }
  // }
  // return openDoor;
  return ~~Math.sqrt(n);
}

console.log(doors(n));