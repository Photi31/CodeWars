'use strict'
function nthFibo(num) {
    if (num === 0 || num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        let iter = 3,
            acc = 1,
            n = 1;
        while (iter < num) {
            acc += n;
            n = acc - n;
            iter++;
        }
        return acc;
    }
}

console.log(nthFibo(6));

function nthFibo(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
  }