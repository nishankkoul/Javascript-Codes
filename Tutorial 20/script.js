let nums1 = [20,30,40,50];

// Map - creates a new array by performing some operation on each array element - DO NOT MODIFY ORIGINAL 

let arr = nums1.map((value, index) => {
    return value + index;  // will print [20,31,42,3]
})

console.log(arr);

// Filter - filters an array with values that passes a test. Creates a new array - DO NOT MODIFY ORIGINAL

let nums2 = [23,9,2,4,55,10,20];

let new_nums2 = nums2.filter((val)=>{
    return val > 10;
})

console.log(new_nums2);

// Reduce - reduces an array to a single value - DO NOT MODIFY ORIGINAL ARRAY

let nums3 = [1,2,3,4,5,6];

let new_nums3 = nums3.reduce((val1,val2)=>{
    return val1 + val2;
})

console.log(new_nums3);

// Therefore, map and filter return an array and reduce returns a single value