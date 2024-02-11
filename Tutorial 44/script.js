// "beforebegin" - insert HTML before element

let before_after = document.getElementById("container");

before_after.insertAdjacentHTML("beforebegin" , "<div>before begin</div>"); // this will create a div element just before I am container 
before_after.insertAdjacentHTML("beforeend" , "<div>before end</div>"); // this will create a div element just before end of div with container id
before_after.insertAdjacentHTML("afterbegin" , "<div>after begin</div>"); // this will create a div element just after I am container
before_after.insertAdjacentHTML("afterend" , "<div>after end</div>"); // this will create a div element just after end

// We can remove a node node.remove()

// let remove_now = document.getElementById("container"); // this will remove the entire container div
// remove_now.remove();