var colorNumber = nextSequence();
var colorNames = ["green", "red", "yellow", "blue"];

function nextSequence(){
      var randomNumber = Math.random();
      var colorNumber = Math.floor(randomNumber * 4);
      return colorNumber;
}