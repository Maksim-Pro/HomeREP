"use strict"
function checkArray(arr, chet, unchet, Zero){
    //Счётчик для просмотра всех элементов массива
    let i;
    //Счётчики
    chet = 0, unchet = 0, Zero = 0;
    for(i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number' || typeof arr[i] === 'string'){
            if(arr[i] % 2 == 0 && arr[i] != 0){
                chet++;
            }
            if(arr[i] == 0){
                Zero++;
            }
            if(arr[i] % 2 != 0){
                unchet++;
            }
        }
    }
    return {
        chet, unchet, Zero
    }
}
//Massiv
let mass = [0, 2, null, 44, 0, 333]; 
console.log(mass);
let ch = 0, unch = 0, zero = 0;
checkArray(mass, ch, unch, zero);
console.log(checkArray(mass, ch, unch, zero));