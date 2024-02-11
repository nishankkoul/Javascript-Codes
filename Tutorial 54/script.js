// Promises is for "eventual" completion of task. It is an object in JS. It is a solution to callback hell. A promise is a "promise of code execution". The code either executes of fails, where in both cases the subscriber will be notified.

// Syntax: 

// let promise = new Promise(function(resolve,reject) {
    //code to be executed
// })

// Its a function with two handlers 
// resolve and reject are callbacks provided by js
// resolve(value) - if the code executes successfully
// reject(error) - if the code gives an error

let promise = new Promise((resolve, reject) => {
    console.log("I am NK");
    resolve(56);
})

console.log("Hello One");
console.log(promise);


// The promise object returned by the new Promise constructor has 2 properties: 

// state: Initially "pending", then changes to fulfilled when "resolve" is called or "rejected" when reject is called.
// result: Initially undefined, 

// Suppose if we want to do these tasks through our js program
// fetch googl.com homepage
// fetch data from data api
// fetch pictures from the server

// We don't want these fetchings to happen one by one but parallely and for that purpose we use promises. 