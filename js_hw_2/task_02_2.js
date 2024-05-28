// 2. 
// Преобразовать написанный код в task 1 так, чтобы сначала проверялся тип данных. 
//   И если он не number - кидалась ошибка в консоль.
//   Проверить работу кода на следующих данных 17, 18, 61, "2", "aaa"
const age_1 = [17, 18, 61, "2", "aaa"];
const age_2 = 18;
const age_3 = 60;

function checkAge(age) {  
    if (typeof age !== "number"){
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

age_1.forEach(element => console.log(checkAge(element)));


