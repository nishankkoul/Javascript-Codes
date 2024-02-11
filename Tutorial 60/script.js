let a = prompt("Enter first number");
let b = prompt("Enter second number");

// What if we enter strings as prompt
// NaN - not a number will be displayed post 8th statement because strings can't be parsedInt, but still js won't throw error
if(isNaN(a) || isNaN(b))
{
    throw SyntaxError("Only a number is allowed");
}

let sum = parseInt(a) + parseInt(b);
console.log(sum);

// Now suppose we want to do sum*x but x will not be defined and js by default will throw reference error, but we want to handle that error

try {  // try to run
    console.log(sum*x);
} catch (error) {
    console.log("Error Error!"); // otherwise display this in console.
}

// Finally clause - the try..catch construct may have one more clause - finally (mostly works in functions when try also has a return statement and catch also has a return statment but still finally will execute even after return statements)

function final()
{
    let x = 5;
    try {  
        console.log(sum*x);
        return 34;
    } catch (error) {
        console.log("Error Error!"); 
        return 33;
    }
    finally{
        console.log("Connection is closed");
    }
}

final();
