// 1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

//   Результат должен быть округлен до 1 знака после запятой методом .toFixed(), про который надо почитать самим ;)

const bytesConverter = (value) => {
    if (!+value || typeof(value) === "string"){
        return "Invalid input"
    } else {
        let i = 0
    while (value >= 1024){
        value = value / 1024
        i ++
    }
    let result;
    switch(i) {
        case 0: result = value + " bytes";
        break;    
        case 1: result = value.toFixed(1) + " Kb";
        break;
        case 2: result = value.toFixed(1) + " Mb";
        break;
        case 3: result = value.toFixed(1) + " Gb";
        break;
        case 4: result = value.toFixed(1) + " Tb";
        break;
    }
    return result
    }
    
        
    
}
console.log(bytesConverter(1048575))

// 2. Сделать из "*" в консоли равнобедренный треугольник и ромб

function triangleOfHeight(height){
    if (!+height || typeof(height) === "string" || height < 2){
        console.log("Invalid height value")
        return
    };
    let starNumber;
    let spaceNumber;
    for(let i = 0; i < height; i++) {
        starNumber = i *  2 + 1;
        spaceNumber = height - i - 1;
        console.log(" ".repeat(spaceNumber) + "*".repeat(starNumber))        
    }    
}
triangleOfHeight(2)

function rhombusOfHeight(halfOfHeight){
    if (!+halfOfHeight || typeof(halfOfHeight) === "string" || halfOfHeight < 2){
        console.log("Invalid halfOfHeight value");
        return
    };
    let starNumber;
    let spaceNumber;
    for(let i = 0; i < halfOfHeight; i++) {
        starNumber = i * 2 + 1;
        spaceNumber = halfOfHeight - i - 1;
        console.log(" ".repeat(spaceNumber) + "*".repeat(starNumber))        
    }
    for(let i = halfOfHeight-2; i >= 0; i--) {  
                
        starNumber = i * 2 + 1;
        spaceNumber = halfOfHeight - i - 1;
        console.log(" ".repeat(spaceNumber) + "*".repeat(starNumber))                
    }      
}

rhombusOfHeight(2)

// 3.  Вам нужно вывести в консоль числа от 1 до 100.
//     Если число делится без остатка на 3, то выведете в консоль “число - делится на 3”.
//     Если число делится на 5 без остатка, то то выведете в консоль “число - делится на 5”.
//     Если число делится и на 3 и на 5 без остатка, то то выведете в консоль “число - делится и на 3 на 5”.
//     Число 15 делится без остатка на 3 и на 5 -- пример сообщения в консоле.

for (let i = 1; i < 101; i++) {
    if (!(i % 3) && !(i % 5)) {
        console.log(`Число ${i} делится без остатка на 3 и на 5`);
    } else if (!(i % 3)){
        console.log(`Число ${i} делится без остатка на 3`)
    } else if (!(i % 5)){
        console.log(`Число ${i} делится без остатка на 5`)
    } else {
        console.log(`Число ${i} ни на что не делится`)
    }
}

// 4. Написать скрипт, который преобразует любое предложение в camelCase. Первое слово должно начинаться с буквы в нижнем регистре, 
//   у остальных -  верхнем. Пример: I am super engineer => iAmSuperEngineer

function toCamelCase(str) {
    let camelString = str[0].toLowerCase();
    for (let index = 1; index < str.length; index++) {
        if (str[index] === " "){
            camelString = camelString + str[index + 1].toUpperCase()
            index++
        } else {
            camelString = camelString + str[index]
        }        
    }
    return camelString;
}

console.log(toCamelCase("I am super engineer"))