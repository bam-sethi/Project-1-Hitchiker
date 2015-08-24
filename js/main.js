///generates a random position on the board, applies it to ship every 2 secs
var count = 0;

$(document).ready(function(){
  playButtonListener();
});//end doc ready

function playButtonListener() {
  $("#play-button").one('click',function(){
    changeBackgroundThenCreateShip();
  });
};

function changeBackgroundThenCreateShip(){
    $('#start-screen').hide()
    var gameScreen = '<div class = "game-screen"></div>';
    $('#board').html(gameScreen);

    // create ship after b/g has been changed
    createSpaceship();  
};

function createSpaceship(){
  var ship1 = '<div id="ship1"></div>';
  $("#board").append(ship1);
  // only change position once it's been created
  randomPos();
  clickSpaceShip();
}

function randomPos(){
  count++;
  // debugger

  var position = $('#ship1').position();

  // console.log(count);
  var newLeft = Math.floor(Math.random() * $('#board').width());
  // console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  $("#ship1").css({'left': newLeft, 'top': newTop})
  var time = setTimeout(randomPos, 1500);

    // debugger;
    ///change count to higher num
  if (count === 4){
    console.log('end')
    clearTimeout(time);
    endScreen();
  }
};


// var ships = []

//if ship is clicked add to score
//else show ship again


//Hide and Show space ship on Click 
//Count Score
var score = 0;

///find a way to call what is clicked on, not the specific ship
function clickSpaceShip(event){
  console.log(this);
//use event.target but will have to define what the target is 
//like maybe class target?
//look up handller
//diff between this and event target
  $('#ship1').on('click', function(){
    console.log('spaceship this', this);
    $("#ship1").hide().delay(500).queue(function(n) { $(this).show(); n();});
    score++;
    getScore()
  })
};
// function explode() {
//   var explode ='<img src="http://i.imgur.com/ROvcbz5.png" alt="explosion" class="explode">'
//   $('#ship1').html(explode).css({'display': ''});
// }

function getScore(){
  console.log(score)
  var sum = score * 10;
  console.log(sum);
  var map = $('#right-col').html("Your Score: " + sum);
}

function endScreen() {
  var gameOver = '<div id ="game-over">GAME OVER<button class="play" id="play-again">PLAY AGAIN</button></div>'
  var end = $('#board').html(gameOver);
  playAgain();
}


function playAgain(){
    $("#play-again").one('click',function(){
    changeBackgroundThenCreateShip();
  });

}










