'use strict'

function getSum(a, b){
    if (a == b) {
        return a;
    }
    let i = Math.min(a, b);
    let res = 0;
    while (i <= Math.max(a, b)) {
        res += i;
        i++;
    }
    return res;
}


console.log(getSum(0, 1));
console.log(getSum(1, 2));
console.log(getSum(1, 1));
console.log(getSum(1, 0));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));