console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

//console.log(this);

// function f() {
//     console.log('this in function declaration ', this);
// }
//
// f();


// let obj = { name: 'Evgen' };
// let obj2 = { name: 'Vlad' };
//
// function f() {
//     console.log('this in function declaration ', this);
// }
//
// obj.f = f;
// obj2.f = f;
// f();
// obj.f();
// obj2.f();


// let arrow = () => console.log('this in arrow function ', this);
// obj.arrow = arrow;
// obj2.arrow = arrow;
// arrow();
// obj.arrow();
// obj2.arrow();

// obj.test = function() {
//     let arrow = () => console.log('this in arrow function ', this);
//     arrow();
// }
//
// obj.test();
//
// obj2.test = function() {
//     function testFunc() {
//         console.log('this in function declaration ', this);
//     };
//     testFunc();
// }
//
// obj2.test();

// obj.test = function() {
//     let arrow = () => console.log('this in arrow function ', this);
//     return arrow;
// }
//
// obj2.test = obj.test();
// obj2.test();


// obj.test = function() {
//     return function() {
//         console.log('this in function declaration ', this);
//     }
// }
//
// let test = obj.test();
// test();

// setTimeout(function() { console.log('this in function declaration ', this)}, 0);
// setTimeout(() => { console.log('this in arrow function ', this)}, 0);

// let obj = {
//     name: 'Evgen',
//     test() {
//         setTimeout(function() { console.log('this in function declaration ', this)}, 0);
//         setTimeout(() => { console.log('this in arrow function ', this)}, 0);
//     },
// };
//
// obj.test();


// obj.test = function() {
//     return () => console.log('this in arrow function ', this);
// }
//
// let test = obj.test();
// test();


// let obj2 = {
//     name: 'Vlad',
//     f() { return function() { console.log('this in function declaration ', this); } },
//     f2() { return () => console.log('this in arrow function ', this) },
//     a: () => { return function() { console.log('this in function declaration ', this); }},
//     a2: () => { return () => console.log('this in arrow function ', this) },
// };
//
// let obj = {
//     name: 'Evgen',
//     test() {
//         setTimeout(obj2.f(), 0);
//         setTimeout(obj2.f2(), 0);
//     },
// };
//
// obj.test();


// let obj2 = {
//     name: 'Vlad',
//     f() { return function() { console.log('this in function declaration ', this); } },
//     f2() { return () => console.log('this in arrow function ', this) },
//     a: () => { return function() { console.log('this in function declaration ', this); }},
//     a2: () => { return () => console.log('this in arrow function ', this) },
// };
//
// let obj = {
//     name: 'Evgen',
//     test() {
//         setTimeout(obj2.a(), 0);
//         setTimeout(obj2.a2(), 0);
//     },
// };
//
// obj.test();



// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

// type someObjType = {
//     name: string;
//     age: number;
// }
//
// let someObj:someObjType = {
//     name: 'Eugene',
//     age: 32
// }
// function greeting () {
//     // @ts-ignore
//     return `My name is ${this.name}. I am ${this.age}`
// }

// @ts-ignore
// someObj.greeting = greeting
// @ts-ignore
// console.log(someObj.greeting())

// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект

// let Counter:any = {
//     count: 0,
//     getCurrentCount () {
//         console.log(this.count)
//     },
//     increment() {
//          this.count++;
//         return this
//     },
//     decrement() {
//          this.count--;
//         return this
//     },
//     setCurrentCount (num: any) {
//         this.count = num;
//         return this
//     },
//     resCurrentCount() {
//         this.count = 0;
//         return this
//     }
// }

// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// Counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount(); // 12


// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
// function MyFirstConstructorFunc(name: string, age: number) {
//     // @ts-ignore
//     this.name = name;
//     // @ts-ignore
//     this.age = age;
//     // @ts-ignore
//     this.greeting = greeting
// }
// // @ts-ignore
// const newConstr = new MyFirstConstructorFunc('Kirill', 32)

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

// let One = {name: 'One'};
// let Two = {
//     name: 'Two',
//     sayHello: function() {console.log(`Hello, my name is ${this.name}`)}
// };
//
// let sayName = Two.sayHello.bind(One)
// sayName()

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore
// const helperObj = {
//     changeName(name: string) {
//         // @ts-ignore
//         this.name = name;
//     },
//     setAge(age: number) {
//         // @ts-ignore
//         this.age = age
//     },
//     greeting: Two.sayHello.bind(this),
// }

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает сумму этих чисел. Замыкание использовать нельзя
// function sumTwoNumbers(a:number,b:number):number {return a + b};
//
// function bindNumber(fn: Function, num: number) {
//     return function (num2: number) {
//         // @ts-ignore
//         return fn.bind(null, num, num2)
//     }
// }
// const sum = bindNumber(sumTwoNumbers, 10)
// console.dir(sum(10));


// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает ее свойству name объекта One
// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting объекта helperObj от имени Two

// Реализовать задачи 2-4 из Bind с помощью Call


// let obj = { name: 'Evgen' };
// let obj2 = {
//     name: 'Vlad',
//     //@ts-ignore
//     sayName(arg1, arg2) {
//         //@ts-ignore
//         console.log(this.name, arg1, arg2);
//     }
// };

//@ts-ignore
//obj.sayName = obj2.sayName;
//@ts-ignore
//obj.sayName();
// let sayName = obj2.sayName.bind(obj, 0);
//@ts-ignore
//sayName(50);

//obj2.sayName.call(obj, 50, 100);
// obj2.sayName.apply(obj, [50, 100]);



// just a plug
export default () => {};
