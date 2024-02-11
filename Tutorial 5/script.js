// Q1) Create a variable of type string and try to add a number to it

let a = "Nishank";
let b = 7;

console.log(a+b);

// Q2) Use typeof operator to find the data type of the string used in previous question

console.log(typeof (a+b)); //this will print string

// Q3) Create a const object in js. Can you change it to hold a number later

const obj = {
    "Name" : "Nishank",
    "Height" : 180,
    "Weight" : 68
}

// obj = 45; //This will throw an error because the value of obj will be an object throught coz its defined through a const variable

// Q4) Try to add a new key to the const object you created in Q3. Were you able to do it?

obj["CGPA"] = 7.11;

console.log(obj);  //Yes we can add a new key to an already created object

// We cannot change obj to a number because of its const nature but still we can update the const object. This is because obj is a reference to the object created. 

//  obj = {
//     some new object  -> we also cannot create a new object 
// }

// If we want to access a key from an object we can do it using 2 ways

// console.log(obj["Weight"])  OR console.log(obj.weight);
