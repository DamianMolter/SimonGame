var colorNames = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var colorNumber = nextSequence();

function nextSequence(){
      var randomNumber = Math.random();
      var colorNumber = Math.floor(randomNumber * 4);
      return colorNumber;
}

$(document).click(function(){
      colorNumber = nextSequence();
      gamePattern.push(colorNumber);
})