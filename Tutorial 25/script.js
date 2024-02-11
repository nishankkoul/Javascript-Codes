// Console object has several methods, log being one of them

console.log(console); // this will list all the console objects in the console

console.log("Hello Nishank"); // this will print "Hello Nishank" in the console

// console.assert(5>45); // this will raise an error

console.clear(); // will clear the console

let obj = {
    a : 1,
    b : 2,
    c : 3
}

console.table(obj);  // will display the object in a tabular form

console.warn("Hey this is the last warning to you!"); // will display a warning with a yellow background

console.info("Hey this is important"); // will display in info, is very similar to console.log

console.time("a");

console.timeEnd("a"); // will display the time taken for a variable to end from start



console.time("for-loop");

for (let index = 0; index < 30; index++) {
    console.log(index);
}   

console.timeEnd("for-loop");  // will display the time taken for the for loop to run



