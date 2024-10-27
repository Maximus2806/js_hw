// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds

const { rejects } = require("assert");
const { resolve } = require("path");

function delayTwoSeconds(callbakFunction) {
    setTimeout(callbakFunction, 2000)
};

delayTwoSeconds(() => console.log("Completed after 2 sec"));

// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль

const p1 = new Promise((resolve, reject) => {
    resolve(1)
});

p1.then((result) => console.log(`Promise resolved with ${result}`))

// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
//   Обработайте промис методом .catch и выведите результат его резолва в консоль

const p2 = new Promise((resolve, reject) => {
    reject("Promise failed")
});

p2.catch((err) => console.log(err))

// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.

function promiseNumber(num) {
    return new Promise((resolve,reject) => resolve(num))
};

promiseNumber(3).then((result) => console.log(result));

// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((result, index) => console.log(`Promise ${index + 1} result: ${result}`))
});

// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((results) => {
    results.forEach((result, index) => {
        console.log(`${index + 1}th promise status: ${result.status}`);
        if (result.status === "fulfilled"){
            console.log(`${index + 1}th promise value: ${result.value}`);
        } else {
            console.log(`${index + 1}th promise reason: ${result.reason}`);
        }
        
    })
});

// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

async function logPromiseResults1(arrOfPromises = []){
    try{
        const results = await Promise.all(arrOfPromises)
        results.forEach((result, index) => console.log(`Promise ${index + 1} result: ${result}`))
    } 
    catch(error) {
        console.log(error)
    }
    
}

logPromiseResults1([promiseNumber(1), promiseNumber(2), promiseNumber(3)])

//Для второго случая try catch как бы и не нужен

async function logPromiseResults2(arrOfPromises = []){
    const results = await Promise.allSettled(arrOfPromises)
    results.forEach((result, index) => {
        console.log(`${index + 1}th promise status: ${result.status}`);
        if (result.status === "fulfilled"){
            console.log(`${index + 1}th promise value: ${result.value}`);
        } else {
            console.log(`${index + 1}th promise reason: ${result.reason}`);
        }        
    })
}

logPromiseResults2([promiseNumber(1), promiseNumber(2), promiseNumber(3)])