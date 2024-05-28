// 3.
// Преобразовать Task 2 - 1 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
//   преобразовываясь в number


const age_1 = [17, 18, 61, "2", "aaa","", null];
const age_2 = 18;
const age_3 = 60;

function checkAge(age) { 
    if (!(+age)){
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