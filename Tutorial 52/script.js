// Synchronous programming means the code runs in a particular sequence of instructions in the program. Each instruction waits for the previous instruction to complete its execution

// Example: 

console.log("one");
console.log("two");
console.log("three");

// Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow

// Example: 

console.log("one");
console.log("one");

setTimeout(() => {
    console.log("async programming");
}, 3000);

console.log("three");
console.log("four");

// Output will be: 
// one 
// two
// three
// four
// async programming  //This shows that setTimeout function will execute later i.e. after 3 seconds but rest of the statements will execute synchronously before it.


