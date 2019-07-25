/*
Created by: Mikala Larson
Date created: 7/22/2019
Most recent revision: 7/24/2019
*/

// trying to link moneyLeft with startingBet textbox to store $$ in textbox:    var moneyLeft = document.getElementById("startingBet");//.innerHTML;
var userInput = prompt("How many dollars do you have to bet?");
var moneyLeft;
var dice1 = rollDice();
var dice2 = rollDice();
var dieTotal;

// do-while loop that prompts user for starting bet as long as there is money left and the bet is greater than 0
do {
  // if statement checking that userInput is greater than 0
  if(userInput <= 0) {
    alert("Error: Enter a bet higher than 0.");
    userInput;
    // statement that takes acceptable input and places it in the startingBet textbox
  } else {
    moneyLeft = userInput; //document.getElementById("startingBet").innerHTML = userInput;
  }
} while (moneyLeft > 0);

// function to click play and roll the dice until money is gone
function play() {
  if(onclick(document.getElementByName("submit")) == true) {
    while(moneyLeft > 0) {
      rollDice();
  }
  }
}

// function to roll the dice
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// for loop that calls the rollDice function; executes as long as i is less than two, written as such for the two dice needed for the game
for (var i = 0; i < 2; i++) {
  console.log(rollDice());
}


//function to add the two die together
function diceAddition() {
   dieTotal = (dice1 + dice2);

  if(dieTotal >= 2 && dieTotal <= 12) {
    return dieTotal;
    moneyRemaining();
  }
}


// function to calculate how much money is won per round
function moneyRemaining() {
  if(dieTotal == 7) {
    moneyLeft += 4;
  } else {
    moneyLeft -= 1;
  }
}


//function to keep track of how many rolls per round before money ran out
function numRolls() {
  //creating a variable for the onclick event of id='submit'
  var submit = onlick(document.getElementById("submit"));
  for(var i = 0; moneyLeft > 0; i++) {
    return i;
  }
}

// function that controls the end of game alert and result page
function gameOver() {
  if(moneyLeft <= 0) {
    alert("You're out of money.");
    // variable containing the onload event for the #results id element in HTML file and the reset button
    var resultspage = onload(document.getElementById("results"));
    if(document.getElementById("restart") == true) {
      document.getElementById("startingBet") = ""
      userInput;
    }
  }
}
gameOver();
