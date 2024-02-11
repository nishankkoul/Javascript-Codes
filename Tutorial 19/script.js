// Traversal using for loops

let nums = [1,2,3,4,5];
for(let i = 0; i < nums.length; i++)
{
    console.log(nums[i]);
}

// Apart from traditional for loops, arrays can be traversed using: 

// For each loop

nums.forEach(element => {
    console.log(element**2); //Square of every element will be printed
});

// Array.from - is used to create an array from other objects (HTML Objects)

let str = "Nishank"; //string object
let arr = Array.from(str);
console.log(arr);

// for of

for (const iterator of nums) {
    console.log(iterator);  // will print the values 1,2,3,4,5
}

// for in

for (const key in nums) {
    console.log(key);  //will print the index values 0,1,2,3,4
}