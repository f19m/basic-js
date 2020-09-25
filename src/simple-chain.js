const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  
  getLength() {
    return this.chain.length;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    this.chain.push(value);
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this;
  },
  removeLink(position) {

    if (typeof position != 'number'){
      this.chain = [];
      throw new CustomError('Input value not a number');
    } 

    if (!this.chain.hasOwnProperty(position - 1)) {
      this.chain = [];
      throw new CustomError('Incorrect index value')
    };
    
    this.chain.splice(position - 1, 1);
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this;
  },
  finishChain() {
    let res = this.chain.map(val => `( ${val} )`).join('~~');
    this.chain = [];
    return res;
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }



};

module.exports = chainMaker;
