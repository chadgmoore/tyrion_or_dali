// make sure quote isn't already used
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
  getRandomQuote();
};

var quotes = [
    "tyrion--Turns out, far too much has been written about great men and not nearly enough about morons.",
    "tyrion--I'm quite good at spending money, but a lifetime of outrageous wealth hasn't taught me much about managing it.",
    "dali--Intelligence without ambition is a bird without wings."

  ];

var gUsedQuotes = [];

var gCorrectAuthor = '';

var gGameStatus = 1;

//nextQuote function to get quote and answer and display
function nextQuote(){
  getRandomQuote();
  gGameStatus += 1;
  activeQuestion = '#q'+gGameStatus.toString();
  $(activeQuestion).css('color', '#808080');
};


function getRandomQuote(){
  var foundQuote = Math.floor(Math.random()*quotes.length);
  var correctAuthor = quotes[foundQuote].split('--')[0];
  var quoteToDisplay = quotes[foundQuote].split('--')[1];
  isUsed = $.inArray(quoteToDisplay, gUsedQuotes);
  if (isUsed == -1){
    gUsedQuotes[gUsedQuotes.length] = quoteToDisplay;
  }
  else{
    getRandomQuote(); //I HAVE A BAD FEELING ABOUT THIS
  }
  console.log(correctAuthor, quoteToDisplay);
  $('.questions').children('p').empty();
  $('.questions').children('p').append('<p><i class="fa fa-quote-left fa-1x"></i>' + quoteToDisplay + '<i class="fa fa-quote-right fa-1x"></i></p>');
  gCorrectAuthor = correctAuthor;
};

function checkAnswer(guessedAuthor){
  if (guessedAuthor == gCorrectAuthor){
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
    $('#q1').css('color', '#00FF00');
    document.getElementById("q1").className = "fa fa-check-circle fa-3x";
  }
  else {
    $('#q1').css('color', '#FF0000');
    document.getElementById("q1").className = "fa fa-times-circle fa-3x";

  }
};

$(document).ready(function(correctAuthor) {

loadInstructions();

$('.instructions').on('click', function(event){
  $(this).animate({opacity: 0, duration: "slow", easing: "easein"});
  newGame();
  });


$('.ansButton').on('click', function(){
  var guessedAuthor = $(this).attr('id');
  checkAnswer(guessedAuthor);
  nextQuote();
});



});