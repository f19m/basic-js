const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {

  return arr.reduce((prev,item)=>
      prev + item.map(vl => (vl == '^^') ? 1 : 0).reduce((p, v) => p + v, 0), 0);
    
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
