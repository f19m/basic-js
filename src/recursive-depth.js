const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
  }

  calculateDepth( arr ) {
    let prevLen=1;
    arr.forEach(element => {
      let curLen = 1;
      if (Array.isArray(element)){
        curLen += this.calculateDepth(element);
      }
      if (curLen > prevLen){
        prevLen = curLen;
      }
    });
    return prevLen;
  // throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};