// Теперь, вместо того чтобы указывать профессию в объекте класса Employee, 
// создайте подклассы для разных типов сотрудников — Developer, Manager, и Designer, — которые будут наследовать класс Employee. 
// В каждом из подклассов добавьте специфические поля и методы, уникальные для этих профессий. 
// Также реализуйте методы в классе Company, позволяющие работать с разными типами сотрудников.

// 1. Создайте базовый класс Employee:
//     Поля: firstName, lastName, приватное поле salary.
//     Геттеры и сеттеры для всех полей с валидацией, аналогично Task 1 и Task 2.
//     Метод getFullName(), возвращающий полное имя сотрудника.

// 2. Создайте подклассы Developer, Manager, и Designer: Каждый из этих подклассов будет наследовать от класса Employee 
//    и добавлять свои специфические поля.

//   Подкласс Developer:
//     Поле: programmingLanguages — массив языков программирования, которыми владеет разработчик.
//     Метод addProgrammingLanguage(language: string), который добавляет новый язык программирования в массив.
//   Подкласс Manager:
//     Поле: teamSize — количество людей в команде менеджера.
//     Метод increaseTeamSize() — увеличивает количество людей в команде.
//   Подкласс Designer:
//     Поле: designTools — массив инструментов для дизайна, которыми владеет дизайнер.
//     Метод addDesignTool(tool: string) — добавляет новый инструмент в арсенал дизайнера.

// 3. Добавьте метод getEmployeesByProfession(profession: string) возвращающий массив всех сотрудников переданной профессии
//       getEmployeesByProfession("Developer"), возвращающий массив всех разработчиков в компании.
//       getEmployeesByProfession("Manager"), возвращающий массив всех менеджеров.
//       getEmployeesByProfession("Designer"), возвращающий массив всех дизайнеров.
// 4. Добавьте валидацию в метод addEmployee класса Company, которая будет проверять имя+фамилию нового сотрудника на уникальность.
//    Добавлять сотрудника с таким же именем+фамилией как у уже имеющегося - нельзя.
// 5. Протестируйте функционал:
//     Создайте несколько объектов Developer, Manager, и Designer.
//     Добавьте их в компанию с помощью метода addEmployee().
//     Протестируйте добавление сотрудников с не уникальным именем и фамилией
//     Протестируйте метод getEmployeesByProfession с существующими и не существующими профессиями.

