// 1. Создайте функцию getEmployeeInfo()
// 2. В функции создайте массив имен сотрудников 5шт (Имена придумать самим)
// 3. В функции создайте массив зарплат сотрудников 5 шт(цифры придумать самим)
// 4. Функция должна принимать 1 аргумент - имя сотрудника
// 5. Функция должна возвращать новый массив, где первый элемент - имя сотрудника, второй - его зарплата
// 6. Для поиска ответа функции нужно найти индекс сотрудника в массиве имен. Зарплату взять с ТЕМ ЖЕ индексом что и имя
// 7. Для возврата из функции создайте массив, методом .push поместите в него имя и зарплату, и через return верните созданный массив
// 8. Если такое имя сотрудника в массиве не найдется - вернуть null

function getEmployeeInfo(name) {
    if(name!== undefined && name!== null && name.length && !+name){
        const names = ["Bill", "Alex", "Anna", "Jhonn", "Antony"];
    const salaries = [1500, 3000, 1200, 1700, 850];
    const index = names.indexOf(name);
    let resultArr = [];
    for (item of names) {
        if (item === name){
            resultArr.push(item);
            resultArr.push(salaries[index]);
        }
    }
    return index === -1 ? null: resultArr
    } else 
    {
        return "Invalid input";
    }
    
}

console.log(getEmployeeInfo("Bill"));