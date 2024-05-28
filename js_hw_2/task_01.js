// 1. Создать переменную “age” и присвоить ей значение 10
const age_1 = 10;

//   2. Создать переменную “age_2” и присвоить ей значение 18
const age_2 = 18;

//   3. Создать переменную “age_3” и присвоить ей значение 60
const age_3 = 60;

//   4. Создать if в котором будите проверять значение переменной age

//     Если “age” < age_2, вывести в консоль “You don’t have access cause your age is ” + “age” + “ It’s less then ”

//     Если “age” >=  age_2 и “age” <  age_3, вывести в консоль “Welcome  !”

//     Если “age”  > age_3, вывести в консоль “Keep calm and look Culture channel”.

//     Иначе выводите “Technical work”.

function checkAge(age) {    
    if (age < age_2) {
        console.log(`You don’t have access cause, your age is ${age}. It’s less then ${age_2}`)
    } else if (age >= age_2 && age <= age_3) {
            console.log("Welcome  !");                          
    } else if (age > age_3) {
        console.log("Keep calm and look Culture channel")
    } else {
        console.log("Technical work")
    }
}

checkAge(age_1);