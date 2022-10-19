// let title = document.createElement('h1');
// title.innerText = 'hola mundo, desde JS'
// // console.log(title);


// //crear bottom
// let button = document.createElement('button');
// button.innerText = 'click'

// button.addEventListener('click',function name() {
//     // console.log('hola mundo');
//     title.innerText = 'texto actualizado con JS';
//     alert('se realizo un click');
// });

// document.body.append(title);
// document.body.append(button);


//objetos
// const user = {
//     name: 'jose',
//     age: 30
// };

// function printInfo (user) {
//     return '<h1>hola ' + user.name + '</h1>'
// };

// console.log(printInfo(user));
// document.body.innerHTML = printInfo(user);


//función anonima
// function start() {
//     return 'Starting...'
// };

// console.log(start());

// console.log(function start() {
//     return 'Starting...'
// }());

// console.log(function () {
//     return 'Starting...'
// }());

// let button = document.createElement('button');
// button.innerText = 'click me'

// button.addEventListener('click', function () {
//     alert('clicked')
// });

// document.body.append(button);



//maps (react)
// const names = ['ryan', 'joe', 'maria'];

// let newNames = names.map(function(name) {
//     return name
// });

// console.log(newNames);


//spread operator

// const user = {
//     name: 'ryan',
//     lastname: 'ray'

// }

// const address = {
//     street: 'main street 123',
//     city: 'Bogota'
// }

// const userInfo = {
//     ...user,
//     ...address
// };

// console.log(userInfo);



//Ecmascript module
//importar la funcion de JS 
// import { add } from "./add.js";

// console.log(add(10,20));


//optional chaining

// const person = {
//     name: 'ryan',
//     address: {
//         city: 'london'
//     }
// }

// console.log(person);



//async/await
//en react la informacino viene de un backend y se usa una peticion para usar esa info,

// let data = fetch ('https://jsonplaceholder.typicode.com/posts')
// .then(function () {
//     console.log('finalizó la carga');
// })
// //then es una función. Sig. que cuando acabe el fetch aplicará determinada logica


// console.log(data);
// //nos entrega una promesa

// console.log('linea 2');


// const ul = document.createElement('ul');

// fetch ('https://jsonplaceholder.typicode.com/posts')
// .then(function (response) {
//     return response.json()
// })
// .then(function (data) {
//     console.log(data);
//     data.forEach(function (post) {
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         ul.append(li);
//     });
//     document.body.append(ul);
// });

// console.log('linea 2');














