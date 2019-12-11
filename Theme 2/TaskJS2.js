"use strict"
function massRun(arr) {
    let i;
    for(i = 0; i < arr.length; i++){
        console.log(i + ': ' + arr[i]);
        console.log(arr.length);
    }
}
let mass = [1, 2, 3, 4, 0, 6, 7, 8];
massRun(mass);