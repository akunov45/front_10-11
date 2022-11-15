// //! OOP ES6

// let user = {
// 	name: "User",
// 	age: 25,
// };
// // console.log(user);

// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	move() {
// 		console.log("person move");
// 	}
// }

// class Children extends Person {
// 	constructor(options) {
// 		super(options.name, options.age);
// 	}

// 	lengKnow() {
// 		console.log("En", "Tu", "De");
// 	}
// }

// let user2 = new Person("User2", 22);
// user2.move();
// console.log(user2);

// let ch = new Children({ name: "Children of Person", age: 10 });
// ch.move();
// ch.lengKnow();
// console.log(ch);
// ES5   ES6

// var  let const
// includes(), trim(),trimStart(),trimEnd(),padStart(),padEnd()
//  statsWith(),endsWith(), class  spred/rest
// flat(), flatMap(), Деструктуризация  Promise async/await
// ??, at(),
// Деструктуризация
let arr = [1, 2, 33, 4, 11];
//index    0 1  2 3 4
// let one = arr[0]
// let two = arr[1]
// = == === ! && || ...
// let [_, , tort, ...myrest] = arr;
// console.log(tort);
// console.log(rest);

// let film = {
// 	name: "X-MAN",
// 	yaer: 2000,
// 	description: "lorem ipsum",
// };
// //  ES5
// console.log(film.name, film.yaer, film.description, "es5");
// // ES6
// let { name: filmName, yaer, description: desc } = film;
// // console.log(description);//app.js:63 ERR description is not defined
// console.log(filmName, yaer, desc, "es6");
// let film2 = {
// 	...film,
// 	name: "X-MAN 2",
// };

// console.log(film2);

// console.log("       hello     ".trimEnd());
// console.log("       hello     ".trimStart());
// console.log("       hello     ".trim());
// console.log("Hello".includes("e"));
// console.log(["a", "b", "c"].includes("e"));
// console.log(["a", "b", "c"].includes("c"));
// console.log("test".padStart(8, "0"));
// console.log("test".padEnd(8, "1"));
// console.log("Audi".startsWith("A"));
// console.log("Honda Fit".endsWith("t"));
// console.log("Honda Fit".endsWith("i"));
// let mixedArr = ["Audi", ["Honda Fit", ["BMW"]]];
// console.log(mixedArr);
// let allCars = mixedArr.flat().flat();
// let allCars = mixedArr.flat(2);
// let allCars = mixedArr.flat(Infinity);
// console.log(allCars);
let names = ["Akyl", "Samat"];
let lastEl = names[names.length - 1]; // ES5 Samat
let lastEl2 = names.at(-1); // ES6 Samat
console.log(lastEl, lastEl2);

// ?? нулевой оператор
// null жанан undefined
// ES5
let test = null;
if (test === null || test === undefined) {
	console.log("test NULL");
}
// ES6
test ?? console.log("TEST  NULL");
// ! OKURMEN

console.log("OKURMEN".toLowerCase());
console.log("okurmen".toUpperCase());
