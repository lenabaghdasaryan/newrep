//Дан файл с числом. Прочитайте этот файл и выведите в консоль квадрат этого числа.
const fs = require('fs')
// fs.readFile('async.txt', 'utf-8', function (err, data) {
//     let newData = Number(data)
//     console.log(Math.pow(newData, 2))
//})
// Попробуйте прочитать несуществующий файл. Убедитесь, что при этом произойдет исключительная ситуация. Допишите ваш код так, чтобы он обрабатывал эту ситуацию.
// fs.readFile('readme.txt', 'utf-8', function(err, data){
//     if(!err){
//         console.log(data)
//     } else {
//         console.log('mistake')
//     }
// })

//С помощью цикла создайте 10 файлов, содержащих целые числа от 1 до 10.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 1; i <= arr.length; i++) {
//     fs.writeFile(i + 'readme.txt', `${i}`, function (err) {
//         if (!err) {
//             console.log("File was created")
//         };
//         if (err) {
//             console.log("Error while creating file")
//         };
//     });
// };

//Даны три файла с числами. Выведите в консоль сумму этих чисел.

// fs.readFile('1readme.txt', 'utf-8', function (err, data1) {
//     if (!err) {
//         fs.readFile('2readme.txt', 'utf-8', function (err, data2) {
//             if (!err) {
//                 fs.readFile('3readme.txt', 'utf-8', function (err, data3) {
//                     if (!err) {
//                         console.log(Number(data1) + Number(data2) + Number(data3));
//                     } else {
//                         console.log('Error reading 3readme.txt')
//                     }
//                 })
//             } else {
//                 console.log('Error reading 2readme.txt')
//             }
//         })
//     } else {
//         console.log('Error reading 1readme.txt')

//     }
// })
//Даны пять файлов с числами. Выведите в консоль сумму этих чисел.
// fs.readFile('1readme.txt', 'utf-8', function (err, data1) {
//     if (!err) {
//         fs.readFile('2readme.txt', 'utf-8', function (err, data2) {
//             if (!err) {
//                 fs.readFile('3readme.txt', 'utf-8', function (err, data3) {
//                     if (!err) {
//                         fs.readFile('4readme.txt', 'utf-8', function (err, data4) {
//                             if (!err) {
//                                 fs.readFile('5readme.txt', 'utf-8', function (err, data5) {
//                                     if (!err) {
//                                         console.log(Number(data1) + Number(data2) + Number(data3) + Number(data4) + Number(data5))
//                                     } else {
//                                         console.log('Error while reading file 5readme.txt')
//                                     }
//                                 })
//                             } else {
//                                 console.log('Error while reading file 4readme.txt')
//                             }
//                         })
//                     } else {
//                         console.log('Error while reading file 3readme.txt')
//                     }
//                 })
//             } else {
//                 console.log('Error while reading file 2readme.txt')
//             }
//         })
//     } else {
//         console.log('Error while reading file 1readme.txt')
//     }
// })

//Дан файл с числом. Запишите в этот файл квадрат этого числа.

// fs.readFile('7readme.txt', 'utf8', function (err, data) {
//     if (!err) {
//         fs.writeFile('7readme.txt', `${data * data}`, function (err) {
//             if (err) {
//                 console.log('Error writing in file 7readme.txt');
//             }
//         });
//     } else {
//         console.log('Error reading file 7readme.txt');
//     }
// });
//Даны три файла с числами. Запишите в новый файл сумму этих чисел.
fs.readFile('1readme.txt', 'utf-8', (err, data1) => {
    if (!err) {
        fs.readFile('2readme.txt', 'utf-8', (err, data2) => {
            if (!err) {
                fs.readFile('3readme.txt', 'utf-8', (err, data3) => {
                    if (!err) {
                        fs.writeFile('sum.txt', `${Number(data1) + Number(data2) + Number(data3)}`, (err) => {
                            if (err) {
                                console.log('Error reading 3readme.txt')
                            }
                        })
                    } else {
                        console.log('Error reading 2readme.txt')
                    }
                })
            } else {
                console.log('Error reading 1readme.txt')

            }
        })
    }
})