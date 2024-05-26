
// 1.
// Реализовать Task 1 через switch


const age = 'a';
const age_1 = 10;
const age_2 = 18;
const age_3 = 60;

switch (true){
        case (age < age_2): {
            console.log(`You don’t have access cause, your age is ${age}. It’s less then ${age_2}`)
            break;
        }
        case (age >= age_2 && age <= age_3): {
            console.log("Welcome  !");
            break;
        }
        case (age > age_3): {
            console.log("Keep calm and look Culture channel");
            break;
        }
        default: {
            console.log("Technical work")
        }
    }