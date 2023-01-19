'use strict'
const input = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"]
}

const removeDuplicateIds = (obj) => {
  const result = {};
  const keys = Object.keys(obj).sort((a, b) => b - a);
  const seen = new Set();
  for ( let k of keys) {
    result[k] = [];
    for (let j of obj[k]) {
      if(!seen.has(j)) {
        seen.add(j);
        result[k].push(j);
      }
    }
  }
  return result;
}

console.log(removeDuplicateIds(input));