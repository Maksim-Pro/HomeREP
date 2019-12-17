"use strict"

function checkNum(num) {
    //Создаём счётчик для проверки
    let check = 0;
    //Проверяем, что число не больше 1000
    if (num < 1000) {
        //Если это так, то проверяем следующее условие
        //Если наше число больше единицы
        if (num > 1) {
            //То с помощью цикла проверяем какое число
            //Начинаем с двух, при условии, что квадрат счётчика меньше, либо равен нашему числу
            for (let i = 2; i * i <= num; i++) {
                //Если число нацело делиться на счётчик
                if (num % i == 0) {
                    //Значит оно составное
                    console.log(`${num} - составное число`);
                    num = check; //Наша переменная равна счётчику для проверки
                }
                /*То есть: Если пользователь введёт число 15, наш счётчик, в любом случае, начнётся с 2
                2 * 2 = 4. Значит квадрат нашего счётчика меньше либо равен введённому числу, а значит условие выполняется и цикл продолжит работу внутри
                Условие не выполниться, т.к 15 нацело на 2 не делиться, а значит увеличиваем счётчик на 1 и продолжаем цикл
                3 * 3 = 15. Условие цикла верное, 15 меньше либо РАВЕН 15
                По условию в цикле 15 / 3 будет 5, а значит делиться на цело, соответсвенно - число составное */
            }
            //После главного условия, что введённое число больше 1
            //Проверяем что оно не равно счётчику
            if (num !== check) {
                //Если неравно, значит оно не делиться нацело на все числа счётчика в цикле
                //А значит что оно составное
                console.log(`${num} - простое число`);
            }
        }
    }
    //Если наше число больше 1000 - выводим соответствующее сообщение
    else {
        alert("Данные неверны");
    }
}
//Предлогаем пользователю ввести число
let numb = prompt();
//Вызываем нашу функцию с параметром выше созданной переменной
checkNum(numb);