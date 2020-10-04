const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {


  if (!(Array.isArray(arr))){
    throw "Input value is not array";
  }
  
  let tmpArr = arr;
  let resArr = [];
  let prevItem=null;
  let idx=0;

  const debugOn = 0;

  const  log=function(abc){
    if (debugOn){
      console.log(abc)
    }
  }
 
 
  //console.log(arr);

  // for(let i = 0; i < arr.length; i++){
  
  //     let item = arr[i];

     
  //     if (item == '--discard-next' || item == '--double-next'  )
  //     {
  //       action = item;
  //     } else{
  //         // item == '--discard-prev' item == '--double-prev'

          

  //         if (action=='--discard-next'){
  //           prevItem = null;
  //           action = null;
  //           continue;
  //         }else if(action=='--double-next'){
  //           resArr.push(item);
  //           resArr.push(item);
  //           prevItem = item;
  //           action = null;
  //           continue;
  //         }

  //         if (item=='--discard-prev'){
  //           if (prevItem){
  //             //   console.log('true=');
  //                resArr.splice(resArr.length-1,1);
  //                prevItem = item;
  //           }
  //           action = null;
  //           //resArr.push(item);
  //          // continue;
  //         } else if(item=='--double-prev'){
  //           if (prevItem){
  //             resArr.push(prevItem);
  //           }
  //          // resArr.push(item);
  //           prevItem = item;
  //           action = null;
  //           //continue;
  //         } else {
  //           resArr.push(item);
  //           prevItem = item;
  //         }

          
  //   }

  // }


  for(let i = 0; i < arr.length; i++){
    let item = arr[i];
    log(`item[${i}]=${item}`);

    switch (item) {
      case '--discard-next':
        log('--discard-next');
        if (arr.hasOwnProperty(i + 1)){
          tmpArr[i + 1] = '--exclude';
        }  
        break;
      case '--discard-prev':
        log('--discard-prev');
        if (arr.hasOwnProperty(i - 1) && tmpArr[i - 1]!='--exclude'){
          tmpArr[i - 1] = '--exclude';
          resArr.splice(resArr.length-1,1);
        }  
        break;
      case '--double-next':
        log('--double-next');
        if (arr.hasOwnProperty(i + 1) && tmpArr[i+1]!='--exclude' ){
          resArr.push(arr[i+1])
        }
        break;
      case '--double-prev':
        log('--double-prev');
        if (arr.hasOwnProperty(i - 1) && tmpArr[i - 1]!='--exclude' ){
          resArr.push(arr[i - 1])
        }
        break;
      default:
        log('--default');
        if (tmpArr[i]!='--exclude'){
          resArr.push(item)
        }
        break;
    }
  }

    


    return resArr; 

  
  
};
