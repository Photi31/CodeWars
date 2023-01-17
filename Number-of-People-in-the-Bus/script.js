'use strict'
var number = function(busStops){
    let result = 0;
    busStops.forEach(item => {
      result += (item[0] - item[1])
    })
    return result;
    // Good Luck!
}