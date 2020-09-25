const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  let res = '';
  
  const to_str = function(str){
    if (typeof str == 'string') return str;
    
    if (str === null ) return 'null';
    if (str === undefined) return null;

    return str.toString();
  }

  tmpStr = to_str(str);


  //console.log('tmpStr=' + tmpStr);
  //console.log(`#1 options.addition=${options.addition}`)
  options.addition = to_str(options.addition);
  //console.log(`#2 options.addition=${options.addition}`)
  options.separator  = (options.separator)? (typeof options.separator == 'string') ? options.separator : options.separator.toString() : '+';
  options.additionSeparator   = (options.additionSeparator)? (typeof options.additionSeparator == 'string') ? options.additionSeparator : options.additionSeparator.toString() : '|';
  options.repeatTimes = (typeof options.repeatTimes == 'number') ? options.repeatTimes : 0;
  options.additionRepeatTimes = (typeof options.additionRepeatTimes == 'number') ? options.additionRepeatTimes : 0;
  
  let i = 1;

  do {
    res = res + tmpStr ;
    let tmpRes = '';

    if (options.addition){
      let j = 1
      do {
        tmpRes = tmpRes + options.addition + options.additionSeparator; 
        j ++;
      } while (j < options.additionRepeatTimes + 1);
  }

    res = res + tmpRes.substr( 0, tmpRes.lastIndexOf(options.additionSeparator)  ) + options.separator;
    i++;
    //console.log(`res#${index}: ${res}`);
    
  }  while (i < options.repeatTimes + 1);

  //console.log(options);
  
  return  res.substr( 0, res.lastIndexOf(options.separator)  );
 
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
  