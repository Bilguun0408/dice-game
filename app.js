//  toglogchiin eeljiig hadgaldag huvisagch negdugeer toglogchiig 0, hoyrdugaar toglogchiig 1 gej temdegley
var activePlayer = 0;

// toglogchdiin tsugluulsan onooog hadgalah huvisagcj
var scores = [0, 0];

// toglogchdiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;

// shoonii ali talaaraa buusaniig hadgalah huvisagch heregtei 1-6  gesen utgiig ene huvisagchid sanamsarguigeer uusgej ogno.

// program ehlehed beltgey
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listenner
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotor sanamsargui neg toog gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // shoonii zurgiig web deer gargaj irne
  diceDom.style.display = "block";

  // buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";
  // buuusan toon 1-ees ylgaatai bol idewhtei toglogchiin eeljiin onoog nemegduulne

  if (diceNumber !== 1) {
    // 1ees ylgaatai too buula buusan toog toglogchid nemj ogno
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    switchToNextPlayer();
    // 1buusan tul toglogchiin eeljiig ene hesegt solij ogno

    // ene toglogchiin eeljindee tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // toglogchiin eeljiig nogoo toglogchruu shiljuulne

    // herev idevhtei toglogch 0 baiwal idewhtei toglogchiig 1 bolgo
    // ugui bol idevhtei toglogchiiig 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    //ulaan tsegiig shiljuuleh
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // shjoog tur alga bolgono
    diceDom.style.display = "none";

  }
});

// HOLD towchnii event listener
document.querySelector(".btn-hold").addEventListener('click', function () {
  // ug toglogchiin tsugluulsan eeljnii onoog  global onoon deer ni nemj ogno

  scores[activePlayer] = scores[activePlayer] + roundScore;
  // delgets deer onoog ni oorchiln
  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  
  
  // ug toglogch hojson esehiig (onoo ni 100-s ih eseh) shalgah
  if (scores[activePlayer] >= 100) {
    // ylagch gesen textiig nerniih ni orond gargana
    document.getElementById("name-" + activePlayer).textContent = "winner!!!";

    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
    
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active')
  } else {
    // toglogchiin eeljiig solino
    switchToNextPlayer();
  }

 
});

// ene funct ni togloh eeljiig daraachiin toglogchruu shiljuulne
function switchToNextPlayer() {
  // ene toglogcjiin eeljindee tsugluulsan onoog 0 bolgono
   roundScore = 0;
   document.getElementById("current-" + activePlayer).textContent = 0;

   // toglogchiin eeljiig nogoo toglogchruu shiljuulne

   // toglogcjiin eeljiig nogoo toglogchruu shiljuulne
   activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

   //ulaan tsegiig shiljuuleh
   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");

   // shjoog tur alga bolgono
   diceDom.style.display = "none";
  
}


// shine togloom ehluuleh towchnii event listener

document.querySelector('.btn-new').addEventListener('click', function () {
  
})