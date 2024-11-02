// 1. Создайте интерфейс IVehicle:
//   Методы:
//     - getDetails(): string — возвращает информацию о транспортном средстве.
//     - start(): string — возвращает строку "The vehicle is starting".

// 2. Создайте абстрактный класс Vehicle, который имплементирует IVehicle:
//   Реализуйте конструктор с полями:
//     - make (строка)
//     - model (строка)
//   Добавьте методы:
//     - start, возвращающего строку: "The vehicle {make} {model} is starting.".
//     - Абстрактный метод getDetails, который нужно реализовать в классах-наследниках.

// 3. Создайте класс Car, который наследует Vehicle:
//     - Добавляет поле year (число).
//     - Реализует метода getDetails, возвращающего строку: "{make} {model}, {year}".
// 4. Создайте объект класса Car и проверьте работоспособность

interface IVeichle {
    getDetails(): string;
    start(): string
};

abstract class Vehicle implements IVeichle {
    constructor(public make: string, public model: string){}

    abstract getDetails(): string; 

    start(): string {
        return `The vehicle ${this.make} ${this.model} is starting.`;
    };
    
}

class Car extends Vehicle {
    constructor(public make: string, public model: string, public year: number) {
        super(make, model);        
    }
    getDetails(): string {
        return `${this.make} ${this.model}, ${this.year}`;
    }
}

const car1 = new Car("Lexus", "GX 460", 2022);
console.log (car1.start());
console.log(car1.getDetails());