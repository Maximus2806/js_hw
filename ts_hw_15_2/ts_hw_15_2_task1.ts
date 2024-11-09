// 1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
//     function wrapInArray<T> {
//       // ваш код здесь
//     }

//     const numberArray = wrapInArray(5); // [5]
//     const stringArray = wrapInArray('Hello'); // ['Hello']

function wrapInArray<T>(value:T):T[]{    
    return [value]
}
const numberArray = wrapInArray(true);
const stringArray = wrapInArray('Hello');
console.log(numberArray);
console.log(stringArray);

// 2. Создайте дженерик функцию getLastItem, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).

//     function getLastItem<T> {
//       // ваш код здесь
//     }

//     console.log(getLastItem([1, 2, 3, 4])); // 4
//     console.log(getLastItem(['a', 'b', 'c'])); // 'c'

function getLastItem<T>(arr:T[]):T{
    return arr[arr.length - 1]    
}
console.log(getLastItem([1, 2, 3, 4]));
console.log(getLastItem(['a', 'b', 'c']));

// 3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U. 
//    Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.

    interface IPair<T, U> {
      first: T,
      second: U
    }

    function describePair<T, U> (obj:IPair<T, U>):string{
      return `${obj.first} and ${obj.second}`
    }

    console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"
