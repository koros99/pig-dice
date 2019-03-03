//front-end logic
$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    $(".game").fadeIn();
    $(".landing-page").fadeOut();

    var playerOne = $("input#playerone").val();
    var playerTwo = $("input#playertwo").val();

    $("#player1").text(playerOne);
    $("#player2").text(playerTwo);


  })
});

//back-end logic
var rollValue = function() {
  Math.round(Math.random() * 5) + 1;
}

var Turn = function() {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.playerName;
}

Turn.prototype.checkForOne = function() {
  if (this.roll === 1) {
    this.turnscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1. Your turn score is zero");
  } else {
    this.turnscore += this.roll;
  }
};