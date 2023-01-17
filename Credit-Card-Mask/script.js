'use strict'
function maskify(cc) {
    let mask = '';
    for (let i = 0; i < cc.length - 4; i++) {
        mask += '#'; 
    }
    mask += cc.slice(-4); 
    return mask;
}