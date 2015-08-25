//how many times ships appear//alter this altr game length
var roundCount;
//array of spaceships
var spaceships = [];
var spaceshipInterval;
var score;
var sum;

$(document).ready(function(){
  $("#play-button").one('click', startGame)
});


function startGame() {
  roundCount = 0;
  score = 0;
  $('#start-screen').hide()
  var gameScreen = '<div class = "game-screen"></div>';
  $('#board').html(gameScreen);
  changeBackgroundThenCreateShip();
};


//when play button clicked ^ change splash screen to game screen
function changeBackgroundThenCreateShip(){
    // $('#start-screen').hide()
    // var gameScreen = '<div class = "game-screen"></div>';
    // $('#board').html(gameScreen);

    // create ship only after background has been changed
    // every n secs delete all ships and create new ones
    createSpaceship();
    spaceshipInterval = setInterval(function(){
    spaceships.forEach(function(element, index) {
      //remove it from the board
      element.fadeOut(50).remove();
    })
    //remove it from the array
    spaceships.splice(0);
    //then run create again
    createSpaceship();
  }, 1500) ; 
};

function createSpaceship(){
  //round count the number of rounds
  if (roundCount >= 10) {
    endScreen()
    console.log(roundCount)
    console.log('why')
    // console.log(spaceshipInterval)
    spaceships.splice(0)
    for (var i = 1; i < 99999; i++) {
      this.clearInterval(i);
    }
    console.log('play the damn game!')
  } 
  else {
    console.log('hi')
    console.log(roundCount);
    var ship = $('<div class="ship"></div>');

    // adding more ships if score is higher
    console.log(score);
    console.log(sum);
    getScore();

    var numShips = 3;
    if (sum > 50){
    console.log('ship50');
    numShips = 10;
    }
    for (var j = 0; j < numShips; j++) {
      var clonedShip = ship.clone()
      spaceships.push(clonedShip);
      randomPos(clonedShip);
    }  

    roundCount++;
    clickSpaceShip();
  }
}

function randomPos(ship){
  $('#board').append(ship)
  ship.hide().fadeIn(50);
  // console.log(count);
  var newLeft = Math.floor(Math.random() * $('#board').width());
  // console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  $(ship).css({'left': newLeft, 'top': newTop, 'opacity': '1'})
};

//if ship is clicked add to score else show ship again
//Hide and Show space ship on Click and count Score to display to user

function clickSpaceShip(event){
  $('.ship').on('click', function(){
    console.log('spaceship this', this);
    var explode ='<img src="http://i.imgur.com/ROvcbz5.png" alt="explosion" class="explode">'
    $(this).html(explode).show()
    score++;
    getScore()
  })
};


function getScore(){
  console.log(score);
  sum = score * 10;
  console.log(sum);
  $('#left-col').html("score: " + sum);
}

function endScreen() {
  var gameOver = '<div id ="game-over">GAME OVER<img src="http://i.imgur.com/sKWrXQi.png" alt="vogon" class="vogon"><button class="play" id="play-again">PLAY AGAIN</button></div>'
  var end = $('#board').html(gameOver);
  playAgainButtonListener();
}


function playAgainButtonListener(){
  $("#play-again").on('click', startGame);
}

//if score greater than 50 make interval shorter



