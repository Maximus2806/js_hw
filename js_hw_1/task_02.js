"use strict"
// Task2*. Решить квадратные уравнения. Переменные называть по правилам.
// Вывести в консоль ответы в виде "Ответ к уравнению 1: <корень>", "Ответ к уравнению 2: <корень> и <корень>"

// 1.  x2 - 6x + 9 = 0. - один корень
const a1 = 1;
const b1 = -6;
const c1 = 9;
const D1 = b1 ** 2 - 4 * a1 * c1;  //calculate discriminant
const x1_1 = (-b1 / 2 * a1 ); //only one root

// 2.  x2 - 4x - 5 = 0. - два корня
const a2 = 1;
const b2 = -4;
const c2 = -5;
const D2 = b2 ** 2 - 4 * a2 * c2;  //calculate discriminant
const x2_1 = ((-b2 + Math.sqrt(D2)) / 2 * a2 ); //root 1
const x2_2 = ((-b2 - D2 ** (1/2)) / 2 * a2 ); //root 2

console.log("Ответ к уравнению 1: <" + x1_1 + ">, " + "Ответ к уравнению 2: <" + x2_1 + "> и <" + x2_2 + ">");