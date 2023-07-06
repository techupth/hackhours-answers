// Exercise #1: Strict and Same
// Start commenting here
Object.is(10, 20); //false
Object.is(0, -0); //false
Object.is(NaN, 100); //false
Object.is("one", "two"); //false
Object.is({ name: "John", age: 30 }, { name: "John", age: 30 }); //false
Object.is(null, undefined); //false

10 === 20; //false
10 === "10"; //false
3.14 !== 3.14; //false
"TechUp" !== "TechUp"; //false
NaN === NaN; //false
0 !== -0; //false

let objectA = { course: "Web Developer", price: 300000 };
let objectB = { course: "Web Developer", price: 300000 };
objectA === objectB; //false
