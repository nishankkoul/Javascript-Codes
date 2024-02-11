// Generate a random number between 1 and 100 and store it in a variable. The program then takes input from the user to tell whether the number is correct, greater of lesser than the random number. 100 - (no of guesses) is the score of the user. The program is expected to terminate once the number is generated

let random = Math.floor((Math.random() * 100)) + 1;

let count = 0

do {
    let num = prompt("Enter the number");
    num = Number.parseInt(num);
    count++;
    if(num == random){
        alert("you entered the right number in " + count + " times");
        break;   
    }
    else if(num > random)
    {
        alert("You have entered a greater number");
    }
    else{
        alert("You have entered a smaller number");
    }
} while (true);






