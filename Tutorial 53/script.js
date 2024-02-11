// A callback is a function passed as an argument to another function

function sum(a,b)
{
    console.log(a+b);
}

function calc(a,b,sumCallback)
{
    sumCallback(a,b,sumCallback);
}

calc(1,2,sum);

// setTimeout also takes callback function as input

const hello = () => {
    console.log("Hello");
}

setTimeout(hello, 3000);

// Callback Hell

// Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of DOOM) This style of programming becomes difficult to manage

