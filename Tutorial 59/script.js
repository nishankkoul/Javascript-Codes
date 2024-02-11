// There is a special syntax to work with promises in js. 
// A function can be made async by using async keyword and await promises inside it

// An async function always returns a promise

// async function nishank() {
//     return 10;
// }

// nishank().then((x)=>{
//     alert(x);
// });


async function getData()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(455);
        }, 3500);
    })
}

async function main()
{
    console.log("Loading modules");
    console.log("Do something else");
    console.log("Load Data");
    let data = await getData();  // Now it will await for getData to get fulfilled coz it will return a promise
    console.log(data); // This will only execute after await statemnt is executed
    console.log("Process data");
    console.log("Task 2");
}

main();