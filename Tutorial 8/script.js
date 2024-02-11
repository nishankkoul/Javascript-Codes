// Q1) Use logical operators to find whether the age of a person lies between 10 and 20?

let age = prompt("Enter your age");  

if(age > 10 && age < 20)
{
    alert("Yes you're above 10 and below 20");
}
else{
    alert("No");
}

// Q2) Demonstrate the use of switch case statements in javascript

let expr = prompt("Ënter the fruit");

switch (expr) {
    case "Mango":
        console.log("Mango is the king of fruits");
        break;
    case "Apple":
        console.log("An apple a day keeps the doc away");
        break;
    default:
        console.log("Not a valid fruit"); 
        // break after default is not necessary
}

// Q3) Write a program to find whether a number is divisible by 2 and 3

let num = prompt("Enter the number");

if(num%2 == 0 && num%3 == 0)
{
    alert("The number is divisible by 2 and 3");
}
else{
    alert("The number is not divisible by 2 and 3");
}

// Q4) Write a program to find whether a number is divisible by 2 and 3

let number = prompt("Enter the number");

if(number%2 == 0 || number%3 == 0)
{
    alert("The number is divisible by 2 or 3");
}
else{
    alert("The number is not divisible by 2 or 3");
}
