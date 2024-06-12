// 1. На вход функции подаётся предложение, например “I am the best AQA ever!” Преобразуйте строку таким образом, 
//   чтобы вместо каждой буквы была цифра, показывающая сколько раз эта буква встречается в предложении. 
//   Пробелы и знаки препинания оставляем без изменения. Регистр не должен играть роли.

    function countLetterRepeating(str) {
    const arr = str.toLowerCase().trim().split('');    
    const resArr = arr.map((item) => {
        let count = 0;
        if (!/[a-z]/.test(item)) return item;
            for (i of arr) {
                if (i === item){
                    count ++
                }                
            }
            return count;           
    })
    return resArr.join(''); 
    }
   
console.log(countLetterRepeating("I am the best AQA ever!"))


// 2. У вас есть массив с ценами товаров в чеке. В консоль нужно вывести сумму всех цен и среднюю цену товара.
//   Итого: 8495 $, средняя цена товара 700 $ - пример сообщения в консоле.  
//   const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];
function sumAndAveragePrice(prices) {
    const sum = prices.reduce((result, price) => {
        return result + price;
    }, 0)
    return `Итого: ${sum} $, средняя цена товара ${sum / prices.length} $`;
}
console.log(sumAndAveragePrice(prices));

// 3. Напишите функцию, которая принимает на вход массив слов и возвращает отсортированный массив по по следующему критерию: количество гласных букв.
//   Массив должен быть отсортирован по возврастанию количества гласных букв в слове.

const arr = ['apple', 'banana', 'fig', 'honeydew', 'papaya', 'grape'];
function countVovels (word) {
    let count = 0;
    const vovels = "aeiouAEIOU";
    for (i of word) {
        if (vovels.includes(i)) count++;
    }
    return count;
}
function sortArray (arr) {
    return arr.sort((a, b) => countVovels(a) - countVovels(b))
}

console.log(sortArray(arr));

// 4. У вас есть массив со скобками, предположим [ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’], количество элементов и последовательность может быть разной.
//   Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).
//   Усложнение: в массиве могут быть вложены еще массивы на разной глубине. (ПОПРОБУЙТЕ МЕТОД .flat(), изучите как он работает с разными глубинами вложенности)
//   Вернуть нужно всё также есть ли у каждой скобочки соответствующая пара. 
//   Пример:
//   const arr = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]

const nestedPairs = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]];
// const pairs = nestedPairs.flat(Infinity);

const isPairComplete = (arrOfBraces) => {
    const flatArr = arrOfBraces.flat(Infinity);
    let countLeft = 0;
    let countRight = 0;
    flatArr.forEach(brace => {
        if (brace === '(') {
            countLeft ++;
        } else if (brace === ')') {
            countRight ++;
        } else throw new Error('Invalid array');    
    })
    return (countLeft === countRight);
}
console.log(isPairComplete(nestedPairs))