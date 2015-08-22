$(document).ready(function(){
  console.log('hellojquery')
  showSpaceShip();
});

//add a space ship function(later add more ships)
function showSpaceShip(){
  var shipOne = $('#board').prepend('<img id="ship1" src="images/ship_1.png" />')
  clickSpaceShip();
}

//Click the Space ship and it dissapears
function clickSpaceShip(event){
  var spaceShipDissapear= $('#ship1').on('click', function(){
    console.log('this', this);
    ///turn this in to an explode function(where it will add a new image to the page and then dissapear)
    $(this).hide();
  })  
}