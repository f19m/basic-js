const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  //console.log(arr);

  if (!(Array.isArray(arr))){
    throw "Input value is not array";
  }
  

  let resArr = [];
  let prevItem=null;
  let action=null;

  for(let i = 0; i < arr.length; i++){
  
      let item = arr[i];

     
      if (item == '--discard-next' || item == '--discard-prev' ||
          item == '--double-next' || item == '--double-prev' )
      {
        action = item;
      } else{
        
          switch (action) {
            case '--discard-next':
              prevItem = null;
              action = null;
              break;
            case '--discard-prev':
              //console.log('prevItem='+prevItem);
                if (prevItem){
               //   console.log('true=');
                  resArr.splice(resArr.length-1,1);
                  prevItem = item;
                }
                action = null;
                resArr.push(item);
                break;
            case '--double-next':
                resArr.push(item);
                resArr.push(item);
                prevItem = item;
                action = null;
                break;
            case '--double-prev':
                if (prevItem){
                  resArr.push(prevItem);
                }
                resArr.push(item);
                prevItem = item;
                action = null;
                break;
            default:
              resArr.push(item);
              prevItem = item;
              break;
          } 

      
      
    }

  }

    


    return resArr; 

  
  
};
