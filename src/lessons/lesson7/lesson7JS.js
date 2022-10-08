// console.dir(function () {
//
// })

// class Test {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// console.dir(Test);
//
// let testObj = new Test('Evgen');
// console.log(testObj)
//
// //console.log(testObj.__proto__ === Test.prototype)
// console.log(Object.getPrototypeOf(testObj) === Test.prototype);

//console.log(testObj instanceof Test);

//

// function TestF() {
//
// }
//
// function TestConstructorFunc(name) {
// 	this.name = name;
// }
//
// TestConstructorFunc.prototype.sayHi = function () {};
//
// TestConstructorFunc.prototype = TestF.prototype;
//
// TestConstructorFunc.prototype.sayHi = function() {};
//
// let testObj = new TestConstructorFunc('Evgen');
//
// let testObj2 = new testObj.__proto__.constructor();
//
// console.log(testObj2)
// console.log(testObj2 instanceof TestConstructorFunc)
// console.log(testObj2 instanceof TestF)



// console.dir(TestConstructorFunc);
// console.log(testObj2);

//testObj.__proto__.sayHi = function () {}

// console.dir(TestConstructorFunc);
// console.log(testObj2);


// class TestProto {
// 	constructor(name) {
// 		this.name = name;
// 	}
//
// 	sayHi(){}
// }
//
// TestProto.prototype.sayBye = function(){};
//
// TestProto.prototype = {};
//
// let obj = new TestProto('Yo');
//
// console.dir(TestProto);
// console.log(obj);

// let obj2 = new obj.__proto__.constructor('Bla');
// console.log(obj2 instanceof TestProto)


// class TestProto {
// 	constructor(name) {
// 		this.name = name;
// 	}
//
// 	sayHi(){}
// }
//
// class Test extends TestProto {
// 	constructor() {
// 		super('test');
// 	}
// 	sayBye(){};
// }
//
// let obj = new Test('Yoyo');
//
// console.dir(Test);
// console.log('obj ', obj);

// function TestProto(name) {
// 	this.name = name;
// }
//
// TestProto.prototype.sayHi = function () {};
//
// function Test(name) {
// 	//TestProto.call(this, name)
// 	this.name = name;
// }
//
// Test.prototype = Object.assign(TestProto.prototype, {sayBye: function () { }, constructor: Test});
//
// let obj = new Test('Yoyo');
//
// console.dir(Test);
// console.log('obj ', obj);

// let obj = {
// 	name: 'Eugene',
// 	age: 33,
// }

// class TestProto {
// 	constructor(name) {
// 		this.name = name;
// 	}
//
// 	sayHi(){}
// }
//
// TestProto.prototype.tesst = 0;

// function TestProto(name) {
// 	this.name = name;
// }
//
// TestProto.prototype.sayHi = function () {};
// TestProto.prototype.test = 5;


// let obj = new TestProto('Yo');
//
// for (let key in obj) {
// 	console.log('in ', key);
// }
//
// for (let key of obj) {
// 	console.log('of ', key);
// }

// var iterable = {
// 	[Symbol.iterator]() {
// 		return {
// 			i: 0,
// 			next() {
// 				if (this.i < 3) {
// 					return { value: this.i++, done: false };
// 				}
// 				return { value: undefined, done: true };
// 			}
// 		};
// 	}
// };
//
// for (var value of iterable) {
// 	console.log(value);
// }
// 0
// 1
// 2

// Task 05
// Используя метод Call реализовать свой собственный метод bind

Function.prototype._bind = function (ctx, ...args) {
	const _this = this;
	return function (...args2) {
		return _this.call(ctx, ...args, ...args2);
		//return _this.apply(ctx, [...args, ...args2]);
	}
}


Function.prototype._bind2 = function (ctx, ...args) {
	debugger
	ctx.___bindFunc___ = this;
	return function (...args2) {
		return ctx.___bindFunc___(...args, ...args2);
	}
}


let obj =  {
	name: 'Eugen',
	sayName: function (a, b) {
		console.log('this.name ', this.name, a, b)
	}
};

let obj2 = { name: 'Vlad' };
let obj3 = { name: 'Anna' };

let result = obj.sayName.bind(obj2, 100).bind(obj3, 500);
result();