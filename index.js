var buttonColours = ["green", "red", "yellow", "blue"];
var buttonSounds = createSoundBar();
var gamePattern = [];
var chosenColourNumber;
var randomColourNumber = nextSequence();
gamePattern.push(randomColourNumber);
var gameLevel = gamePattern.length;
var index = 0;

$(document).keydown(function (event) {
  if (event.key === "a") {
    $("#level-title").text("Level " + gameLevel);
  }
});

console.log(gamePattern);

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

  if (chosenColourNumber != gamePattern[index]) {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 300);
    gamePattern = [];
    colorNumber = nextSequence();
    gamePattern.push(colorNumber);
    gameLevel = 1;
    index = 0;
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $(document).keydown(function (event) {
      $("#level-title").text("Level " + gameLevel);
    });
    buttonSounds[4].play();
    console.log(gamePattern); //
  } else if (
    chosenColourNumber === gamePattern[index] &&
    index === gameLevel - 1)
   {
    colorNumber = nextSequence();
    gamePattern.push(colorNumber);
    gameLevel++;
    index = 0;
    $("#level-title").text("Level " + gameLevel);
      buttonSounds[chosenColourNumber].play();
    console.log(gamePattern); //

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
