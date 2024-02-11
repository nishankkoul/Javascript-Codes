// This thing is not a part of conditionals but is important to know

// If we want to input something from the user, we use prompt and if we want to display something to the user, we use alert

let a = prompt("Enter the number: "); // this will prompt the user to enter a number in the browser window
console.log(a , typeof a); // Whatever is stored using the prompt input is stored in the form of string

alert("Hey you entered " + a);

// If we want to convert this string type to number, we do typecasting

a = Number.parseInt(a); //Convert string to number

console.log(a , typeof a);

// Conditionals

// Prompt the user to enter a number and tell whether the user is eligible to vote or not

let age = prompt("Enter your age");

if(age >= 18)
{
    alert("Your are eligible to vote");
}
else{
    alert("You're not eligible to vote");
}

