'use strict'
function solution(number){
    let res = 0;
    if (number === 0) {
      return res;
    } else {
      for (let i = 3; i < number; i++) {
          if (i % 3 == 0 || i % 5 === 0) {
              res += i;
          }
      }
    }
    return res;
  }