$(document).ready(function(){
  console.log('hey jquery')
  buttonClick();
});

function buttonClick(){
$('#play-button').one('click', function(){
  console.log('Clicked!');
  // showSpaceShip();
  var moveRandomShip = setInterval(moveShip, 1000);
  console.log(moveRandomShip);
});
};

//

///create a random position function

//create a show ship function with a 2 sec duration

//if ship is clicked add to score

//else show ship again

// function showSpaceShip(){

var count = 0;
function moveShip(){
var ship = $('#board').prepend('<img id="ship1" src="images/ship_1.png" />');
var ship = $('#ship1');
    count++;
    var newLeft = Math.random() * ($('#board').width() - ship.width());

    var newTop = Math.random() * ($('#board').height() - ship.height());
    ship.css({'left': newLeft, 'top': newTop});

};






//Click the Space ship and it dissapears
function clickSpaceShip(event){
  var spaceShipDissapear= $('#ship1').on('click', function(){
    console.log('this', this);
    ///turn this in to an explode function(where it will add a new image to the page and then dissapear)
    $(this).hide();
  })  
};
