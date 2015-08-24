$(document).ready(function(){
    startScreen();
$("#play-button").one('click',function(){
  randomPos();
  clickSpaceShip();
});

function startScreen() {
  var startGame = '<div id = "start-screen">INSTRUCTIONS:<button class="play" id="play-button">PLAY</button></div>';
  var start = $('#board').html(startGame);

}

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
    if (count === 4){
      console.log('end')
      clearTimeout(time);
      endScreen();

    }
};

});//end


function endScreen() {
  var gameOver = '<div id ="game-over">GAME OVER<button class="play" id="play-again">PLAY AGAIN</button></div>'
  var end = $('#board').html(gameOver);
}

// var ships = []

//if ship is clicked add to score
//else show ship again


//Hide and Show space ship on Click 
//Count Score
var score = 0;
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
        score++;
        getScore()
    }
  })
};

function getScore(){
console.log(score)
var sum = score * 10;
console.log(sum);
var map = $('#right-col').html("Your Score: " + sum);
}












