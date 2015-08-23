

///create a random position function
//create a show ship function with a 2 sec duration
//if ship is clicked add to score
//else show ship again


$(document).ready(function(){
  


$("#play-button").on('click',function(){
  random();

});


var ship1 = '<div id ="ship1"></div>';
$("#board").append(ship1);
var position = $('#ship1').position();

function random(){
  var limit = 10;
  for(var i = 0; i < limit; i ++){
  var newLeft = Math.floor(Math.random() * $('#board').width());
  console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  var newPos = $("#ship1").css({'left': newLeft, 'top': newTop})
  console.log(newPos)
  }
    setInterval(random, 2000);
}


});




// //Click the Space ship and it dissapears
// function clickSpaceShip(event){
//   var spaceShipDissapear= $('#ship1').on('click', function(){
//     console.log('this', this);
//     ///turn this in to an explode function(where it will add a new image to the page and then dissapear)
//     $(this).hide();
//   })  
// };
