$(document).ready(function(){
  


$("#play-button").on('click',function(){
  var limit = 5;
  for(var i = 0; i < limit; i ++){ randomPos(); };
  clickSpaceShip();

});


var ship1 = '<div id ="ship1"></div>';
$("#board").append(ship1);
var position = $('#ship1').position();

///generates a random position on the board, applies it to ship every 2 secs
function randomPos(){
  // for(var i = 0; i < limit; i ++){
  var newLeft = Math.floor(Math.random() * $('#board').width());
  console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  $("#ship1").css({'left': newLeft, 'top': newTop})
  setTimeout(randomPos, 2000);
    // setTimeout(randomPos, 2000);
}
});



//if ship is clicked add to score
//else show ship again



//Click the Space ship and it dissapears

function clickSpaceShip(event){

  var spaceShipDissapear= $('#ship1').on('click', function(){
    if(spaceShipDissapear = true){
    console.log(this)
    $(this).toggle(400);
    };
  })  
};
