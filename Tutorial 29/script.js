// Q1) Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive or not.

let age = prompt("Enter your age");
age = Number.parseInt(age);

if(age<18)
{
    alert("You are not eligible to drive");
}
else{
    alert("You are eligible to drive");
}

// Q2) In Q1, use confirm to ask the user if he wants to see the prompt again

let write = confirm("Do you want to enter your age again?");

if(write)
{
    age = prompt("Enter your age");
    age = Number.parseInt(age);
    if(age<18)
    {
    alert("You are not eligible to drive");
    }
    else{
        alert("You are eligible to drive");
    }
}
else{
    alert("Okay, fine!");
}

// Q3) In Q3, use console.error if age entered is negative

let Age = prompt("Enter your age again");
Age = Number.parseInt(Age);

if(Age < 0)
{
    console.error("You entered an invalid age");
}
else if(Age > 0 && Age < 18)
{
    alert("You are not eligible to drive");
}
else{
    alert("You are eligible to drive");
}

// Q4) Write a program to change the url to google.com if the user enters a number greater than 4

let num = prompt("Enter the number");
num = Number.parseInt(num);

if(num > 4)
{
    location.href = "https://www.google.com";
}

// Q5) Change the background of the page to any color based on user's prompt

let color = prompt("Enter the color of your choice");

document.body.style.backgroundColor = color;