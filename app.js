// togloom duussn esehiig hadgaldag tuluviin huvisagch
var isNewGame;


var activePlayer;

var scores;


var roundScore;

var diceDom = document.querySelector(".dice");


initGame();


function initGame() {
  //togloom ehellee gedeg tolowt oruulna 
  isNewGame = true;
  
  activePlayer = 0;

  scores = [0, 0];

 
  roundScore = 0;

  
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}


document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame === true) {

    var diceNumber = Math.floor(Math.random() * 6) + 1;

    diceDom.style.display = "block";

    diceDom.src = "dice-" + diceNumber + ".png";

    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  }
});


document.querySelector(".btn-hold").addEventListener("click", function () {
  
  scores[activePlayer] = scores[activePlayer] + roundScore;

  
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];

  
  if (scores[activePlayer] >= 100) {
    // togloomii duussan tolowt oruulna aa
    isGameover = true;
  
    document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
  
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {

  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  
  diceDom.style.display = "none";
}


document.querySelector(".btn-new").addEventListener("click", initGame);
