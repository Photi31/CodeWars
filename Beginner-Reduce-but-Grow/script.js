'use strict'
function grow(x){
    let result = 1;
    for (let num of x) {
      result *= num;
    }
      return result;
  }