// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 200. Если статус не 200 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

const url = "https://jsonplaceholder.typicode.com/todos"
async function createTodo(body){
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json();
        for (const key in body) {
            if (!(key in data)) {
                throw new Error (`Key ${key} is not in response object`)
            }
            if (body[key] !== data[key]) {
                throw new Error (`Incoming object value doesn't match received value`)
            }
        }              
        return data        
    } catch(err) {
        console.log(`Response failed with error: "${err.message}"`)
    } finally {
        console.log("Function proceeded")
    }    
}

const todo1 = {
    userId: 2,
    title: "Learn JS",
    completed: true
};


createTodo(todo1).then((data) => console.log(data))