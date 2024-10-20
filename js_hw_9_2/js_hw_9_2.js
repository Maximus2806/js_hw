// Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
// 1. Создать массив из ключей объекта character и вывести в консоль те, где 4 буквы //name, isQa
// 2. Создать массив из значений объекта character и вывести в консоль те, где тип данных строка //'Barney', 'male'
// 3. Создать массив из ключей и значений объекта character, перебрать массив циклом for. 
//    На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
// 4. Проверить, есть ли в объекте ключ salary, результат вывести в консоль 
//    (Реализовать 2мя способами: через оператор in и Object.hasOwn())

const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }


function keysOfFourLetters(obj = {}){
  const arrayOfKeys = Object.keys(character);
  return arrayOfKeys.filter(key => key.length === 4)
}

console.log(keysOfFourLetters(character));

function valuesStringOnly(obj = {}){
  const arrayOfValues = Object.values(character);
  return arrayOfValues.filter(value => typeof value === "string")
}


console.log(valuesStringOnly(character));


function logKeysAndValues(obj = {}){
  const arrOfKeysAndValues = Object.entries(character);
  for (const pair of arrOfKeysAndValues) {
    console.log(`Key: ${pair[0]}, Value: ${pair[1]}`)
  }
}

logKeysAndValues(character);

function isKeyInObj(obj = {}, key) {
  return key in obj
}

function objHasKey(obj = {}, key) {
  return Object.hasOwn(obj, key)
}

console.log(isKeyInObj(character, 'name'));
console.log(objHasKey(character, 'name'));


// 1. Напишите функцию addCharacter(character) позволяющую добавить новый объект в массив characters. 
//   Объект должен иметь поля name (string) и age (number)
// 2. Напишите функцию getCharacter(name), позволяющую получить объект персонажа по его имени// getCharacter('Fred') => { 'name': 'Fred', 'age': 40 }
// 3. Напишите функцию getCharactersByAge(minAge), возвращающую массив персонажей НЕ МЛАДШЕ minAge // getCharactersByAge(40) => [{ 'name': 'Fred', 'age': 40 },{ 'name': 'Jack', 'age': 50 }]
// 4. Напишите функцию updateCharacter(name, newCharacter). (Методом getCharacter(name) получаем ссыклку на нужного персонажа, а потом меняем ему данные)
// 5. Напишите функцию для удаления персонажа removeCharacter(name) (Реализовать через splice, индекс персонажа искать методом findInxex)

const characters = [
  { 'name': 'Barney', 'age': 36 },
  { 'name': 'Fred', 'age': 40 },
  { 'name': 'Jack', 'age': 50 }
];

function addCharacter(characters = [], character = {}){
  if(!('name' in character)) throw new Error ("Object should have 'name' property");
  if(!('age' in character)) throw new Error ("Object should have 'age' property");
  if(typeof character.name !== 'string') throw new Error ("Name should be a string value");
  if(typeof character.age !== 'number') throw new Error ("Age should be a number value");
  characters.push(character)
  return characters
}

addCharacter(characters, { name: 'Bill', age: 35 });
console.log(characters);

function getCharacter(arr = [], name){
  if (typeof name !== 'string') throw new Error ('Name should be a string value');  
  return arr.find(obj => obj.name.trim().toLowerCase() === name.trim().toLowerCase())??`Name ${name} not found`
}

console.log(getCharacter(characters, 'Bill'))
console.log(getCharacter(characters, 'Alice'))

function getCharactersByAge(arr = [], minAge){
  if (typeof minAge !== 'number') throw new Error ("Age must be a number value");
  const result = arr.filter(obj => obj.age >= minAge)
  return result.length !== 0 ? result : 'No result found'
}

console.log(getCharactersByAge(characters, 40));

function updateCharacter(arr = [], name, newCharacter){
  const character = getCharacter(arr, name);  
  if (typeof character === 'string') {
    throw new Error(character)
  }
  if (typeof newCharacter !== 'object' || newCharacter === null) {
    throw new Error('newCharacter should be a valid object');
  }
  if ('name' in newCharacter) character.name = newCharacter.name;
  if ('age' in newCharacter) character.age = newCharacter.age;    
}

updateCharacter(characters, "Bill", {name: "Vasily", age: 27});
console.log(characters);

function removeCharacter(arr = [], name){ 
  const index = arr.findIndex(character => character.name === name);
  if (index === -1) {
    throw new Error(`Character with name ${name} not found`)
  };   
  arr.splice(index,1);  
};

removeCharacter(characters, 'Fred');
console.log(characters);