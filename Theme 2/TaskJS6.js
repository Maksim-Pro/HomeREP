"use strict"
function checkNum(num){
    let check;
    if(num < 1000) {
        if(num > 1){
            for(let i = 2; i*i <= num; i++){
            if(num % i == 0){
                console.log(`${num} - составное число`);
                num = check;
            }
        }
           if(num !== check){
            console.log(`${num} - простое число`);
            }  
        }
    }
    else {
        alert("Данные неверны");
    }
}
let numb = prompt();
checkNum(numb);