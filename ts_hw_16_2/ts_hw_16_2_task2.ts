// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object, U>(obj: T, value: U): keyof T | undefined{
    let result
    for (const key in obj) {
        if (obj[key] === value) {
            result = key
        }
    }
    return result
}

const person1 = { name: "Alice", age: 30, job: "Engineer" };

console.log(getKeyByValue(person1, "Alice"));
console.log(getKeyByValue(person1, 30))
console.log(getKeyByValue(person1, "Doctor"));