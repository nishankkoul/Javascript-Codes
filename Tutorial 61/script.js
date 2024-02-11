// JavaScript can be used to send and retrieve info from the network when needed

// Fetch API provides an interface for fetching (sending/receiving) resources. It uses request and response objects. The fetch() method is used to fetch a resource/data. 

// Syntax - let promise = fetch(URL, [options]); 
// If no option is specified, then, by default it is GET

const URL = "https://cat-fact.herokuapp.com/facts";

// async function getFacts()
// {
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response);
//     console.log(response.status);
// }

// getFacts();

// But we didn't get the actual facts data from the api, this is because only a promise was return. To see the data facts we need to understand a few terms

// AJAX - Asynchronouse JSON and XML
// JSON - Javascript Object Notation

// We need to convert JSON data into javascript objects for that we use json() method
// json() - returns a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, Output is JS Object)

const factbtn = document.getElementById("factbtn");
const fact = document.getElementById("fact")

factbtn.addEventListener("click" , getFacts);

async function getFacts()
{
    console.log("Getting data...");
    let response = await fetch(URL);
    console.log(response); //JSON format
    console.log(response.status);
    let data = await response.json();
    console.log(data); //JS Object Format
    fact.innerText = data[0].text;
}


