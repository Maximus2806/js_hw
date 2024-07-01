// 1. На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
//   Вывести на экран: имя, e-mail, телефон и название компании пользователя.
//   Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
//   Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
//   Для реализации трех запросов воспользоваться Promise.all().
//   (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
//       Пример: 
//       1.  name: Leanne Graham
//           email: Sincere@april.biz
//           phone: 1-770-736-8031 x56442
//           company: Romaguera-Crona    
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)
//       __________________________________

//       2.  name: Ervin Howell   
//           email: Shanna@melissa.tv 
//           phone: 010-692-6593 x09125
//           company: Deckow-Crist
//           albums:
//             Album name 1 (10 photos)
//             Album name 2 (100 photos)

const url = "https://jsonplaceholder.typicode.com"

async function getAll(endpoint) {
    try {
        const response = await fetch(url + `/` + endpoint);
    if (!response.ok) {
        throw  new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.json();
    return data;
    } catch (error) {
        console.log(error)
    }
};

Promise.all([getAll("users"), getAll("albums"), getAll("photos")])
    .then((data) => {  
        const [users, albums, photos] = data;        
        users.forEach((user) => {            
            console.log(user.name);
            console.log(user.email);
            console.log(user.phone);
            console.log(user.company.name);
            console.log('albums:');
            albums.forEach((album) => {
                if (album.userId === user.id) {                    
                    let photoCounter = 0;
                    photos.forEach((photo) => {
                        if (photo.albumId === album.id) {
                            photoCounter++
                        }
                    })
                    console.log(`   Album: ${album.title} (${photoCounter}) photos` );
                }                
            })
        })        
    });

// 2. Создайте конвертер валют, используя Exchange Rates API. (зарегистрироваться и получить токен) Данные с сайта брать запросом используя fetch(). 
//   Пользователь должен иметь возможность передавать валюту и сумму денег в функцию и получать сумму денег в желаемой валюте на выходе. 
//   Например: currencyConvertor(USD, 40, EUR) ⇒ 35 EUR
//   Решить с помощью в 2 вариантах: с  .then() и с использованием async/await

const exchangeratesapiUrl = "http://api.exchangeratesapi.io/v1/latest";
const apiKey = "664e30342e23d73b24ad30db27955ca4"

//Geting all currencyrates

async function getCurrencyRates() {
    try {
        const response = await fetch(exchangeratesapiUrl + "?access_key=" + apiKey);
    if (!response.ok) {
        throw  new Error(`HTTP error! Status: ${response.status}`)
    };    
    return await response.json();
    } catch (error) {
        console.log(error)
    }
};

//Calculating results

function currencyConvertor(userCurrency, amount, targetCurrency) {    
    getCurrencyRates()
        .then((data) => {
            if (!data) {
                throw new Error("Failed to fetch currency rates")
            };           
            const userCurrencyRate = data.rates[userCurrency];            
            const targetCurrencyRate = data.rates[targetCurrency];
            if (!userCurrencyRate || !targetCurrencyRate) {
                throw new Error("Invalid currency code")
            };
            if (typeof amount !== 'number'){
                throw new Error("Amount must be a number")
            };
            const result = amount * targetCurrencyRate / userCurrencyRate;
            console.log(`You will receive ${result} ${targetCurrency}`)
        })
        .catch((error) => console.log(error.message))               
};


currencyConvertor("USD", 2, "AED");

// Implementation withou async function

function getRates() {
    return fetch(exchangeratesapiUrl + "?access_key=" + apiKey)
    .then((response) => {
        if (response.status !== 200) {
            throw new Error(`An HTTP error occured: ${response.status}`);
        }
        return response.json()
    })   
    .catch((error) => {
        console.log(error.message)
    })
};

function currencyConvertor2(userCurrency, amount, targetCurrency) {
    getRates()
        .then((object) => {
            if (!object) {
                throw new Error("Failed to fetch currency rates")
            }
            const userCurrencyRate = object.rates[userCurrency];
            const targetCurrencyRate = object.rates[targetCurrency];
            if (!userCurrencyRate || !targetCurrencyRate) {
                throw new Error("Invalid currency code")
            }
            if (typeof amount !== "number") {
                throw new Error("Amount must be a number")
            }
            const result = amount * targetCurrencyRate / userCurrencyRate;
            console.log (`You will receive ${result} ${targetCurrency}`)
        })
        .catch((error) => {
            console.log(error.message)
        })
};

currencyConvertor2("SAR", 500, "JOD");