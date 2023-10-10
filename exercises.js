//Сделайте промис, внутри которого будет задержка в 5 секунд, после которой промис должен выполнится, своим результатом вернув какой-нибудь текст. Выведите этот текст на экран.

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Code worked succesfully'), 5000)
// });
// promise.then(
//     result => console.log(result)
// )

//Сделайте асинхронный код, который будет генерировать случайные числа от 0 до 5. Оберните все это в промис. Пусть промис своим возвращает результат деления единицы на сгенерированное число. Пусть промис выполнится с ошибкой, если произошло деление на ноль, и с успехом во всех остальных случаях.

//асинхронный код

const fs = require('fs')
// fs.writeFile('promise.txt', `${Math.floor(Math.random() * 6)}`, (err) => {
//     if (err) {
//         console.log("Couldn't write random numbers");
//     };
// })

//промис 
// let random = `${Math.floor(Math.random() * 6)}`
// let promise = new Promise((resolve, reject) => {
//     fs.writeFile('promise.txt', random, (err) => {
//         if (random != 0) {
//             resolve(1 / random);
//         }
//         else {
//             reject(new Error ("Couldn't divide"));
//         };
//     });
// });

// promise.then(

//     res => console.log(res),

//     err => console.log(err.message)
// )

//Переделайте следующий код в соответствии с изученным:

// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		let isError = false;

// 		if (!isError) {
// 			resolve('success');
// 		} else {
// 			reject('error');
// 		}
// 	}, 3000);
// });

// let promise = new Promise(function(resolve, reject) {
//     	setTimeout(()  => {
//     		let isError = false;

//     		if (!isError) {
//     			resolve('success');
//     		} else {
//     			throw new Error('error');
//     		}
//     	}, 3000);
//     });

//Перепишите следующий код через метод catch:

// let promise = new Promise(function(resolve, reject) {
// 	setTimeout(function() {
// 		let isError = false;
		
// 		if (!isError) {
// 			resolve('success');
// 		} else {
// 			reject(new Error('error'));
// 		}
// 	}, 3000);
// });
// promise.then(
// 	res => console.log(res),
// 	err => console.log(err.message);
// );

// метод catch

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let isError = false;

//         if (!isError) {
//             resolve('success');
//         } else {
//             reject(new Error('error'));
//         }
//     }, 3000);
// });

// promise.then(
//     res => console.log(res),
// )
// promise.catch(
//     err => console.log(err.message)
// )