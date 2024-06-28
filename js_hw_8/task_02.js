// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию и количество милисекунд.
//     Функция должна исполнить колбэк строго через переданное количество миллисекунд
//     Пример: delayTwoSeconds(() => console.log('hello'), 2000) // Через 2 секунды в консоли появится слово hello
   
function delayTwoSeconds(callback, delay) {
    setTimeout(callback, delay)
}

delayTwoSeconds(() => console.log('hello'), 2000);

// 2. Создайте два промиса:
//   - promise1 должен резолвать "After 3 seconds" через 3 секунды
//   - promise2 должен резолвать "After 5 seconds" через 5 секунд
//   Резолвните оба промиса параллельно используя Promise.All двумя способами:
//     1. Обработайте результат Promise.All в .then блоке. Выведите в консоль резолвы обоих промисов по очереди
//     2. Обработайте результат await Promise.All в асинхронной функции в try..catch блоке. 
//         Используйте деструктуризацию, чтобы создать переменные promise1Result и promise2Result с резолвами соответствующих промисов
//         Вывести в консоль результат обоих промисов по очереди

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("After 3 seconds"), 3000);    
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("After 5 seconds"), 5000)
});

Promise.all([promise1, promise2]).then((items) => {
    items.forEach((item) => console.log(item))
});

async function handlePromises ([p1, p2]) {    
    try {
        const [promise1Result, promise2Result] = await Promise.all([p1, p2]);
        console.log(promise1Result);
        console.log(promise2Result);
    }
    catch (error) {
        console.log(`Oops, look at this: ${error}`);
    }
};

handlePromises([promise1, promise2]);

// 3. Напишите функцию, которая возвращает Promise, который резолвается в сумму двух чисел. 
//   Функция должна принимать два аргумента (a и b) и возвращать Promise, который резолвает в a+b. 
//   Если какой-либо из аргументов не является числом, Promise должен быть rejected с сообщением об ошибке. 
//   Протестируйте свою функцию, вызвав ее с допустимыми и недопустимыми аргументами, 
//   и обработайте любые ошибки с помощью метода .catch(), а также в блоке try/catch

function sumNumbers1(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return Promise.resolve(a + b);
    } else {
        return Promise.reject('Input values must be numbers');
    }
    
}
   
sumNumbers1(2, 5)
.then(result => console.log(result))
.catch(result => console.log(result));
 
async function sumNumbers2(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error ("Input values must be numbers")            
        }
        return a + b;
    } catch (error) {
        return Promise.reject(error)
    }    
};

sumNumbers2(2, "8")
.then(result => console.log(result))
.catch(result => console.log(result));

// 4. С помощью fetch отправьте GET запрос на адрес "https://jsonplaceholder.typicode.com/todos". 
//     Преобразуйте респонс в объект (.json()), выведите в консоль все объекты из респонса, где userId === 1. Решить с помощью try/cath и then (обоими способами)

const url = "https://jsonplaceholder.typicode.com/todos";

// implementation 1

fetch(url)
    .then((response) => {
        if (response.status !== 200) {
            throw new Error(`An HTTP error occured: ${response.status}`);
        }
        return response.json()
    })
    .then((object) => {
        object.forEach((item) => {
            if (item.userId === 1) {
                console.log(item)
            }
        })
    })
    .catch((err) => console.error(err));

// implementation 2

async function logObjects(url) {
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(`An HTTP error occured: ${response.status}`);
        }
        const object = await response.json();
        object.forEach((item) => {
            if (item.userId === 1) {
                console.log(item)
            }
        });
    } catch (error) {
        console.log(error)
    }
};

logObjects(url);
