const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    //calculate move
    let MoveNumber = (Math.pow(2,disksNumber)) - 1;
    //calculate time
    let MoveTime = Math.floor((MoveNumber * 3600) / turnsSpeed);
    
    let result= {turns: MoveNumber, seconds: MoveTime};
    return result
};
