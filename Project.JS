//STEPS TO BE TAKEN IN THE GAME
//1. Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount
//4. Spin the slot machine
//5. Check if the user won
//6. If yes, give the user their winnings; if no, take their bet
//7. Play again

//STEP ONE: COLLECTING A DEPOSIT
//We'll be using a function. Functions are reusable blocks of code that can be called to do something for you.

// function deposit()
// {
//     return 1
// }
// deposit() //this line calls the function

const prompt = require("prompt-sync")();

const deposit = () =>
{
    while (true) //which essentially runs forever or is an infinite loop. So if the code input returns a/an isNan or <= 0, console.log '...try again.' Else (which breaks the loop), if the input is a valid number, we're however going to return the numerDepositAmount.
    {
        const depositAmount = prompt("Enter a deposit amount: $");
        const numberDepositAmount = parseFloat(depositAmount);
   
        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0)
        {
           console.log("Invalid deposit amount, please try again.");
        }
    else 
    {
        return numberDepositAmount;
    }

}};

//STEP TWO: DETERMINE THE NUMBER OF LINES TO BET ON

const getNumberOfLines = () => 
{
    while (true) //which essentially runs forever or is an infinite loop. So if the code input returns a/an isNan or <= 0, console.log '...try again.' Else (which breaks the loop), if the input is a valid number, we're however going to return the numerDepositAmount.
    {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
   
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3)
        {
           console.log("Invalid number of lines. Please try again.");
        }
    else 
    {
        return numberOfLines;
    }
}

};


const depositAmount = deposit();
const numberOfLines = getNumberOfLines();