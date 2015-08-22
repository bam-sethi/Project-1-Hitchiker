// $(document).ready(function(){
//   console.log('hey jquery')
//   buttonClick();


// });

// function buttonClick(){
// $('#play-button').on('click', function(){
//   console.log('Clicked!');

  // moveShip();


  // showSpaceShip();
  // var moveRandomShip = setInterval(moveShip, 1000);
  // console.log(moveRandomShip);
  // clickSpaceShip();
// });
// };

//

///create a random position function
//create a show ship function with a 2 sec duration
//if ship is clicked add to score
//else show ship again
// function showSpaceShip(){
// var count = 0;


// function moveShip(){  

  //var position = $('#ship1').position();
//      $('#ship1').css('left', position.left + 20 + 'px');



    var newLeft = Math.floor(Math.random() * $('#board').width());
    console.log(newLeft)
    var newTop = Math.floor(Math.random() * $('#board').height());
    // console.log(newTop)
    // $('#ship1').css({'left' newLeft + 'px', 'top': newTop + 'px'});
    // ship.css({'left': newLeft, 'top': newTop});
    // var ship = $('#board').html('<img id="ship1" src="images/ship1.png" />').css({'left': newLeft, 'top': newTop});
    // ship.show();


// };

$(document).ready(function(){

  var ship1 = '<div id ="ship1"></div>';
  $("#board").append(ship1);


$(this).keydown(function(){

var position = $('#ship1').position();

switch (event.keyCode)
{
  // case 37: //Left
  // $("#ship1").css('left', position.left - 20 + 'px')
  // break;
  case 37: //Left
  var newLeft = Math.floor(Math.random() * $('#board').width());
  console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  $("#ship1").css({'left': newLeft, 'top': newTop})
  break;
  case 38: //Up
  $("#ship1").css('top', position.top - 20 + 'px')
  break;
  case 39: //Right
  $("#ship1").css('left', position.left + 20 + 'px')
  break;
  case 40: //Down
  $("#ship1").css('top', position.top + 20 + 'px')
  break;

  }
});

});
// function showShip(x,y){
//   $('#ship1').show().css({'left': newLeft, 'top': newTop});
// }



// .width()
// .height()




//Click the Space ship and it dissapears
function clickSpaceShip(event){
  var spaceShipDissapear= $('#ship1').on('click', function(){
    console.log('this', this);
    ///turn this in to an explode function(where it will add a new image to the page and then dissapear)
    $(this).hide();
  })  
};
