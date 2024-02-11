// Q1) Create an array of nos and take input from the user to add no to this array

let nums = [1,2,3,4];

let num = prompt("Enter the number");
num = Number.parseInt(num);
nums.push(num);

console.log(nums);

// Q2) Keeping adding nos to the array in Q1 till 0 is added

// let a = prompt("Enter the number");
// a = Number.parseInt(a);
// while(a!=0)
// {
//     a = prompt("Enter the number");
//     a = Number.parseInt(a);
//     nums.push(a);
//     console.log(a);
// }
// console.log(nums);

// Q3) Filter for nos divisible by 10 from a given array

let nos = [10,22,300,44,67,90];

let new_nos = nos.filter((val)=>{
    return val % 10;
})
console.log(new_nos);  // print [22,44,67]
console.log(nos);  // print [10,22,300,44,67,90]

// Q4) Create an array of square of given nos

let given_nos = [2,4,6,8,10];

let new_given_nos = given_nos.map((val)=>{
    return val*val;
})
console.log(new_given_nos);

// Q5) Use reduce to calculate factorial of a given no from an array of first n natural nos (n being the number whose factorial needs to be calculated)

let fact_nos = [1,2,3,4,5,6];

let factorial = fact_nos.reduce((val1, val2)=>{
    return val1*val2;
})
console.log(factorial);