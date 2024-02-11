// Its convenient and clean to handle events in js file only and moreover js handlings are given higher priority over inline handlings
// Syntax

// node.event = () => {
//     // code to be executed
// }

// Print something if first button is clicked

let btn1 = document.getElementById("btn1");
btn1.onclick = () =>{
    console.log("You clicked the first button");
}

// Print something if the second button is clicked twice

let btn2 = document.getElementById("btn2");
btn2.ondblclick = () => {
    console.log("You clicked the button twice");
}

// Print something whenever the user bring his mouse inside the box

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("You entered the box")
}

// Event Object

// It is a special object that has the details about the event. All event handlers have access to the event's objects properties and methods

// node.event = (e) => {
//     //handle here
// }

let btn3 = document.getElementById("btn3");
btn3.onclick = (e) => {
    console.log(e); // event object will be printed
    console.log(e.target); // this will show the element where the event has occured
    console.log(e.type); // will print click
}

// Event Listeners - same element par multiple kaam kara sakte hai

// node.addEventListener(event, callback);
// node.removeEventListener(event, callback);

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click" , () => {  //make note its not on click here, its click
    console.log("You clicked button 4 - handler 1");
})
btn4.addEventListener("click" , () => {  //make note its not on click here, its click
    console.log("You clicked button 4 - handler 2");
})
btn4.addEventListener("click" , () => {  //make note its not on click here, its click
    console.log("You clicked button 4 - handler 3");
})

// Now if we want to remove handler 1 event 
// NOTE - The callback function should be same to remove coz the function might be same but memory alloted to them is different. Have a look at below example

// btn1.removeEventListener("click" , () => {  
//     console.log("You clicked button 4 - handler 1");
// })

// Still handler 1 is not removed

// So, we first store the function in the variable and then call it. Now suppose we add a new event listener and then remove it, this is how we do

let handler4 = ()=> {
    console.log("You clicked button 4 - handler 4");
}
btn4.addEventListener("click" , handler4);

// Now we want to remove handler4 event listener

btn4.removeEventListener("click" , handler4);

