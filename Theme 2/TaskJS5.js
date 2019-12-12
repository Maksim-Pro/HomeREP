"use strict"
function maxValue(arr){
    let i;
    let max = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let mass = [12, 42, 13, 0, 7]; //42
console.log(mass);
console.log(maxValue(mass));