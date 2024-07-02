
// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 

interface ItEmployee {
    name: string,
    surname: string,
    readonly salary:  number,
    grade: TGrade,
    occupation: OCCUPATION,
    address?: IAddress,
    projectNames: string[]
};

interface IEmployee {
    name: string,
    surname: string,
    readonly salary: number,    
    address?: IAddress    
};

interface IAddress {
    country: string,
    street: string,
    house: string,
    flat: number
};

type TGrade = "junior" | "middle" | "senior" | "lead";

enum OCCUPATION {
    DEVELOPER = "Developer",
    QA = "QA engineer",
    AQA = "Automation qa engineer",
    PM = "Project manageer", 
    CTO = "Chief technology officer"
};


function getEmployeeInfo(employee: ItEmployee | IEmployee){
    
        console.log(`Name: ${employee.name}`);
        console.log(`Surname: ${employee.surname}`);
        console.log(`Salary: ${employee.salary}`);        
        if (ifAddressExist(employee)) {
            console.log(`Address: ${employee.address.country}, ${employee.address.street}, ${employee.address.house}, ${employee.address.flat}`);
        };
        if (isItEmployee(employee)) {
            console.log(`Grade: ${employee.grade}`);
            console.log(`Occupation: ${employee.occupation}`);
            console.log(`Project names: ${employee.projectNames.join(', ')}`)
        }
    };
  
function isItEmployee(obj: ItEmployee | IEmployee): obj is ItEmployee {
    return ('projectNames' in obj)
};
function ifAddressExist(obj: ItEmployee | IEmployee): obj is (IEmployee | ItEmployee) & { address: IAddress } {
    return ('address' in obj && obj.address !== undefined)
};

const employee1: IEmployee = {
    name: "Max",
    surname: "Marozau",
    salary: 5000,    
    address: {
        country: "Belarus",
        street: "Kosarau",
        house: "17",
        flat: 106
    }    
};

const employee2: ItEmployee = {
    name: "Alex",
    surname: "Ivanov",
    salary: 4000,
    address: {
        country: "Poland",
        street: "Main",
        house: "56",
        flat: 14
    },
    grade: "senior",
    occupation: OCCUPATION.DEVELOPER,
    projectNames: ["NFT Marketplace", "Business calendar"]
};

getEmployeeInfo(employee1);
getEmployeeInfo(employee2);

// 2. Создайте функцию, которая подсчитает, сколько в объекте значений каждого типа. 
//   Принимает на вход объект или массив таких же объектов, у которого ключ всегда string, а значение - string, number, boolean. 
//   Возвращает же - объект с ключами string, number, boolean и количеством таких значений в объекте или в сумме у всех объектов в массиве.
type TObj = {[key: string]: string | number | boolean} | {[key: string]: string | number | boolean}[];

interface IResult {
    string: number,
    number: number,
    boolean: number
};

const testObject: TObj = {
    key1: 'value1',
    key2: 123,
    key3: true,
  };

  const testArray: TObj = [
    {
      key1: 'value1',
      key2: 123,
      key3: true,
      key4: 435      
    },
    {
      key1: 'value2',
      key2: 456,
      key3: false,
    },
  ];

function countValueTypes(inputObj: TObj): IResult {
    let result : IResult = {
        string: 0,
        number: 0,
        boolean: 0
    };
    let typeOfValue: string;
    if (Array.isArray(inputObj)) {
        inputObj.forEach((obj) => {
            for (const key in obj){
                typeOfValue = typeof obj[key];
                result[typeOfValue as keyof IResult] ++
            }    
        })    
    } else {
        for (const key in inputObj){
            typeOfValue = typeof inputObj[key];
            result[typeOfValue as keyof IResult] ++
        }
    }   
    return result
};

console.log(countValueTypes(testArray));

// 3. Реализуйте функцию filter(), которая принимает на вход массив чисел и предикат (коллбэк), 
//     который будет использоваться для проверки каждого числа на соответствие требованиям. 
//     Помимо самой функции следует реализовать алиасы типов для функций и аттрибутов. 
//     Пример функции:
//     const numbers = [1, -5, 2, 3, 4, 133];
//     filter(numbers, (n) => n > 3); // [4, 133]
//     filter(numbers, (n) => n % 2 == 0); // [2, 4]
//     Параметры функции: Массив чисел и Анонимная функция, принимающая на вход число и возвращающая логическое значение.

type TPredicate = (num: number) => boolean;
type TArg = number[];
type TRes = number[] | string

function filter(arr: TArg, predicate: TPredicate): TRes {
    let result: number[] | string = [];
    for (const num of arr) {
        if(predicate(num)) {
            result.push(num)
        }
    }    
    return (result.length === 0) ? "No matching values found" : result
};

const numbers: TArg = [1, -5, 2, 4, 133, -43, 0, 679];
console.log(filter(numbers, (n) => n > 4));
console.log(filter(numbers, (n) => n === 5));
console.log(filter(numbers, (n) => n !== 4));
console.log(filter(numbers, (n) => n % 4 === 0));