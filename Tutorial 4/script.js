// Primitive Data Types

// There are 7 types of built in data types in javascript : (nn bb ss u)
// - Number
// - Null
// - String
// - Symbol
// - Boolean
// - BigInt
// - Undefined

let a = 50;
let b = null;
let c = "Nishank";
let d = Symbol("I am a symbol");
let e = true; // can be false as well
let f = BigInt("5600");
let g = undefined; // this can also be written as let g; -> its default datatype is undefined

console.log(a,b,c,d,e,f,g);
console.log(typeof e); // this should return boolean

// Object data types is a non primitive data type that consists of key-value pairs

const item = {
    "Name" : "Nishank", //here name is key and Nishank is value of that key
    "Age" : 20,
    "Qualification" : true
}

console.log(item["Name"]);

