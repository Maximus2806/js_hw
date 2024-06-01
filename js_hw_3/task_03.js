// 1*. Создать программу, которая будет принимать на вход СЛОВО (создать переменную со словом), 
//   и выводить в консоль количество гласных и согласных букв в этом слове. 
//   Ответ должен выводиться шаблонным литералом вида word contains x vowels and y consonants

function countLetters(str){
    if(str !== undefined && str !== null && str.length > 0){
        let word = str.toLowerCase();
        let vovels = "aeiou";
        let consonants = "bcdfghjklmnpqrstvwxz";
        let vCount = 0;
        let cCount = 0;
        for (letter of word){
            if (vovels.includes(letter)){
                vCount++;
            } else if (consonants.includes(letter)){ 
            cCount++;
            } else {
            return `The word must not contain ${letter === " "?"spaces":letter}`;
            }
        }
        return `The word contains ${vCount} vowels and ${cCount} consonants`
    } else { 
        return 'Invalid input'
    }
    
}
console.log(countLetters("Barbitura"))
// 2**. Написать программу, которая видоизменяет принимаемое слово (переменная со словом) 
//   шифром ЦЕЗАРЯ (посмотреть в википедии) со сдвигом на 1 в любую из сторон. 
//   Направление шифрования задается переменной offset, которая может быть +1 и -1.
//   Например let str = 'AbC'; let offset = -1, result = 'ZaB';
//   Например let str = 'ZzZ'; let offset = 1, result = 'AaA';

function encryptCezar(str, offset){
    if(str!== undefined && str!== null && str.length > 0 && (offset === -1 || offset === 1)){
        let alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let alphabetUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encryptedStr = '';
        for (char of str){
            let index = alphabet.indexOf(char.toLowerCase());
            let encryptedIndex = (index + offset >= 0) ? (index + offset)%26 : 25;
            encryptedStr += char === char.toUpperCase()?alphabetUp[encryptedIndex]:alphabet[encryptedIndex];
        }
        return encryptedStr;
} else {
    return 'Invalid input';
}
}
console.log(encryptCezar("AbC",-1))
