// The consuming code can receive the final result of a promise through then and catch.

// resolve

let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        resolve(true);
    }, 5000);
})
console.log(p1);

// reject

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        reject(new Error("I am an error"));
    }, 5000);
})
console.log(p2);

// This is how we can use promises parallely and both will fire their outputs after 5 seconds

// .then() - If we are interested only in successful completions, we can provide only one function argument - 
// We don't do console.log inside promise, but do it while using .then() 

p1.then((value)=>{
    console.log(value);
})

// .catch() - If we are interested only in errors, we can use null as the first argument, .then(null,f) or we can use .catch(alert)

p2.catch((error)=>{
    console.log("Error has occured");
})