const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const log2 = 0.693;
  
  
  if (!(sampleActivity && typeof(sampleActivity) == 'string')) {
    return false;
  }

  try{
    activity = parseFloat(sampleActivity);

    if (activity > 0 && activity < MODERN_ACTIVITY){
      return Math.ceil(Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / log2);
    }
  }catch(e){
    return false;
  }

  return false;
};
