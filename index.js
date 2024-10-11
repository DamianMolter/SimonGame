var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var chosenColourNumber;
var randomColourNumber = nextSequence();
gamePattern.push(randomColourNumber);
var gameLevel = gamePattern.length;
var index = 0;
console.log(gamePattern);

$(document).keydown(function (event) {
      if (event.key === "a") {
            $("#level-title").text("Level " + gameLevel);
      }
})

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
            }, 1000)
            gamePattern = [];
            colorNumber = nextSequence();
            gamePattern.push(colorNumber);
            gameLevel = 1;
            index = 0;

      } else if (chosenColourNumber === gamePattern[index] && index === gameLevel - 1) {
            colorNumber = nextSequence();
            gamePattern.push(colorNumber);
            gameLevel++;
            index = 0;
            $("#level-title").text("Level " + gameLevel);
      } else if (chosenColourNumber === gamePattern[index] ) {
            index++;
      }
})


function nextSequence() {
      var randomNumber = Math.random();
      var colorNumber = Math.floor(randomNumber * 4);
      return colorNumber;
}