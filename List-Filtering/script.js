'use strict'
function filter_list(l) {
    let res = [];
    l.forEach((item) => {
        if (typeof item === "number") {
            res.push(item);
        }
    })
    return res;
    // Return a new array with the strings filtered out
  }