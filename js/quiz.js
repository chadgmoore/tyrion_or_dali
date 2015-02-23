function loadInstructions(){
  $('.instructions').delay(800).animate({opacity: 1, duration: "slow", easing: "easein"});
};

function newGame() {
  $('.status').delay(400).animate({opacity: 1, duration: "slow", easing: "easein"});
  $('.questions').delay(800).animate({opacity: 1, duration: "slow", easing: "easein"});
  $('.buttonTyrion').delay(1600).animate({opacity: 1, duration: "slow", easing: "easein"});
  $('.buttonDali').delay(1600).animate({opacity: 1, duration: "slow", easing: "easein"});
  // Set the status icons back to new state
  $('#q1').css('color', '#C300FF');
  var ids = ["#q2", "#q3", "#q4", "#q5"];
    $.each(ids, function(index, value){
      $(this).css('color', '#808080');
  })
  getRandonQuote();
};

function getRandonQuote(){
  var quotes = [
    "tyrion--Turns out, far too much has been written about great men and not nearly enough about morons.",
    "dali--Intelligence without ambition is a bird without wings.",
    "tryion--I'm quite good at spending money, but a lifetime of outrageous wealth hasn't taught me much about managing it."
  ];

  var foundQuote = Math.floor(Math.random()*quotes.length);
  var author = quotes[foundQuote].split('--')[0];
  var quoteToDisplay = quotes[foundQuote].split('--')[1];
  console.log(author, quoteToDisplay);
  $('.questions').children('p').empty();
  $('.questions').children('p').append('<p><i class="fa fa-quote-left fa-1x"></i>"' + quoteToDisplay + '<i class="fa fa-quote-right fa-1x"></i></p>');
  
  return (author, quoteToDisplay);
};

$(document).ready(function() {

loadInstructions();

$('.instructions').on('click', function(event){
  $(this).animate({opacity: 0, duration: "slow", easing: "easein"});
  newGame();
  });

});