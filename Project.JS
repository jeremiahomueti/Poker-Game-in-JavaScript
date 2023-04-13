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

//Typically you want to have all your IMPORTS and LIBRARIES at the top of your program, then your global variables, then your classes and functions, and then the other aspects of your program.

const ROWS = 3;//It's a rule of thumb that global variables are in all UPPER CASE. 
const COLS = 3;

const SYMBOLS_COUNT = { //The rule of thumb for two+ plus words when using capital letters or upper case is to use snake_case as opposed to camelCase.
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOLS_VALUE = {
    "A": 5, //This is the multiplier of each symbol. So if the player gets an 'A' it gets multiplied by 5. If the players gets a 'B' it gets multiplied by 4, etc.
    "B": 4,
    "C": 3,
    "D": 2
}

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
    while (true) 
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


//STEP THREE: COLLECT A BET AMOUNT


const getBet = (balance, lines) => 
{
    while (true)
    {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
   
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > (balance / lines))
        {
           console.log("Invalid bet. Please try again.");
        }
    else 
    {
        return numberBet;
    }
}
};



//4. SPIN THE SLOT MACHINE

const spin = () =>
{
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT))
    {
        for (let i = 0; i < count; i++)
            {
                symbols.push(symbol);
            }
    }

    const reels = []; //Well, this is the actual poker roller display.
    for (let i = 0; i < COLS; i++)
    {
        reels.push([]);
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++)
        {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length); //The reason why we're using math.floor is because we are going to round this number down to the lowest whole number.
            const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};


//Up Next: We Transpose The Outcomes from displaying like this...
//[[A B C], [D D D], [A A A]]

//[A D A]
//[B D A]
//[C D A]

//Notice all values from the first column are present in matrix' first column, and the same for the second column.

const transpose = (reels) => 
{
    const rows = [];

    for (let i = 0; i < ROWS; i++)
    {
        rows.push([]);
        for (let j = 0; j < COLS; j++)
        {
            rows[i].push(reels[j][i]);
        }
    }
    return rows;
};

const printRows = (rows) => 
{
    for (const row of rows)
    {
        let rowString = "";
        for (const [i, symbol] of rows.entries())
        {
            rowString += symbol
            
            if (i != row.length - 1)
            {
                rowString += " | "
            }
        }
        console.log(rowString)
    }
}


//STEP 5: Check IF THE USER WON
const getWinnings = (rows, bet, lines) =>
{
    let winnings = 0;

    for (let row = 0; row < lines; row++)
    {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) 
            {
                symbol != symbols[0]
                {
                    allSame = false;
                    break;
                }
            }

            if (allSame) 
            {
                winnings += bet = SYMBOLS_VALUE[symbols[0]]
            }

            return winnings;
    }
}

//STEP 6: PLAY AGAIN

const game = () => 
{
    let balance = deposit();


    while (true) 
    {
    
        console.log("You have a balance of $" + balance);
        const numberOfLines = getNumberOfLines();
        const bet = getBet(balance, numberOfLines);
        balance -= bet * numberOfLines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = getWinnings(rows, bet, numberOfLines);
        balance += winnings;
        console.log("You won, $" + winnings.toString());
    
    
        if (balance <= 0) 
        {
            console.log("You ran out of money!");
            break;
        }
    
        const playAgain = prompt("Do you want to play again (y/n)? ");
    
        if (playAgain != "y") break;
    }
};


game();




