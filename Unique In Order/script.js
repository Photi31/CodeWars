'use strict'

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let res = (typeof iterable != 'string' ? iterable : iterable.split(''));
    console.log(res);
    for (let i = 0; i < res.length - 1; i++) {
        if (res[i] == res[i+1]) {
            res.splice(i, 1);
            i--;
        }
    }
    return res;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));