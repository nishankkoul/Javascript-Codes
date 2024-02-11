// Q2) Create a website which is capable of storing bookmarks of your favorite websites using location.href

// Done in HTML itself

// Q3) Repeat Q2 using event listeners

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click" , ()=>{
    location.href = "https://www.codewithharry.com";
})
btn2.addEventListener("click" , ()=>{
    location.href = "https://www.geeksforgeeks.org";
})
btn3.addEventListener("click" , ()=>{
    location.href = "https://www.linkedin.com";
})

// Q4) Write a js program to keep fetching contents of a website every 5 seconds

let content = setInterval(() => {
    console.log(document.body.textContent);
}, 5000);

clearInterval(content);


