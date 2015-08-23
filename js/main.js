$(document).ready(function(){
  


  $("#play-button").one('click',function(){
    randomPos();
    clickSpaceShip();
  });



var ship1 = '<div id ="ship1"></div>';
$("#board").append(ship1);
var position = $('#ship1').position();

///generates a random position on the board, applies it to ship every 2 secs
  var count = 0;
function randomPos(){
  count++;
  // console.log(count);
  var newLeft = Math.floor(Math.random() * $('#board').width());
  // console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  $("#ship1").css({'left': newLeft, 'top': newTop})
  var time = setTimeout(randomPos, 1500);
    // debugger;
    ///change count to higher num
    if (count === 5){
      console.log('end')
      clearTimeout(time);
    }
};

});//end


//if ship is clicked add to score
//else show ship again

var score = 0;

//Click the Space ship and it dissapears

function clickSpaceShip(event){
  var clickShip = $('#ship1').on('click', function(){
      console.log(this);
      // $(this).hide(400);
    if (clickShip = true) {
        console.log('clicked');
        console.log(this);
        $("#ship1").hide().delay(300).queue(function(n) {
        $(this).show(); n();
        });
    }
      
    })
};
        // score++;
        // console.log(score)


