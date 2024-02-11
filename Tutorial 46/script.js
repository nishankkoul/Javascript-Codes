// setTimeout allows us to run a function once after the interval of time

// syntax of setTimeout is:-

// setTimeout(function () {
//     // code to be run
// }, delay(time in ms) , <arg 1> , <arg2>)

alert("Hello");

let a = setTimeout(function () {
    alert("I am inside setTimeout")
    let write = confirm("Do you wanna append Hello?")
    if(write)
    {
        document.write("Hello")
    }
    else{
        alert("Better luck next time");
    }
}, 2000)   

// in the above function an alert box will appear after 2000 ms i.e. 2 seconds but only once and then the following steps will proceed accordingly

clearTimeout(a); // if we do this, then the setTimeout function won't be executed
console.log(a);


// setInterval method has a similar syntax as setTimeout

// All arguments have the same meaning, but unline setTimeout, it runs the function not only once, but reulary after the given interval of time, until and unless clearInterval() is called.

let b = setInterval(function () {
    alert("I am inside setTimeout")
    let write = confirm("Do you wanna append Hello?")
    if(write)
    {
        document.write("Hello")
    }
    else{
        alert("Better luck next time");
    }
}, 2000) 

clearInterval(b);
console.log(b);