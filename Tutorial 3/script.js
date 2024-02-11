// Here we will learn about the three types of variables: var, let and const

var a = 45;
var b = "Nishank";
var c = true;
var d = null;

// var is globally scoped while let and const are block scoped

console.log(b);

{
    var b = "Gulu";  // var can be updated and redeclared within its scope
    console.log(b);
}

console.log(b); // we can see that the value of b that was declared globally in line 4 has changed after changing the value in the block scope

let e = "Birju";

console.log(e);

{
    let e = "Birji";  //let can be updated but not redeclared
    console.log(e);  // the value of e is only changed in the scope,
}

console.log(e);  // the value still remains the same as what it was in line 19, this is why we use let over var

// const can neither be updated nor redeclared

const num = 5;

console.log(num);

// num = 10;  //This will throw error coz const cannot be updated

// console.log(num);

// let num = 10; //This will throw error coz num is already defined

