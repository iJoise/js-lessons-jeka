console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// @ts-ignore
// function Test(name) {
//     // let this = {};
//     // @ts-ignore
//     //return 10;
//     // @ts-ignore
//     this.name = name;
//     return 10;
//     // return { test: 'Trst' };
// }
//
// // @ts-ignore
// let result = new Test('evgen');
//
// console.log(result)
//
// console.dir(class {})


// class Test {
//
//     name: string;
//     age: number;
//     //sayBye: Function;
//     //bindedSayHi: Function
//
//     constructor(name: string, age: number, public city: string) {
//         this.name = name;
//         this.age = age;
//         this.city = city;
//         //this.sayHi = function () {};
//         //this.sayBye = () => {}
//         //this.bindedSayHi = this.sayHi.bind(this);
//     }
//
//     sayHi() {}
//
//     sayBye = () => {}
//
// }
//
//
// let testObj = new Test('Evgen', 33, 'Minsk');
// let testObj2 = new Test('Vlad', 31, 'Minsk');
//
// console.log(testObj);
// console.log(testObj2);
// console.log(testObj.sayBye === testObj2.sayBye);

// class Test {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log('Hi from parent')
//     }
// }
//
// class Test2 extends Test {
//     constructor(public name: string, public age: number) {
//         super(name);
//         this.age = age;
//     }
//
//     sayHi() {
//         console.log('Hi hi');
//         super.sayHi();
//     }
//
//     sayBye() {}
// }
//
// let testObj = new Test2('Evgen', 33);
//
// console.dir(Test2)
//
// console.log(testObj);
//
// testObj.sayHi();

// interface ITest {
//     age: number;
//     sayBy: Function;
// }
//
// class Test implements ITest {
//     name: string;
//
//     constructor(name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     sayHi() {
//         console.log('Hi from parent')
//     }
//
//     sayBy() {}
// }


// class Test implements ITest {
//     name: string;
//     staticParam: number;
//
//     static staticParam = 10;
//
//     constructor(name: string, public age: number) {
//         this.name = name;
//         this.age = age;
//         this.staticParam = 500;
//     }
//
//     sayHi() {
//         console.log('Hi from parent')
//         console.log(this.staticParam);
//     }
//
//     static TestMethod() {
//         console.log(this.staticParam);
//     }
// }
//
// class Test2 extends Test {
//     constructor(public name: string, public age: number) {
//         super(name, age);
//     }
// }
//
// console.dir(Test2)


// class Test {
//     name: string;
//
//     private param = 10;
//
//     constructor(name: string) {
//         this.name = name;
//     }
//
//     sayHi() {
//         console.log('Hi from parent')
//         console.log(this.param);
//         this.sayBye();
//     }
//
//     private sayBye() {}
//
// }
//
// let obj = new Test('djg');
// //@ts-ignore
// console.log(obj.param);
// //@ts-ignore
// obj.sayBye();


// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

// interface IStudent {
//    name: string;
//    surname: string;
//    groupNumber: number;
//    progress: number[];
//    averageMark: number;
// }
//
// class Student implements IStudent {
//    averageMark: number;
//
//    constructor(public name: string, public surname: string, public groupNumber: number,
//                public progress: number[]) {
//       this.name = name;
//       this.surname = surname;
//       this.groupNumber = groupNumber;
//       this.progress = progress;
//       this.averageMark = this.progress.reduce((sum, mark) => sum + mark) / this.progress.length;
//    }
//
//    private static sortStuden(s1: IStudent, s2: IStudent) {
//       if (s1.averageMark > s2.averageMark) {
//          return 1;
//       } else if (s1.averageMark < s2.averageMark) {
//          return -1;
//       } else {
//          return 0;
//       }
//    }
//
//    static sort(arr: Array<IStudent>) {
//       const temp = [...arr];
//       return temp.sort(this.sortStuden);
//    }
//
//    private static isAllMarksEqualCurrentMark(marks: number[], currentMark: number) {
//       return marks.every(mark => mark === currentMark);
//    }
//
//    private static filterStudents(arr: Array<IStudent>) {
//       const result: Array<IStudent> = [];
//       arr.forEach(s => {
//          if (this.isAllMarksEqualCurrentMark(s.progress, 4) || this.isAllMarksEqualCurrentMark(s.progress, 5)) {
//             result.push(s);
//          }
//       });
//       return result;
//    }
//
//    static printGoodStudents(arr: Array<IStudent>) {
//       this.filterStudents(arr).forEach(s => {
//          console.log(`Student - ${s.surname}, Group - ${s.groupNumber}, averageMark - ${s.averageMark}`);
//       });
//    }
// }
//
// let students = [];
//
// students.push(new Student('Evgen', 'Www', 1, [4, 4, 4, 4]));
// students.push(new Student('Ann', 'Yoyo', 2, [5, 5, 5, 5]));
// students.push(new Student('Alex', 'Zzz', 3, [3, 3, 3, 3]));
// students.push(new Student('Helen', 'F', 4, [5, 3, 4, 3]));
//
// console.log(students);
//
// console.log(Student.sort(students));
//
// Student.printGoodStudents(students);


// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

// just a plug
export default () => {
};
