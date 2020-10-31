const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let n
  let x
  let result
  x = sampleActivity / MODERN_ACTIVITY
  n = Math.log(0.5) / Math.log(x)
  result = Math.round(HALF_LIFE_PERIOD / n)

  if ((typeof sampleActivity != "string") || sampleActivity === false || sampleActivity === null || sampleActivity === undefined || sampleActivity === "" || sampleActivity < 0 ) {
    return false
  } else if( result < 0 || result === Infinity || isNaN(result) === true ) {
    return false
  } else{
  return result
  }
 

};
