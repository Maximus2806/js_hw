export{}
// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).

function getFirstElement<T>(arr: T[]) {
    return arr[0]
  };

// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().

//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
  
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)

interface IPerson {
    name: string,
    surname: string,
    experienceYears: string,
    getDetails(): string,
};

abstract class Employee implements IPerson {
    protected salary: number = 0;
    constructor(public name: string, public surname: string, public experienceYears: string) {
        if (!+this.experienceYears || +this.experienceYears <= 0) {
            throw new Error("ExperienceYears must be a positive number string greater than 0")
        };
        this.salary = this.calculateSalary()
    };
    abstract getDetails(): string;    
    protected abstract calculateSalary(): number        
};

class Manager extends Employee {
    constructor(public name: string, public surname: string, public experienceYears: string, public prefered:'scrum'|'kanban'){
        super(name, surname, experienceYears)
    };
    protected calculateSalary(): number {
        return +this.experienceYears * 500;
    };    
    public getDetails(): string {
        return (`My name is ${this.name} ${this.surname}, I am project manager with ${this.experienceYears} years of experience in ${this.prefered} and ${this.salary}$ salary`)
    };
   
};
class Developer extends Employee {
    constructor(public name: string, public surname: string, public experienceYears: string, public programmingLanguage:'js'|'ts'|'java'|'python'){
        super(name, surname, experienceYears)
    }
    protected calculateSalary(): number {
        return +this.experienceYears * 1000;
    };
    public getDetails(): string {
        return (`My name is ${this.name} ${this.surname}, I am software developer with ${this.experienceYears} years of experience in ${this.programmingLanguage} and ${this.salary}$ salary`)
    };   
};

const pm = new Manager("Alex", "Ivanov", "5", "scrum");
console.log(pm.getDetails());
const dev = new Developer("Ivan", "Petrov", "3", "js");
console.log(dev.getDetails());

