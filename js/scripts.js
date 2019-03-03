//back-end logic
var playerOne = {};
var playerTwo = {};

var rollValue = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn, name) {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName = name;
}

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
  alert(this.playerName + ", your turn's up!")
}

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

    var playerOne = new Player();
    var playerTwo = new Player();
    $(".game").fadeIn();
    $(".landing-page").fadeOut();

    var playerOneInput = $("input#playerone").val();
    var playerTwoInput = $("input#playertwo").val();

    $("#player1").text(playerOneInput);
    $("#player2").text(playerTwoInput);

    playerOne.playerName = playerOne;
    playerTwo.playerName = playerTwo;
  });

  $("button#roll1").click(function(event) {
    event.preventDefault();
    playerOne.roll = rollValue();
    $("#diceroll1").text(playerOne.roll);
    playerOne.checkone();
    $("#turnscore1").text(playerOne.turnscore);
  });

  $("button#roll2").click(function(event) {
    event.preventDefault();
    playerTwo.roll = rollValue();
    $("#diceroll2").text(playerTwo.roll);
    playerTwo.checkone();
    $("#turnscore2").text(playerTwo.turnscore);
  });

  $("button#hold1").click(function(event) {
    playerOne.hold();
    $("#total1").text(player1.totalscore);
    $("#turnscore1").empty();
    $("diceroll1").empty();
    player1.checkForWinner();
  });

  $("button#hold2").click(function(event) {
    playerOne.hold();
    $("#total2").text(player2.totalscore);
    $("#turnscore2").empty();
    $("diceroll2").empty();
    player2.checkForWinner();
  });
});