const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
 // console.log(arr);

  if (!(Array.isArray(arr))){
    throw "Input value is not array";
  }
  

  let resArr = [];
  let prevItem=null;
  let action=null;

  for(let i = 0; i < arr.length; i++){
  
      let item = arr[i];

     
      if (item == '--discard-next' || item == '--double-next'  )
      {
        action = item;
      } else{
          // item == '--discard-prev' item == '--double-prev'

          

          if (action=='--discard-next'){
            prevItem = null;
            action = null;
            continue;
          }else if(action=='--double-next'){
            resArr.push(item);
            resArr.push(item);
            prevItem = item;
            action = null;
            continue;
          }

          if (item=='--discard-prev'){
            if (prevItem){
              //   console.log('true=');
                 resArr.splice(resArr.length-1,1);
                 prevItem = item;
            }
            action = null;
            //resArr.push(item);
           // continue;
          } else if(item=='--double-prev'){
            if (prevItem){
              resArr.push(prevItem);
            }
           // resArr.push(item);
            prevItem = item;
            action = null;
            //continue;
          } else {
            resArr.push(item);
            prevItem = item;
          }

          
    }

  }

    


    return resArr; 

  
  
};
