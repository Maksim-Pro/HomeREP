"use strict"
function checkInput(value) {
    if(typeof value === 'string' || typeof value === 'number'){
        return typeof value;
    }
    else {
        return undefined;
    }
}
console.log(checkInput(15));   