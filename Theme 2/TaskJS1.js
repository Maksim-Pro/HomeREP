"use strict"

function checkInput(value) {
    //Если тип переданного аргумента равен string или же number, в зависимости от введённого типа
    if (typeof value === 'string' || typeof value === 'number') {
        //То мы просто возвращаем наш аргумент, заранее вычисляя его тип
        return typeof value;
    }
    //Если аргумент не число/строка
    else {
        //Выводим undefined
        return undefined;
    }
}
//Выводим в консоль функцию, указывая в параметрах переменную любого типа 
console.log(checkInput(15));   