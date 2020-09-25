const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(isDirect){
    this.isDirect = (isDirect || isDirect === undefined) ? true : false;
  }

  getKeyStr(str, key){
    let keyStr = '';

    let keyArr = key.split('');

    for (let i = 0; i < str.length; i++) {
      const letter = str[i];
      
      if (letter.charCodeAt(0) >= 'A'.charCodeAt(0) && letter.charCodeAt(0) <=  'Z'.charCodeAt(0)){
        keyStr = keyStr + keyArr.shift();
        if (keyArr.length == 0){
          keyArr = key.split('');
        }
      } else {
        keyStr = keyStr + letter;
      }
      
    }

    return keyStr;
  }


  getCodeByChar(letter){
    return letter.charCodeAt(0) - 65;
  }
  getCharByCode(num, i){
    return String.fromCharCode(num + 65 + i );
  }

  encrypt(str, key) {
    //console.log(`str=${str} \n key=${key} \n this.isDirect=${this.isDirect}`)

    if (!str || !key) throw 'Null parameters';

    let strUp = str.toUpperCase(),
        keyUp = key.toUpperCase(),
        res = '';

    let keyStr = this.getKeyStr(strUp, keyUp);
    //console.log(`keyStr=${keyStr}`);

    for (let i = 0; i < keyStr.length; i++) {
      if (strUp[i].charCodeAt(0) >= 'A'.charCodeAt(0) && strUp[i].charCodeAt(0) <=  'Z'.charCodeAt(0)){

        let offset = (this.getCodeByChar(strUp[i]) + this.getCodeByChar(keyStr[i])) % 26;
        res = res + this.getCharByCode(offset, 0);
  
      } else{
        res = res + strUp[i];
      }
    }
    
    
    return (this.isDirect) ? res : res.split('').reverse().join('');

    // remove line with error and write your code here
  }    
  decrypt(str, key) {
    //console.log(`str=${str} \n key=${key} \n this.isDirect=${this.isDirect}`)

    if (!str || !key) throw 'Null parameters';
    
    let strUp = str.toUpperCase(),
        keyUp = key.toUpperCase(),
        res = '';

    let keyStr = this.getKeyStr(strUp, keyUp);

    for (let i = 0; i < keyStr.length; i++) {
      if (strUp[i].charCodeAt(0) >= 'A'.charCodeAt(0) && strUp[i].charCodeAt(0) <=  'Z'.charCodeAt(0)){

        let offset = (this.getCodeByChar(strUp[i]) + 26 - this.getCodeByChar(keyStr[i])) % 26;
        res = res + this.getCharByCode(offset, 0);
  
      } else{
        res = res + strUp[i];
      }
    }
  
    return (this.isDirect) ? res : res.split('').reverse().join('');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
