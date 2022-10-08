console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// console.log(new Promise((res, rej) => {}))
//
// let a = 10;
// //...
//
// let prom = new Promise((resolve, reject) => {
//     let b = 10;
//     // some code
//     //...
//     // some async request
//     setTimeout(()=>{},0);
//     resolve('oneArg') // success response
//     reject('oneArg') // unsuccess response
//     //...
// })
//
// let c = 10;
// //...
//
// //console.log(Promise.resolve(10))
// console.log(Promise.reject(0))


// let prom = new Promise((res, rej) => {
//     // some async request
//     //setTimeout(()=>{},0);
//     //res(1) // success response
//     rej('Error') // unsuccess response
// })

// prom
//     .then(res => {
//         console.log('then res ', res);
//         //@ts-ignore
//         res += 10;
//         return res;
//     },  err => {
//         console.log('then err ', err)
//         throw 'new Error 2'
//     })
//     .then(res2 => {
//         console.log('then res2 ', res2)
//         //@ts-ignore
//         return res2 + 10;
//     },  err => {
//         console.log('then err ', err)
//         throw 'new Error 2'
//     })
//     .then(res3 => {
//         console.log('then res3 ', res3)
//     }, err => {
//     console.log('then err ', err)
//     throw 'new Error 2'
// })

// prom
//     .then(res => {
//         console.log('then res ', res);
//         //@ts-ignore
//         res += 10;
//         return res;
//     })
//     .catch(err => {
//         console.log('err', err);
//         return 'Ok'
//     })
//
//     .then(res2 => {
//         console.log('then res2 ', res2)
//         //@ts-ignore
//         return res2 + 10;
//     })
//
//     .then(res3 => {
//         console.log('then res3 ', res3)
//     })
//
//     .then(res4 => {
//         console.log('then res4 ', res4)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     .finally(() => {
//         console.log('finally res ')
//         return 50;
//     })



// just a plug
export default () => {
};