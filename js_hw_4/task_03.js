// 5*. Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
//   Если сумма получилась больше 9 - снова сложите цифры. И так пока, сумма не станет меньше либо равной 9. 
//   После окончания сложений возвращает полученное число. Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

function sumOfDigits(num) {
    if (!+num){
        return "The argument must be a number!";
    } else {
        const numStr = Math.abs(num).toString();
        const ArrOfDigits = numStr.split('');
        let sum = 0;
        for (digit of ArrOfDigits) {
           sum = sum + +digit;
        };
        if (sum <= 9) {
            return sum;
        } else {
            return sumOfDigits(sum);
        }    
    }
}
    
console.log(sumOfDigits("19"))

// 6*. Написать функцию, которая принимает на вход строку с текстом, и заменяет каждую пару стоящих подряд идентичных букв на одну следующую в алфавите, 
//     и так пока в тексте не останется двух одинаковых букв стоящих рядом (через пробел и другой знак препинания можно)
//     Пример: aabc => bbc => cc => d
function replaceAllDoublications(str) {
    if(typeof str !== 'string') throw new Error('Argument must be a string')
    str = str.toLocaleLowerCase();
    if (!checkDoublicationPresence(str)) return str
    const result = replaceDoublication(str);
    return checkDoublicationPresence(result) ? replaceAllDoublications(result) : result
    
};
function replaceDoublication(str){
    let resultStr = "";
    let targetChar;
        for (let i = 0; i < str.length -1; i++) {
            if (str[i] === str[i+1]) {
                str[i + 1] === 'z' ? targetChar = "a" : targetChar = String.fromCharCode(str.charCodeAt(i)+1)
                resultStr = resultStr + targetChar
            } else {
                resultStr = resultStr + str[i+1];
            }
        }
        return resultStr;
}
function checkDoublicationPresence(str){
    let hasDuplicates = false
    for (let i = 0; i < str.length -1; i++) {
        if (str[i] === str[i+1]) {
            hasDuplicates = true;
            break
        }
    }
    return hasDuplicates;
}

console.log(replaceAllDoublications("aAbc"));

