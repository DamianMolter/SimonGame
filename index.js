var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var colorNumber = nextSequence();
var chosenColorNumber;

function nextSequence(){
      var randomNumber = Math.random();
      var colorNumber = Math.floor(randomNumber * 4);
      return colorNumber;
}


$(".btn").click(function(){
      //console.log(this);
      //colorNumber = nextSequence();
      //gamePattern.push(colorNumber);
      var chosenColorNumber;
      switch(this.id){
            case "green":
                  chosenColorNumber = 0;
                  break;
                  case "red":
                  chosenColorNumber = 1;
                  break;
                  case "yellow":
                  chosenColorNumber = 2;
                  break;
                  case "blue":
                  chosenColorNumber = 3;
                  break;
      }

      console.log(chosenColorNumber);

})

