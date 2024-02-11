// alert - used to invoke a message on the user's window and the user can only press ok

alert("Welcome to JS Tutorial 27");

// prompt - used to take user input as string

let a = prompt("Enter the value of a");
document.write(a); // this will write the value of a on the browser

// confirm - shows a message and waits for the user to enter ok or cancel. Returns true for ok and false for cancel.

let b = prompt("Enter the value of b");
 
let write = confirm("Do you want to write it to the page?");
if(write)
{
    document.write(b);
}
else{
    document.write("Please allow me to write");
}

