'use strict'

// act(0, 0, 0,  0);
// act(1, 1, 1, 10);
// act(2, 1, 1, 13);
// act(4, 2, 2, 38);
// act(7, 2, 2, 71);

function solve(compasses, gears, tablets) {
    return (compasses == 0 && gears == 0 & tablets == 0) ? 0 : Math.min(compasses, gears, tablets) * 7 + compasses**2 + gears**2 + tablets**2;
}


console.log(solve(0, 0, 0));
console.log(solve(1, 1, 1));
console.log(solve(2, 1, 1));
console.log(solve(4, 2, 2));
console.log(solve(7, 2, 2));