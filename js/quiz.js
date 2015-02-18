$(document).ready(function() {

$(window).load(function () {
    $('.instructions').delay(1600).animate({
        opacity: 1}), 3000, "easein";
})

$('.instructions').on('click', function(event){
  $(this).animate({
        opacity: 0}), 400, "easeout";
  newGame();
  })


});


function newGame() {
		$('.status').delay(400).animate({opacity: 1}), 2000, "easeout";
        $('.questions').delay(400).animate({opacity: 1}), 2000, "easeout";
        $('.buttonTyrion').delay(800).animate({opacity:1}, 2000, "easeout");
        $('.buttonDali').delay(800).animate({opacity:1}, 2000, "easeout");
        // Set the status icons back to new state
        $('.status', 'ul id=inactiveQuestion');
	};