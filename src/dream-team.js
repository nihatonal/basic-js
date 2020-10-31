const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let item = [];
  let arr= [];
  let word;
  let result;
  if (Array.isArray(members)){
  	for( var i=0; i<members.length; i++ ){
      if(typeof members[i] !== "string"){
         members[i] = " "
      }else{
      	item = members[i].trim().toUpperCase().split("");
        arr.push(item[0]);
        word = arr.sort().join("")
      }
    }
  }else{ 
    return false
  }
  return word
};
