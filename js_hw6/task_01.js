// Task 1.
// Имеется массив объектов (ниже). Ваше задание:
const characters = [
    { 'name': 'Barney', 'age': 36 },
    { 'name': 'Fred', 'age': 40 },
    { 'name': 'Jack', 'age': 50 }
  ];
// 1. Используя Object.keys и метод forEach вывести в консоль ключи каждого объекта
characters.forEach((character, index) => {console.log(`${index+1} object keys: ${Object.keys(character)}`)});

// 2. Используя Object.values и метод forEach вывести в консоль значения каждого объекта

characters.forEach((character, index) => {console.log(`${index+1} object values: ${Object.values(character)}`)});

// 3. Перебрать форычем массив. На каждой итерации вывести пары ключ-значнение в виде `key = ${ket}, value = ${value}`.
//    Перебирать каждый объект циклом for..of вида for(const [key, value] of Object.entries)

characters.forEach((character) => {
    for (const [key, value] of Object.entries(character)) {
        console.log(`key = ${key}, value = ${value}`);
    }
});

// 4. Перебрать форычем массив. На каждой иерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`.
//    Перебирать каждый объект циклом for..in


characters.forEach((character) => {
    for (const key in character) {
        console.log(`key = ${key}, value = ${character[key]}`);        
    }
});

// 5. Создайте объект qa с полями name, age, salary и методом getInfo, который будет возвращать строку вида: 
//    `Hello, my name is ${name}, i'm ${age} and my salary is ${salary}`. Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.

const qa = {
    name: "Max",
    age: 45,
    salary: 3000,
    getInfo: function(){
        return `Hello, my name is ${this.name}, i'm ${this.age} and my salary is ${this.salary}`;
    }
};

console.log(qa.getInfo());