class Employee {
    #salary;
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;        
        this.#salary = salary
    }
    get firstName() {
        return this._firstName
    }
    set firstName(newFirstName){
        if (typeof newFirstName !== 'string') {
            throw new Error("First name must be a string");
        }
        if (newFirstName.length < 2) {
            throw new Error("First name must be at least 2 characters long");
        }
        if (newFirstName.length > 50) {
            throw new Error("First name must be no longer than 50 characters");
        }
        if (!/^[A-Za-z]+$/.test(newFirstName)) {
            throw new Error("First name must contain only Latin letters");
        }
        this._firstName = newFirstName
    }

    get lastName() {
        return this._lastName
    }

    set lastName(newLastName){
        if (typeof newLastName !== 'string') {
            throw new Error("Last name must be a string");
        }
        if (newLastName.length < 2) {
            throw new Error("Last name must be at least 2 characters long");
        }
        if (newLastName.length > 50) {
            throw new Error("Last name must be no longer than 50 characters");
        }
        if (!/^[A-Za-z]+$/.test(newLastName)) {
            throw new Error("Last name must contain only Latin letters");
        }
        this._lastName = newLastName
    }    
    
    get salary(){
        return this.#salary
    }

    set salary(newSalary) {        
        if ((typeof newSalary !== 'number')){
            throw new Error ('Salary must be a number')
        }
        if (newSalary < 0) {
            throw new Error ('Salary must be a positive number')
        }
        if (newSalary > 10000) {
            throw new Error ('Salary must not be greater than 10000')
        }
        this.#salary = newSalary
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`
    }

}

class Developer extends Employee {
    constructor (firstName, lastName, salary, programmingLanguages = []) {
        super(firstName, lastName, salary);
        this.programmingLanguages = programmingLanguages
    }

    addProgrammingLanguage(language = '') {
        if (typeof language !== 'string') throw new Error ("Programming language must be a string")
        this.programmingLanguages.push(language)
    } 
}

class Manager extends Employee {    
    constructor (firstName, lastName, salary, teamSize = 0) {
        super(firstName, lastName, salary);
        this.teamSize = teamSize
    }

    increaseTeamSize (amount) {
        return this.teamSize + amount
    }
}

class Designer extends Employee {
    constructor (firstName, lastName, salary, designTools = []) {
        super(firstName, lastName, salary);
        this.designTools = designTools
    }

    addDesignTool (tool) {
        if (typeof tool !== 'string') throw new Error ("Design tool must be a string")
        this.designTools.push(tool)
    }
}

class Company {
    #employees = [];
    constructor(title, phone, address){
        this._title = title;
        this._phone = phone;
        this._address = address
    }

    get title(){
        return this._title
    }

    get phone(){
        return this._phone
    }

    get address(){
        return this._address
    }

    addEmployee(employee) {
        if (!(employee instanceof Employee)) {
            throw new Error('Employee must be an instance of the Employee class')
        }
        if (this.#employees.find(empl => empl.getFullName().trim().toLowerCase() === employee.getFullName().trim().toLowerCase())) {
            throw new Error('Employee name must be unique')
        }
        this.#employees.push(employee)
    }

    getEmployees() {
        return this.#employees
    }

    getInfo() {
        return `Компания ${this._title}\nАдрес ${this._address}\nКоличество сотрудников ${this.#employees.length}`
    }

    findEmployeeByName(firstName = ''){
        const output = this.#employees.find(employee => employee.firstName === firstName);
        if (!output) return 'Such an employee not found';
        return output
    }

    removeEmployee(firstName){
        const index = this.#getEmployeeIndex(firstName);
        if (index === -1) {
            console.log ('Such an employee not found');
            return;
        }
        this.#employees.splice(index, 1)
    }

    #getEmployeeIndex(firstName){
        return this.#employees.findIndex(employee => employee.firstName === firstName)
    }

    getTotalSalary() {
        return this.#employees.reduce((total, employee) => total + employee.salary, 0)
    }

    getEmployeesByProfession(profession = '') {
        const validProfessions = [Developer, Manager, Designer];
        const requestedClass = validProfessions.find(cl => cl.name === profession);
        if (!requestedClass) {
            throw new Error("No such profession");
        } 
        return this.#employees.filter(employee => employee instanceof requestedClass)
    }
}

const emp1 = new Developer("Vasia", "Fortochkin", 3000, "TS");
const emp2 = new Developer("Bill", "Gates", 4000, "Python");
const emp3 = new Manager("Antonio", "Fernandes", 3500, 5);
const emp4 = new Designer("Tommy", "Emmanuel", 4500, ["Figma", "3Ds max"]);
const emp5 = new Designer("Ivan", "Ivanov", 5000, ["Figma"]);

const emp6 = new Employee("Vasia", "Fortochkin", 2000, "#C")

const company1 = new Company("Tech Innovations", "31-201", "Bratyslawska 2");
const company2 = new Company("Creative Solutions", "31-205", "Dluga 25");


try {
company1.addEmployee(emp1);
company1.addEmployee(emp2);
company1.addEmployee(emp3);
company1.addEmployee(emp4);
company1.addEmployee(emp5);

company1.addEmployee(emp6);
} catch (error) {
    console.log(error.message);
}

console.log(company1.getInfo());
console.log(company1.getEmployees());

const foundEmployee = company1.findEmployeeByName("Tommy");
console.log(foundEmployee.getFullName());

const notFoundEmployee = company1.findEmployeeByName("Nonexistent");
console.log(notFoundEmployee);

console.log(company1.getEmployeesByProfession('Designer'))

try {
    company2.addEmployee(emp1);
    console.log(company2.getInfo());
    company2.addEmployee(emp6)
} catch (error) {
    console.log(error.message)
}
