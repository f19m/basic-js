const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {

  if (!(Array.isArray(members))){
    return false;
   }

  members = members.filter(vl => (typeof(vl) == 'string') ? true : false);
  let res = members.reduce((prev, cur) => prev + cur.trim().substring(0,1).toUpperCase() , '').split('').sort().join('');
  
  return res?res:false;
};
