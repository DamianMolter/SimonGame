var buttonColours = ["green", "red", "yellow", "blue", "wrong"];
var gamePattern = [];
extendCurrentGamePattern();
var chosenColourNumber;
var gameLevel = gamePattern.length;
var index = 0;

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
    buttonSound = new Audio("sounds/wrong.mp3")
    buttonSound.play();
    gamePattern = [];
    extendCurrentGamePattern();
    gameLevel = 1;
    index = 0;
  } else if (
    chosenColourNumber === gamePattern[index] &&
    index === gameLevel - 1
  ) {
    extendCurrentGamePattern();
    gameLevel++;
    index = 0;
    $("#level-title").text("Level " + gameLevel);
    buttonSound = new Audio("sounds/" + buttonColours[chosenColourNumber] + ".mp3")
    buttonSound.play();
    setTimeout(showNextColorInSequence, 1000);
  } else if (chosenColourNumber === gamePattern[index]) {
    index++;
    buttonSound = new Audio("sounds/" + buttonColours[chosenColourNumber] + ".mp3")
    buttonSound.play();
  }
});

function nextSequence() {
  var randomNumber = Math.random();
  var colorNumber = Math.floor(randomNumber * 4);
  return colorNumber;
}

function displayGameOver() {
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 300);
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

function extendCurrentGamePattern() {
  var colorNumber = nextSequence();
  gamePattern.push(colorNumber);
}

function showNextColorInSequence() {
  var lastNumberInSequence = gamePattern[gamePattern.length - 1];
  $("." + buttonColours[lastNumberInSequence]).css("opacity", "0.2");
  setTimeout(function () {
    $("." + buttonColours[lastNumberInSequence]).css("opacity", "1");
  }, 500);
  buttonSound = new Audio("sounds/" + buttonColours[lastNumberInSequence] + ".mp3")
  buttonSound.play();
}

function animatePress(chosenColourNumber) {
  $("#" + buttonColours[chosenColourNumber]).addClass("pressed");
  setTimeout(function () {
    $("#" + buttonColours[chosenColourNumber]).removeClass("pressed");
  }, 100);
}