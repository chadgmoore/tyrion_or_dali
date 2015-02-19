function loadInstructions(){
      $('.instructions').delay(800).animate({opacity: 1, duration: "slow", easing: "easein"});
};

function newGame() {
    $('.status').delay(400).animate({opacity: 1, duration: "slow", easing: "easein"});
    $('.questions').delay(400).animate({opacity: 1, duration: "slow", easing: "easein"});
    $('.buttonTyrion').delay(800).animate({opacity: 1, duration: "slow", easing: "easein"});
    $('.buttonDali').delay(800).animate({opacity: 1, duration: "slow", easing: "easein"});
    // Set the status icons back to new state
    // $('.status', 'ul id=inactiveQuestion');
  };

$(document).ready(function() {

loadInstructions();

$('.instructions').on('click', function(event){
  $(this).animate({opacity: 0, duration: "slow", easing: "easein"});
  newGame();
  });

});