// 1. Создайте цикл, который выведет в консоль цифры от 10 до 0

for (let number = 10; number >= 0; number--){
    console.log(number)
};

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
//   Пример в консоли:
//   :)
//   :):)
//   :):):)
//   :):):):)
//   :):):):):)
let smile = ":)";
for (let number = 0; number < 5; number++) {
    console.log(smile);
    smile = smile + ":)"
};

//   Для Оксаны и ее друзей: также реализовать циклом while
//   Рекоммендация: попробуйте метод .repeat()
const smile2 = ":)"
const number2 = 1
while (number2 <= 5){
    console.log(smile2.repeat(number2));
    number2++
}


