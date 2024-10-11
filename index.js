var buttonColours = ["green", "red", "yellow", "blue"];
var buttonSounds = createSoundBar();
var gamePattern = createNewGamePattern();
var chosenColourNumber;
var gameLevel = gamePattern.length;
var index = 0;

console.log(gamePattern); //test

$(document).keydown(function (event) {
    $("#level-title").text("Level " + gameLevel);
    setTimeout(showNextColorInSequence, 1000);
});

$(".btn").click(function () {

  switch (this.id) {
    case "green":
      chosenColourNumber = 0;
      break;
    case "red":
      chosenColourNumber = 1;
      break;
    case "yellow":
      chosenColourNumber = 2;
      break;
    case "blue":
      chosenColourNumber = 3;
      break;
  }

  animatePress(chosenColourNumber);


  if (chosenColourNumber != gamePattern[index]) {
    displayGameOver(buttonColours);
    gamePattern = createNewGamePattern();
    gameLevel = 1;
    index = 0;
    buttonSounds[4].play();
    console.log(gamePattern); //test
  } else if (
    chosenColourNumber === gamePattern[index] &&
    index === gameLevel - 1
  ) {
    gamePattern = extendCurrentGamePattern(gamePattern);
    gameLevel++;
    index = 0;
    $("#level-title").text("Level " + gameLevel);
    buttonSounds[chosenColourNumber].play();
    console.log(gamePattern); //test
    setTimeout(showNextColorInSequence, 1000);
  } else if (chosenColourNumber === gamePattern[index]) {
    index++;
    buttonSounds[chosenColourNumber].play();
  }
});


function nextSequence() {
  var randomNumber = Math.random();
  var colorNumber = Math.floor(randomNumber * 4);
  return colorNumber;
}

function createSoundBar() {
  var buttonSounds = [];
  var buttonSound0 = new Audio("sounds/green.mp3");
  var buttonSound1 = new Audio("sounds/red.mp3");
  var buttonSound2 = new Audio("sounds/yellow.mp3");
  var buttonSound3 = new Audio("sounds/blue.mp3");
  var buttonSoundGameOver = new Audio("sounds/wrong.mp3");
  buttonSounds.push(buttonSound0);
  buttonSounds.push(buttonSound1);
  buttonSounds.push(buttonSound2);
  buttonSounds.push(buttonSound3);
  buttonSounds.push(buttonSoundGameOver);
  return buttonSounds;
}

function displayGameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 300);
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function createNewGamePattern() {
  var gamePattern = [];
  var randomColourNumber = nextSequence();
  gamePattern.push(randomColourNumber);
  return gamePattern;
}

function extendCurrentGamePattern(gamePattern) {
  var colorNumber = nextSequence();
  gamePattern.push(colorNumber);
  return gamePattern;
}

function showNextColorInSequence(){
  var lastNumberInSequence = gamePattern[gamePattern.length-1];
  $("."+ buttonColours[lastNumberInSequence]).css("opacity", "0.2");
  setTimeout(function () {
    $("."+ buttonColours[lastNumberInSequence]).css("opacity", "1");
  }, 500);
  buttonSounds[lastNumberInSequence].play();
}

function animatePress(chosenColourNumber) {
  $("#" + buttonColours[chosenColourNumber]).addClass("pressed");
  setTimeout(function () {
    $("#" + buttonColours[chosenColourNumber]).removeClass("pressed");
  }, 100);
}