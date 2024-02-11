// Q1) Write a program to print the marks of the sudents stored in the object

let marks = {
    harry : 90,
    rohan : 78,
    aakash : 7
}

for(let i = 0; i < Object.keys(marks).length; i++)
{
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Object.keys(function_name)[i] -> This gives the keys
// function_name(Object.keys(function_name)[i]) -> This gives the value of the keys

// Q2) Do the above question using for in loop

for (const key in marks) {
    console.log(marks[key]);
}

// Q3) Write a program to print "try again" until the user enters correct no

let correctNo = 50;

let i;
while(i != correctNo)
{
    i = prompt("Enter the number");
    console.log("Try again");
}
console.log("You entered the correct no");

// Q4) Write a function to find mean of five nos;

const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
}

console.log(mean(4,5,6,7,8));

