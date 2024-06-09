// 1. У вас есть массив названий пицц вашего конкурента. Создайте функцию, которая будет принимать ваш набор названий пицц (массив) 
//   и возвращать только те, которых нет у конкурента (тоже массив). Если все ваши пиццы есть у конкурента - вернуть null
//   Пиццы конкурента:
//   const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  


const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
function checkCompetitorsPizzas(myPizzaArr) {
    const competitorPizzasToLower = competitorPizzas.map(word => word.toLowerCase());
    const uniquePizzas = [];
    for (pizza of myPizzaArr){
        if (competitorPizzasToLower.indexOf(pizza.toLowerCase()) === -1){
            uniquePizzas.push(pizza);
        }        
    }
    return uniquePizzas.length > 0 ? uniquePizzas : null;
}

const pizzaSet = ['Peperoni','4 cheeses', 'Cheif pizza'];

console.log(checkCompetitorsPizzas(pizzaSet));

// 2. Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра и выводит в консоль слово с наибольшим количеством букв. 
//   Если таких слов несколько - выводит их все.

function findLongest(sentence) {
    const wordsArr = sentence.split(' ');
    let longestWordLength = 0;
    let result = []
    for (let i = 0; i < wordsArr.length; i++) {
        if (wordsArr[i].length > longestWordLength){
            longestWordLength = wordsArr[i].length;
            result = [wordsArr[i]]
        } else if (wordsArr[i].length === longestWordLength){
            result.push(wordsArr[i])
        }
    }    
    return result;
};
    
console.log(findLongest("the once-common fallacy that girls just weren't any good at math. SameLength."));

// 3. Напишите функцию, которая принимает на вход массив чисел, убирает из него дубликаты и возвращает массив с только уникальными значениями.

function removeDupicates(arrOfNumbers){
    const uniqueNumbers = [];
    for (number of arrOfNumbers) {
        if (uniqueNumbers.indexOf(number) === -1) {
            uniqueNumbers.push(number);
        } 
    }
    return uniqueNumbers;   
}
console.log(removeDupicates([1,2,1,2,7]))

// 4. Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом

function checkPolindrom(word){
    let reversedWord = '';
    for (let i = word.length-1; i >= 0; i--) {
        reversedWord = reversedWord + word[i];
    }
    return reversedWord === word;
}
console.log(checkPolindrom("rotator"))

