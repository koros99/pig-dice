//back-end logic
var playerOne = {};
var playerTwo = {};

var Player = function(name) {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.playerName = name;
};

var rollValue = function() {
  return Math.floor(6 * Math.random()) + 1;
};

Player.prototype.checkOne = function() {
  if (this.roll === 1) {
    this.turnscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1. Your turn score is zero");
  } else {
    this.turnscore += this.roll;
  }
};

Player.prototype.hold = function() {
  this.totalscore += this.turnscore;
  this.turnscore = 0;
  alert(this.playerName + ", your turn's up!")
};

Player.prototype.checkForWinner = function() {
  if (this.totalscore > 99) {
    alert("Congratulations " + this.playerName + "!!! You have won the game")
  }
};

Player.prototype.restartGame = function() {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
};

//front-end logic
$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    $(".game").fadeIn();
    $(".landing-page").hide();
    $("#rules").hide();

    var playerOneInput = $("input#playerone").val();
    playerOne = new Player(playerOneInput);

    var playerTwoInput = $("input#playertwo").val();
    playerTwo = new Player(playerTwoInput);

    $("#player1").text(playerOneInput);
    $("#player2").text(playerTwoInput);

    playerOne.playerName = playerOneInput;
    playerTwo.playerName = playerTwoInput;
  });

  $("button#roll1").click(function() {
    playerOne.roll = rollValue();
    $("#diceroll1").text(playerOne.roll);
    playerOne.checkOne();
    $("#turnscore1").text(playerOne.turnscore);
  });

  $("button#roll2").click(function() {
    playerTwo.roll = rollValue();
    $("#diceroll2").text(playerTwo.roll);
    playerTwo.checkOne();
    $("#turnscore2").text(playerTwo.turnscore);
  });

  $("button#hold1").click(function() {
    playerOne.hold();
    $("#total1").text(playerOne.totalscore);
    $("#turnscore1").empty();
    $("diceroll1").empty();
    playerOne.checkForWinner();
  });

  $("button#hold2").click(function() {
    playerTwo.hold();
    $("#total2").text(playerTwo.totalscore);
    $("#turnscore2").empty();
    $("diceroll2").empty();
    playerTwo.checkForWinner();
  });
});