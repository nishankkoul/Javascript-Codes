// Print nos from 1 to n using while loop

let n = prompt("Enter the number");
n = Number.parseInt(n); // Converting string to a number

let i = 1;

while(i <= n)
{
    console.log(i);
    i++;
}

// Write the same program using do while loop (do while loop executes atleast once)

let m = prompt("Enter the number");
m = Number.parseInt(m);

let j = 1;
do {
    console.log(j);
    j++;
} while (j <= m);