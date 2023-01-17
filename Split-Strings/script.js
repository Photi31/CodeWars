'use strict'
function solution(str){
    let res = [];
     for (let i = 0; i*2 < str.length; i++) {
         let s = `${str.slice(i*2, i*2+2)}`;
         if (s.length < 2) {
             s += '_';
         }
         res.push(s);
     }
    return res;
 }