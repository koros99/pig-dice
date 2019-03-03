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