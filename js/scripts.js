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
  return Math.round(5 * Math.random()) + 1;
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
  alert(this.playerName + ", your turn's up!");
};

Player.prototype.checkForWinner = function() {
  if (this.totalscore > 99) {
    alert("Congratulations " + this.playerName + "!!! You have won the game");
    $("#winner").text(this.playerName);
    $("#endgame").css({
      opacity: 1
    });
    $("#card1, #card2").hide();
  }
};

//front-end logic
$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    var playerOneInput = $("input#playerone").val();
    playerOne = new Player(playerOneInput);

    var playerTwoInput = $("input#playertwo").val();
    playerTwo = new Player(playerTwoInput);

    if (!playerOneInput || !playerTwoInput) {
      alert("You must fill in names of both players.");
      return 0;
    } else if (playerOneInput == playerTwoInput) {
      alert("The two players' names must be different.");
      return 0;
    }
    $(".game").fadeIn();
    $(".landing-page").hide();
    $("#rules").hide();

    $("#player1").text(playerOneInput);
    $("#player2").text(playerTwoInput);

    playerOne.playerName = playerOneInput;
    playerTwo.playerName = playerTwoInput;

    $("#endgame").css({
      opacity: 0.1
    });
  });


  $("button#roll1").click(function() {
    playerOne.roll = rollValue();
    $("#diceroll1").text(playerOne.roll);
    playerOne.checkOne();
    $("#turnscore1").text(playerOne.turnscore);
    if (playerOne.roll === 1) {
      $("#card1").css({
        opacity: 0.3
      });
      $("#card2").css({
        opacity: 1
      });
      $("button#hold1").css({
        opacity: 0.1
      });
      $("button#roll1").css({
        opacity: 0.1
      });
      $("button#hold2").css({
        opacity: 1
      });
      $("button#roll2").css({
        opacity: 1
      });
    }
  });

  $("button#roll2").click(function() {
    playerTwo.roll = rollValue();
    $("#diceroll2").text(playerTwo.roll);
    playerTwo.checkOne();
    $("#turnscore2").text(playerTwo.turnscore);
    if (playerTwo.roll === 1) {
      $("#card2").css({
        opacity: 0.3
      });
      $("#card1").css({
        opacity: 1
      });
      $("button#hold1").css({
        opacity: 1
      });
      $("button#roll1").css({
        opacity: 1
      });
      $("button#hold2").css({
        opacity: 0.1
      });
      $("button#roll2").css({
        opacity: 0.1
      });
    }
  });

  $("button#hold1").click(function() {
    playerOne.hold();
    $("#total1").text(playerOne.totalscore);
    $("#turnscore1").empty();
    $("#diceroll1").empty();
    playerOne.checkForWinner();
    $("#card1").css({
      opacity: 0.3
    });
    $("#card2").css({
      opacity: 1
    });
    $("button#hold1").css({
      opacity: 0.1
    });
    $("button#roll1").css({
      opacity: 0.1
    });
    $("button#hold2").css({
      opacity: 1
    });
    $("button#roll2").css({
      opacity: 1
    });
  });

  $("button#hold2").click(function() {
    playerTwo.hold();
    $("#total2").text(playerTwo.totalscore);
    $("#turnscore2").empty();
    $("#diceroll2").empty();
    playerTwo.checkForWinner();
    $("#card2").css({
      opacity: 0.3
    });
    $("#card1").css({
      opacity: 1
    });
    $("button#hold2").css({
      opacity: 0.1
    });
    $("button#roll2").css({
      opacity: 0.1
    });
    $("button#hold1").css({
      opacity: 1
    });
    $("button#roll1").css({
      opacity: 1
    });
  });

  $("button#restart").click(function() {
    location.reload();
  });
});