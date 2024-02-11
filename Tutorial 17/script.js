// .toString() - Converts array to string

let nums = [1,2,3,4,5];
let a = nums.toString();  // this will convert array to string
console.log(a);
console.log(typeof a);  // string

// .join() - joins all the array elements using a separator

let b = nums.join("-"); // this will print 1-2-3-4-5
console.log(b);
console.log(typeof b); //string

// .pop() - removes last element from the array and also update the original array

let c = nums.pop();
console.log(c); //print 5
console.log(nums); // the new array will be [1,2,3,4]

// .push(num) - ends a new element at the end of the array and will update the original array

let d = 6;
nums.push(d); // will push 6 at the last
console.log(nums); // will print [1,2,3,4,6]

// .shift() - removes the 1st element and returns it and will modify the original array

console.log(nums.shift()); // print 1
console.log(nums); // new array is [2,3,4,6]

// .unshift() - adds a new element at the beginning and will modify the original array

let e = 1;
nums.unshift(e);
console.log(nums); // will print [1,2,3,4,6]



