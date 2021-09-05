
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
      $(value).css('color', '#808080');
  })
  getRandomQuote();
};

var quotes = [
    "tyrion--Turns out, far too much has been written about great men and not nearly enough about morons.",
    "tyrion--I'm quite good at spending money, but a lifetime of outrageous wealth hasn't taught me much about managing it.",
    "tyrion--It's not easy being drunk all the time. Everyone would do it if it were easy.",
    "tyrion--Why are you sorry? Because you're an evil bastard with no conscience and no heart? That's what I liked about you in the first place.", 
    "tyrion--I'm not particularly good at violence, but I'm good at convincing others to do violence for me.",
    "tyrion--When I was ten, I stuffed my uncle's boots with goat shit.",
    "tyrion--Cut off his manhood and feed it to the goats.",
    "tyrion--I'm not questioning your honor, Lord Janos. I'm denying its existence.", 
    "tyrion--You love your children. It's your one redeeming quality - that and your cheekbones.", 
    "tyrion--I've offended you. Forgive me. It's been a rough morning. Anyway, don't despair. I'm a constant disappointment to my own father and I've learned to live with it",
    "tyrion--I demand a trial by combat!", 
    "tyrion--I don't pay you to put evil notions in my head. The ones already there don't need company.", 
    "dali--Intelligence without ambition is a bird without wings.",
    "dali--There is only one difference between a madman and me. The madman thinks he is sane. I know I am mad.",
    "dali--The first man to compare the cheeks of a young woman to a rose was obviously a poet; the first to repeat it was possibly an idiot.",
    "dali--There are some days when I think I'm going to die from an overdose of satisfaction.",
    "dali--Let my enemies devour each other.",
    "dali--The secret of my influence has always been that it remained secret.",
    "dali--Liking money like I like it, is nothing less than mysticism. Money is a glory.",
    "dali--I seated ugliness on my knee, and almost immediately grew tired of it.",
    "dali--Democratic societies are unfit for the publication of such thunderous revelations as I am in the habit of making.",
    "dali--What is important is to spread confusion, not eliminate it.",
    "dali--Intelligence without ambition is a bird without wings.",
    "dali--It is not necessary for the public to know whether I am joking or whether I am serious, just as it is not necessary for me to know it myself.",
    "dali--So little of what could happen does happen.",
    "dali--I am not strange. I am just not normal.",
    "dali--You have to systematically create confusion, it sets creativity free. Everything that is contradictory creates life."
  ];

var gUsedQuotes = [];

var gCorrectAuthor = '';

var gGameStatus = 1;

var gActiveQuestion = '#q'+gGameStatus.toString();

var playerProgression = 0;

var gameEnd = 5;

var questionsAsked = 0;

function nextQuote(){

  // end game a 5
  questionsAsked = questionsAsked + 1;
  console.log("Number of questions asked = " + questionsAsked);
  if (questionsAsked == 5) {
    console.log("You scored a " + playerProgression + " out of "+ questionsAsked)


  $('.questions')
    .children('p')
    .empty()
    .append('You scored a ' + playerProgression + ' out of ' + questionsAsked + '! </br>' + ' Reload to try again!');
  
    //Hide the buttons here
    $( "#dali" ).hide();
    $( "#tyrion" ).hide();

  }
 
  else{
      getRandomQuote();
      gGameStatus += 1;
      gActiveQuestion = '#q'+gGameStatus.toString();
      $(gActiveQuestion).css('color', '#C300FF');
  }

 

  return gActiveQuestion;

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
    getRandomQuote(); 
    return false;
  }
  console.log(correctAuthor, quoteToDisplay);
  $('.questions')
    .children('p')
    .empty()
    .append('<p><i class="fa fa-quote-left fa-1x"></i>' + quoteToDisplay + '<i class="fa fa-quote-right fa-1x"></i></p>');
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
  console.log(gActiveQuestion);
  var tempId = gActiveQuestion.split('#')[1];
  console.log(tempId);
  if (answerStatus == 'correct'){
    $(gActiveQuestion).css('color', '#00FF00');
    document.getElementById(tempId).className = "fa fa-check-circle fa-3x";
    playerProgression = playerProgression + 1;
    console.log(playerProgression);
  }
  else {
    $(gActiveQuestion).css('color', '#FF0000');
    document.getElementById(tempId).className = "fa fa-times-circle fa-3x";
    playerProgression = playerProgression + 0;
    console.log(playerProgression);
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