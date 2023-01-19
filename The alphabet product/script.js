'use strict'

// assert.strictEqual( alphabet([2,3,4,1,12,6,2,4]), 4 ); 
// assert.strictEqual( alphabet([2,6,7,3,14,35,15,5]), 7 );
// assert.strictEqual( alphabet([20,10,6,5,4,3,2,12]), 5 );
// assert.strictEqual( alphabet([2,6,18,3,6,7,42,14]), 7 );
// assert.strictEqual( alphabet([7,96,8,240,12,140,20,56]), 20 );
// assert.strictEqual( alphabet([20,30,6,7,4,42,28,5]), 7 );

function alphabet(ns) {
    let arr = ns.sort((a, b) => a - b);
    let index = 0;
    while (index != 2) {
        arr.splice((arr.indexOf(arr[index] * arr[index + 1])), 1);
        index++;
    }
    return arr[index + 1];
}

console.log(alphabet([11,2779,7,187,6749,77,397,17]));
console.log(alphabet([2,3,4,1,12,6,2,4]));
console.log(alphabet([20,10,6,5,4,3,2,12]));
console.log(alphabet([2,6,18,3,6,7,42,14]));
console.log(alphabet([7,96,8,240,12,140,20,56]));
console.log(alphabet([20,30,6,7,4,42,28,5]));

function alphabet(ns) {
    let sorted = ns.sort((a,b) => a - b)
    return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
}
