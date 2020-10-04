const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {


  if (!(Array.isArray(arr))){
    throw "Input value is not array";
  }

  let resArr = [];
  let idx=-1;


  for(let i = 0; i < arr.length; i++){
    let item = arr[i];
    log(`item[${i}]=${item}`);

    switch (item) {
      case '--discard-next':
        log('--discard-next');
        if (arr.hasOwnProperty(i + 1)){
          idx = i + 1;
        }  
        break;
      case '--discard-prev':
        log('--discard-prev');
        if (arr.hasOwnProperty(i - 1) && (i - 1) != idx){
          idx = i - 1;
          resArr.splice(resArr.length-1,1);
        }  
        break;
      case '--double-next':
        log('--double-next');
        if (arr.hasOwnProperty(i + 1) && (i+1)!= idx ){
          resArr.push(arr[i + 1])
        }
        break;
      case '--double-prev':
        log('--double-prev');
        if (arr.hasOwnProperty(i - 1) && (i - 1) != idx ){
          resArr.push(arr[i - 1])
        }
        break;
      default:
        log('--default');
        if (i != idx){
          resArr.push(item)
        }
        break;
    }
  }

  return resArr; 

};
