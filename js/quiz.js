// make sure wuote isn't already used
// track question numbers and update icons accordingly

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
  var correctAuthor = quotes[foundQuote].split('--')[0];
  var quoteToDisplay = quotes[foundQuote].split('--')[1];
  console.log(correctAuthor, quoteToDisplay);
  $('.questions').children('p').empty();
  $('.questions').children('p').append('<p><i class="fa fa-quote-left fa-1x"></i>"' + quoteToDisplay + '<i class="fa fa-quote-right fa-1x"></i></p>');
  
  return (correctAuthor, quoteToDisplay);
};

function checkAnswer(guessedAuthor, correctAuthor){
  if (guessedAuthor == correctAuthor){
    console.log('CORRECT');
    var answerStatus = 'correct';
  }
  else{
    console.log('INCORRECT')
    var answerStatus = 'incorrect'
  }
  setStatus(answerStatus);
};

function setStatus(answerStatus){
  //count the questions?
  if (answerStatus == 'correct'){
    $('#q1').css('color', '#00FF00')
  }
  else {
    $('#q1').css('color', '#FF0000')
  }
};

$(document).ready(function() {

loadInstructions();

$('.instructions').on('click', function(event){
  $(this).animate({opacity: 0, duration: "slow", easing: "easein"});
  newGame();
  });


$('.buttonTyrion').on('click', function(correctAuthor){
  var guessedAuthor = 'tyrion';
  // correctAuthor = correctAuthor.value();
  console.log('from tyrion button guessed - <' + guessedAuthor + '> - correct <' + correctAuthor + '>.')
  checkAnswer(guessedAuthor, correctAuthor);
});



});