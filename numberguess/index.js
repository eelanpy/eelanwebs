// Step 1:  Provide the range for the buttons
var buttonNumsUI = document.getElementsByClassName("buttonNums")[0];
var buttonsNumsArray = [10, 25, 50, 100, 500, 1000];
var output = "";
buttonsNumsArray.forEach(function (num) {
  output += `<button id=${num} onClick="generateRandomNum(parseInt(${num}))"  class="ms-2 mt-2 p-4 btn btn-outline-primary numbtn" style="font-size: 30px;">${num}</button>`;
});

buttonNumsUI.innerHTML += output;

//
// Step 2: Defining Input box div tag.
var inputBoxDiv = document.getElementById("userBox");

var guesses = [];
//
// Step 3: The compunter picks a number based on the range from step 1.
function generateRandomNum(num) {
  guesses = [];
  randomNum = Math.floor(Math.random() * (num - 1)) + 1;
  return letUserPick(num,randomNum);
}

//
// Step 4: Lets the user guess the random number that the computer is thinking of.
function letUserPick(num,randomNum) {
  var output = ``;
  output += `
    <div id="userBox" class="text-center">
      <h1>Computer will now think of a number from
        1 to ${num}.</h1>

        <br>
        <h3 id="pQuestion">Go ahead and guess the number. Press enter or click the "Guess!" button when you typed your guess:</h3>

        <div class="form-signin text-center">
        <input  class="form-control text-center"
            type="text" placeholder="Your Number Guess:" id="userGuess"

        />
        </div>
        <div class="text-center">
          <button class="btn btn-outline-primary submit-btn">Guess!</button>
        </div>


        <p id="guesses"></p>
    </div>`;




  inputBoxDiv.innerHTML = output;
  document.getElementById("userGuess").focus();
  for(var i = 0; i<document.querySelectorAll('.numbtn').length; i++) {
    document.querySelectorAll('.numbtn')[i].disabled = true;
  }
  document.querySelector('.form-control').addEventListener('keypress', (e) => {
    if (window.event.keyCode == 13) {

      document.querySelector('.submit-btn').click()
    }
  })

  document.querySelector('.submit-btn').addEventListener('click', (e) => {


      checkUserGuess(randomNum)


  })
}


var totalTries = 0;
function checkUserGuess(randomNum) {
  totalTries = totalTries + 1;
  var tries = totalTries === 1 ? "try" : "tries";
  let guessed = parseInt(document.getElementById("userGuess").value);
  guesses.push(guessed);
  var guessesString = getString(guesses, totalTries);
  var guessesP = document.getElementById("guesses");
  var messageDiv = document.getElementById("pQuestion");
  messageDiv.classList.remove("text-success");
  messageDiv.classList.remove("text-danger");

  if (randomNum == guessed) {
    messageDiv.classList.add("text-success");
    messageDiv.textContent = `Yes you got it!!!  It took you ${totalTries} ${tries}. `;
    guessesP.textContent = `Also the numbers that you entered was ${guessesString}.  The correct number was ${randomNum}.`;

    inputBoxDiv.innerHTML += `<button onclick="location.reload()" class="mt-2 btn btn-primary " style="font-family: quicksand, sans-serif">Play Again</button>`;
    document.getElementById("userGuess").focus();
  } else if (randomNum > guessed) {
    guessed = "";
    messageDiv.classList.add("text-danger");
    messageDiv.textContent = `The actual number is higher. Try again!`;
    guessesP.textContent = `The numbers that you entered so far was ${guessesString}.`;
    document.getElementById("userGuess").focus();
  } else {
    messageDiv.classList.add("text-danger");
    messageDiv.textContent = `The actual number is lower. Try again!`;
    guessesP.textContent = `The numbers that you entered so far was ${guessesString}.`;
    document.getElementById("userGuess").focus();
  }

  guessesP.style.fontFamily = 'quicksand, sans-serif'

  document.getElementById("userGuess").value = "";

}

function getString(arr, finalIndex) {
  var newString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1) {
      newString = arr[0];
    } else if (arr.length > 1) {
      newString =
        String(arr.slice(0, arr.length - 1)) +
        " and " +
        String(arr[finalIndex - 1]);
    }
  }
  var newchar = ", ";
  if (newString.length > 1) {
    newString = String(newString).split(",").join(newchar);
  } else {
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] === ",") {
        newString = "";
        newString = newString.slice(i) + ",";
      }
    }
  }
  return newString;
}
