"use strict"
// Task3**. Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
// n + nn + nnn, где n не перемножаются, а конкатенируются

let n = parseInt(prompt("Enter an integer positive number n from 1 to 9: "));
let nToStr = String(n);
let nn = nToStr + nToStr;
let nnn = nToStr + nToStr + nToStr;
let result = n + parseInt(nn) + parseInt(nnn);

console.log(result);
alert(result);

