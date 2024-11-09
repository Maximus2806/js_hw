// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим как минимум поле { id: number }.
// Класс должен служить для хранения объектов типа T в приватном массиве.

// Подсказки:
//   - Используйте ограничение типа: T extends { id: number }, чтобы убедиться, что T всегда имеет поле id.
//   - Для метода add используйте утилитарный тип Omit<T, 'id'>, чтобы разрешить добавление объектов без поля id.
//   - Для метода update используйте Partial<T> и добавьте ограничение, чтобы всегда было поле id.

// Реализуйте в классе следующие методы:

//  - Конструктор должен принимать необязательный массив объектов типа T. Если массив передан, его элементы добавляются в хранилище.

//  - Метод add принимает либо объект типа T, либо объект типа Omit<T, 'id'>.
//    Если объект без id, сгенерируйте уникальный id (например, с использованием счетчика или функции Date.now()).
//    Подсказка: Используйте утилитарный тип Omit<T, 'id'> для указания типов объектов без поля id.

//  - Метод update принимает объект с обязательным полем id и любым набором остальных ключей из T (используйте Partial<T>).
//    Найдите объект с указанным id и обновите его соответствующими полями.

//  - Метод remove принимает id и удаляет объект из массива.

//  - Метод getById принимает id и возвращает объект с этим id, если найден, или null, если нет.

//  - Метод getAll возвращает все объекты в хранилище.

//   Пример использования:
//     // Подсказка: используйте утилитарные типы Omit<T, 'id'> и Partial<T>
//     type User = { id: number; name: string; age: number };

//     const storage = new Storage<User>();

//     // Добавление объектов
//     storage.add({ id: 1, name: 'Anatoly', age: 33 }); // Объект с id
//     storage.add({ name: 'Elena', age: 25 }); // Объект без id, id сгенерируется автоматически

//     // Обновление объектов
//     storage.update({ id: 1, name: 'Egor' }); // Обновление имени пользователя с id 1
//     storage.update({ id: 2, name: 'Tatiana', age: 33 }); // Обновление имени и возраста пользователя с id 2

//     // Получение объектов
//     console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
//     console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]

//     // Удаление объектов
//     storage.remove(2);

//     console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]

type WithoutId<T> = Omit<T, 'id'>;
class Mystorage<T extends { id: number }> {
  private storage: T[] = [];
  constructor(arr?: T[]) {
    if (arr) this.storage = [...arr];
  }
  private generateId(): number {
    const id = Date.now();
    return id;
  }

  add(obj: T | WithoutId<T>): void {
    const newObj: T = 'id' in obj ? obj : ({ id: this.generateId(), ...obj } as T);
    this.storage.push(newObj);
  }

  private findIndexById(id: number): number {
    return this.storage.findIndex((item) => id === item.id);
  }

  update(obj: Partial<T> & Pick<T, 'id'>): void {
    const index = this.findIndexById(obj.id);
    if (index === -1) throw new Error(`Object with id ${obj.id} was not found`);
    this.storage[index] = {...this.storage[index], ...obj};
  }

  remove(id: number): void {
    const index = this.findIndexById(id);
    if (index === -1) throw new Error(`Object with id ${id} was not found`);
    this.storage.splice(index, 1);
  }

  getById(id: number): T | null {
    const index = this.findIndexById(id);
    return index !== -1 ? this.storage[index] : null     
  }

  getAll(): T[] {
    return this.storage;
  }
}

type TestUser = { id: number; name: string; age: number };


const userStorage = new Mystorage<TestUser>();


userStorage.add({ id: 1, name: "Anatoly", age: 33 }); 
userStorage.add({ name: "Elena", age: 25 });          

console.log("All users:", userStorage.getAll());


console.log("User with id 1:", userStorage.getById(1));


userStorage.update({ id: 1, name: "Egor" });           
userStorage.update({ id: 1, age: 34 });                

console.log("Updated user with id 1:", userStorage.getById(1));


userStorage.remove(1);
console.log("All users after removal:", userStorage.getAll());


try {
    userStorage.update({ id: 3, name: "Nonexistent" });
} catch (error) {
    console.log((error as Error).message);
}


try {
    userStorage.remove(3);
} catch (error) {
    console.log((error as Error).message);
}
