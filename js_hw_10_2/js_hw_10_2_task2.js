// У вас есть массив чисел. 
// Напиши функцию countOccurrences, которая принимает массив чисел и возвращает объект с подсчётом каждого числа.

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];

// Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }

function countOccurrences(arr=[]) {
  const obj = {};
  arr.forEach(el => (el in obj) ? obj[el] ++ : obj[el] = 1)    
  return obj
}

console.log(countOccurrences(numbers));

function countOccurrences2(arr = []) {
    return arr.reduce((obj, el) => {
        (el in obj) ? obj[el] ++ : obj[el] = 1
        return obj
    },{})
}

console.log(countOccurrences2(numbers));
