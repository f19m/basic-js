const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
  const res = {};
  
  //console.log('disksNumber=' + disksNumber + '; turnsSpeed=' + turnsSpeed );

  res.turns = 2 ** disksNumber - 1;
  res.seconds = Math.floor((res.turns * 3600) / turnsSpeed);

  return res;

   
};
