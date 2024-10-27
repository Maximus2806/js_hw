// На сайте JSONPlaceholder - Free Fake REST API  с помощью функции fetch получить список пользователей. 
// Вывести на экран: имя, e-mail, телефон и название компании пользователя.
// Отдельными запросами получить список альбомов пользователя и список фотографий в альбомах. 
// Дополнительно вывести список альбомов у пользователя с указанием количества в них фотографий. 
// Для реализации трех запросов воспользоваться Promise.all().
// (Принадлежность альбомов пользователем связано полем userId, принадлежность фотографий к альбомам сваязано полем albumId). 
// Пример: 
// 1.  name: Leanne Graham
//     email: Sincere@april.biz
//     phone: 1-770-736-8031 x56442
//     company: Romaguera-Crona    
//     albums:
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)
// __________________________________

// 2.  name: Ervin Howell   
//     email: Shanna@melissa.tv 
//     phone: 010-692-6593 x09125
//     company: Deckow-Crist
//     albums:
//       Album name 1 (10 photos)
//       Album name 2 (100 photos)

async function getData(endpoint) {
    const url = 'https://jsonplaceholder.typicode.com'
    try {
        const response = await fetch(url + '/' + endpoint)
    if (!response.ok) {
      throw new Error(response.statusText, {
        cause: response.status,
      });
    }
        const data = await response.json();
        return data;   
    } catch(err) {
    console.log(
      `Response failed with error: "${err.message}" and status code: "${err.cause}"`,
    );
    }
};

async function logData(data = []) {
    const [users, albums, photos] = await Promise.all(data);    
    const countPhotos = photos.reduce((counter, photo) => {
        if (!counter[photo.albumId]) {
            counter[photo.albumId] = 1
        } else counter[photo.albumId] += 1
        return counter
    }, {})
    const result = users.reduce((acc, user) => {
        const { name, email, phone, company } = user;        
        const userAlbums = albums
        .filter(album => user.id === album.userId)
        .map(album => ({
            title: album.title,
            numberOfPhoto: countPhotos[album.id]
        }));        
        acc[user.id] = {
            name,
            email,
            phone,
            company: company.name,
            albums: userAlbums
        }
        return acc
    }, {})    
    return result   
}

const data1 = 'users'
const data2 = 'albums'
const data3 = 'photos'
const data = [getData(data1), getData(data2), getData(data3)]

const usersWithTheirAlbums = logData(data);
usersWithTheirAlbums.then(data => console.log(data))

