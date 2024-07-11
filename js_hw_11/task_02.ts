// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище.
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден
//   - getAll(), возвращает все объекты в хранилище

type TObj = {
    id: number
};

class MyStorage<T extends TObj>{
    private data: T[] = [];
    constructor(arr?: T[]){
        if (arr) {
            this.data.push(...arr)
        }
    };

    private getNewId():number { 
        let newId = 0;
        this.data.forEach((obj:T) => {
            if (newId < obj.id) newId = obj.id            
        });
        return newId + 1;
    };

    private searchIndex(id: number):number{
        return this.data.findIndex((item) => item.id === id)
    };
    
    add(obj: T): void;
    add(obj: Omit<T, "id">): void;
    add(obj: T | Omit<T, "id">){
        if(!("id" in obj)){
            const id = this.getNewId();
            const newObj = {...obj, id}
            this.data.push(newObj as T)
        } else {            
            this.data.push(obj)
        }
    };

    update(obj: Pick<T, "id"> & Partial<T>):void{
        const index = this.searchIndex(obj.id);
        if (index !== -1) {            
            const currentObj = this.data[index];
            const updatedObj = {...currentObj, ...obj};
            this.data.splice(index, 1, updatedObj);
        }
        
    };

    remove(id:number):void {
        const index = this.searchIndex(id);
        if (index !== -1) {
            this.data.splice(index, 1);
        }        
    };

    getById(id:number):T{
        const result = this.data.find((item) => item.id === id);
        if (result !== undefined){
            return result
        } else throw new Error (`Object with id = ${id} was not found`);        
    };

    getAll():T[]{
        return this.data
    }
};

const users = [
    { id: 1, name: "Max", email: "max_78@gmail.com" },
    { id: 2, name: "Sveta", email: "sv_7@gmail.com" }
];
const userForUpdate = { id: 1, name: "Max", surname: "Marozau", email: "max_78@gmail.com" }
const newUser = {name: "Ivan", surname: "Petrov", email: "iv@gmail.com", phone: "434335245" }
const testStorage = new MyStorage(users);
testStorage.add(newUser);
testStorage.update(userForUpdate);
testStorage.remove(3);
console.log(testStorage.getAll());