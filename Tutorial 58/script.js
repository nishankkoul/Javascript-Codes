// There are 6 static methods of Promise class

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 1")
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2")
    }, 3000);
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 4000);
})

// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// When we want all the promises to resolve first and the display their values - we use Promise.all([array of promises])
// But even if one promise gets rejected, then the array of values won't be displayed

let promise_all = Promise.all([p1,p2,p3]);
promise_all.then((value)=>{
    console.log(value); // an array will be printed
})

// If even one of the promises fails, Promise.all won't display the values of other promises as well, but we want to see all thr promises, status and their values - Promise.allSettled()

let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This is an error"));
    }, 4000);
})

let promise_all_settled = Promise.allSettled([p1,p2,p3,p4]);
promise_all_settled.then((val)=>{
    console.log(val);
})

// Promise.race() - waits for the first promise to settle and its result/error becomes the outcome

let promise_race = Promise.race([p1,p2,p3,p4]);
promise_race.then((value)=>{
    console.log(value);  // this will print Value 1
})

// But what if the promise which takes the least amount of time is rejected and shows error post Promise.race(), then we use a very similar method called Promise.any() 
// Promise.any() - waits for the first promise to fulfill (& not rejected), and its result becomes the output

let promise_any = Promise.any([p1,p2,p3,p4]);
promise_any.then((val)=>{
    console.log(val);
})

// Promise.resolve(value) - Makes a resolved promise with a given value
// Promuse.reject(error) - Makes a rejected promise with the given error