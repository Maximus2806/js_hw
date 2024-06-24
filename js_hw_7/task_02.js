//Copied from the previous task
class Animal {
    constructor(type, color, weight, height, placeOfOrigin) {
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    };
    getInfo() {
        return `Type: ${this.type} color: ${this.color} weight: ${this.weight} height: ${this.height} placeOfOrigin: ${this.placeOfOrigin}`
    };

    get color() {
            return this._color;
          };

    set color(newColor) {
        if (newColor !== 'Красный' && newColor !== 'Черный' && newColor !== 'Белый' && newColor !== 'Синий') throw new Error ('Invalid color');
        this._color = newColor;
    };      
};

class Snake extends Animal {
    #isPoisonous
    constructor (type, color, weight, height, placeOfOrigin, isPoisonous) {
        super (type, color, weight, height, placeOfOrigin);
        this.#isPoisonous = isPoisonous;
    };
    checkPoisonous(){
       if (!(typeof this.#isPoisonous === 'boolean')) throw new Error ('isPoisonous should be boolean value');
       return this.#isPoisonous;
    };
};

// Task 2.
// 1. Создайте класс Bird с приватным полем isFlying, отнаследовавшись от Animal

class Bird extends Animal {
    #isFlying;
    constructor(type, color, weight, height, placeOfOrigin, isFlying) {
        super(type, color, weight, height, placeOfOrigin);
        this.#isFlying = isFlying;
    }
};

// 2. Создайте класс CatLike с публичным полем isSafeToPet, отнаследовавшись от Animal

class CatLike extends Animal {    
    constructor (type, color, weight, height, placeOfOrigin, isSafeToPet) {
        super(type, color, weight, height, placeOfOrigin);
        this.isSafeToPet = isSafeToPet;
    }
};

// 3. Создайте класс Worker, реализующий следующий интерфейс (набор полей и методов):
//     class Worker
//       firstName
//       lastName
//       phone
//       getFullName()

class Worker {
    constructor (firstName, lastName, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    };
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
};

// 4. Создайте класс Zoo, реализующий следующий интерфейс:
//     class Zoo
//       address
//       title
//       ticket price
//       workers: []
//       animals: [],
// 5. Добавьте геттеры и сеттеры к полям address, title, ticket price
// 
// 6. Добавьте метод addWorker(worker), добавляющий работника в массив workers. 
//     На вход метод должен принимать объект класса Worker. 
//     Если объект не является инстансом класса Worker - выкинуть ошибку

// 7. Добавьте метод addAnimal(animal), добавляющий животное в массив animals.
//     На вход метод должен принимать объект класса Animal, как и любого из его наследников. 
//     Если объект не является инстансом класса Animal - выкинуть ошибку
//     ТАКЖЕ, если объект является инстансом класса Snake - выкинуть ошибку с тексом "There will be no snakes, mister Potter!"

// 8. Добавьте методы removeWorker() и removeAnimal() // Подумайте, как будем удалять, по какому полю будем выбирать:)

class Zoo {
    constructor (address, title, ticketPrice) {
        this.address = address;
        this.title = title;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    };
    get address() {
        return this._address;
    };
    set address(newAddress) {
        if (typeof newAddress !== 'string') throw new Error ('Address must be a string');
        this._address = newAddress;
    };
    addWorker(worker) {
        if (!worker instanceof Worker) throw new Error ('Worker must be an instance of Worker');
        this.workers.push(worker);
    };
    addAnimal(animal) {
        if (!animal instanceof Animal) throw new Error("Animal must be an instance either of Animal or its child");
        if (animal instanceof Snake) throw new Error("There will be no snakes, mister Potter!");
        this.animals.push(animal);
    }
    removeWorker(workerPhone) {        
        if (typeof (workerPhone) !== 'string') throw new Error ('Worker phone must be a string');        
        const targetWorker = this.workers.find((worker) => worker.phone === workerPhone);
        if (!targetWorker) throw new Error("No such worker");
        this.workers.splice(this.workers.indexOf(targetWorker), 1);
    };

    removeAnimal(animalType) {        
        if (typeof (animalType) !== 'string') throw new Error ('Animal type must be a string');        
        const targetAnimal = this.animals.find((animal) => animal.type === animalType);
        if (!targetAnimal) throw new Error("No such animal");
        this.animals.splice(this.animals.indexOf(targetAnimal), 1);
    };

};

const eagle = new Bird('Eagle', 'Черный', 35, 65, 'California', true)
const tiger = new Animal('Tiger', 'Красный', 35, 65, 'Zimbabwe')
const zoo1  = new Zoo("Kozlova", "Collins", 25);
const worker1  = new Worker("Vasia", "Pupkin", "+3752923455454");
const worker2  = new Worker("Alex", "Kort", "+3752945243554");
zoo1.addWorker(worker1);
zoo1.addWorker(worker2);
zoo1.addAnimal(eagle);
zoo1.addAnimal(tiger);
console.log(JSON.stringify(zoo1));
zoo1.removeWorker("+3752923455454");
zoo1.removeAnimal("Tiger");
console.log(JSON.stringify(zoo1));