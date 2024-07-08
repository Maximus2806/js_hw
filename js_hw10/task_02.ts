// 1. Напишите функцию, реализующую методы массивов map. Функции принимают на вход массив и колбэк. Используйте дженерик типы. 
//    Затипизировать надо саму функцию и коллбэк.
//    Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
//    где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
//    Пример:
//    map([1,2,3,4,5], callback) => [0,2,6,12,20]

type TCallback<I, R> = (item: I, index: number, arr: I[]) => R;

function mapArray<I,R>(arr: I[], callback: TCallback<I,R>):R[] {
    const result: R[] = [];
    arr.forEach((item, index) => result.push(callback(item, index, arr)));
    return result
};

const testArr = [1,2,3,4,5];
console.log (mapArray(testArr, (item, i, arr) => arr.indexOf(item)*item));

// 2. Напишите дженерик функцию generateObject, которая принимает массив пар [string, T] 
//   и возвращает объект, где каждая пара ключ-значение из массива превращается в соответствующую пару ключ-значение в объекте. 
//   В случае если ключи повторяются, значение в объекте должно быть последним из встречающихся.

//   Требования:
//     - Функция должна быть дженерик и работать с любыми типами значений.
//     - Функция должна корректно обрабатывать массив пар, включая случаи, когда ключи повторяются.

//   Пример:
//   const result = generateObject([
//   ["1", 1],
//   ["2", 2],
//   ["3", 3],
//   ["4", 4],
//   ["4", 5], // повторяющийся ключ, значит это значение должно быть в результирующем объекте
// ]);

// console.log(result); //{ '1': 1, '2': 2, '3': 3, '4': 5 }

function generateObject<T>(arrOfPairs: [string, T][]):{[key:string]: T} {
    const result: {[key:string]: T} = {};
    for(const [key, value] of arrOfPairs){
        result[key] = value;
    };
    return result
};


console.log(generateObject([
      ["1", {key: "value1"}],
      ["2", {key: "value2"}],
      ["3", {key: "value3"}],
      ["4", {key: "value4"}],
      ["4", {key: "value5"}],
      ["4", {key: "value6"}],
      ["5", {key: "value7"}],
    ]));