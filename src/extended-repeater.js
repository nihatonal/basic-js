const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  var repeatTimes = options.repeatTimes;
  var additionRepeatTimes = options.additionRepeatTimes;
  var addition = options.addition;
  var separator = options.separator;
  var additionSeparator = options.additionSeparator;
  var newStr;
  var newAddition;

  if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('addition') && options.hasOwnProperty('additionSeparator') && options.hasOwnProperty('additionRepeatTimes') && options.hasOwnProperty('separator')) {

    newAddition = str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition

    newStr = (newAddition + separator).repeat(repeatTimes - 1) + newAddition
    return newStr;

  } else if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('addition') && options.hasOwnProperty('additionRepeatTimes') && options.hasOwnProperty('separator')) {

    newAddition = (str + addition + separator).repeat(repeatTimes);
    return newAddition.slice(0, newAddition.length - separator.length);

  } else if (options.hasOwnProperty('repeatTimes') && options.hasOwnProperty('separator')) {

    newAddition = (str + separator).repeat(repeatTimes);
    return newAddition.slice(0, newAddition.length - separator.length);
  }else if (options.hasOwnProperty('repeatTimes')) {
			
      newStr = str+"+";
      newAddition = newStr.repeat(repeatTimes);
      return newAddition.slice(0,newAddition.length-1 );
  }
};
  