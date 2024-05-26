// Преобразовать Task 2* таким образом, чтобы age принимался через prompt в привязанной вёрстке, а результат выводился в alert
let age = prompt("Enter your age: ");

const age_2 = 18;
const age_3 = 60;

function checkAge(age) {   
    if (!+(age)){
        return "Your input cannot be proceeded cause it's not a number"
    }  else {
        if (age < age_2) {
            return `You don’t have access cause, your age is ${age}. It’s less then ${age_2}`
        } else if (age >= age_2 && age <= age_3) {
            return "Welcome  !";                          
        } else if (age > age_3) {
            return "Keep calm and look Culture channel"
        } else {
            return "Technical work" //will never be executed cause type is validated before
        }
    
    }
};
alert(checkAge(age))

