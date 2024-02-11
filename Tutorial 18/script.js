let nums = [1,2,3,4,5,6,7];

// delete - array elements can be deleted using the delete operator

delete nums[1];
console.log(nums); // the new array becomes [1,3,4,5,6,7] but the length of the array remains the same
console.log(nums.length); // print 7

// concat - combine 2 or more than 2 arrays

let new_nums = [8,9,10,11,12,13];
console.log(nums.concat(new_nums)); // print [1,empty,3,4,5,6,7,8,9,10,11,12,13]

// sort - sorts the array and modifies the original array but alphabetically not numerically

let arr = [9,5,2,10,8];
console.log(arr.sort()); //print [10,2,3,8,9] - first elements starting with 1 then 2 then 3 and so on

// If we want to sort the values numerically, we use a compare function

let compare = (a,b) => {
    return a-b;  // ascendically sort, if we do b - a then it will sort in descending order
}

console.log(arr.sort(compare));

// .splice() - splice function can be used to add new items to the array and also modifies the array

// syntax - array_name.splice(index to be inserted at, no of items to be removed, value1, value2, value 3)

let num1 = [10,20,30,40,50,60,70];
num1.splice(2, 4, 33,44,55,66);
console.log(num1); //new array will be [10,20,33,44,55,66,70];

// .slice() - slices out a piece from an array and returns a new array but doesn't modify the original array

// Syntax - array_name.slice(index value from where to be sliced, index value till where to be sliced)

let num2 = [1,2,3,4,5];
console.log(num2.slice(2,4)); //will slice out elements 3 and 4 and return [3,4]
console.log(num2); // will print [1,2,3,4,5]

// .reverse() - will reverse the array and modify the original array

let rev = [1,2,3,4,5,6,7];
console.log(rev.reverse());
