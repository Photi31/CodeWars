'use strict'
// trim("He", 1) should return "H..."
// trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

function trim(str, size) {
    return (str.length < size || str.length == size) ? str : str.length < 3 ? str.slice(0, size) + '...' : str.slice(0, size - 3) + '...';
  }

console.log(trim('Hey', 3));

// function trim(arr, size) {
//     return arr.length <= size ? arr : arr.slice(0, arr.length > 3 ? size - 3 : size) + '...'
// }