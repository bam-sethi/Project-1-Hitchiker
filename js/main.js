//how many times ships appear//alter this altr game length
var roundCount = 0;
//array of spaceships
var spaceships = [];


$(document).ready(function(){
  playButtonListener();
});


function playButtonListener() {
  $("#play-button").one('click',function(){
    $('#start-screen').hide()
    var gameScreen = '<div class = "game-screen"></div>';
    $('#board').html(gameScreen);
    changeBackgroundThenCreateShip();
  });
};


//when play button clicked ^ change splash screen to game screen
function changeBackgroundThenCreateShip(){
    // $('#start-screen').hide()
    // var gameScreen = '<div class = "game-screen"></div>';
    // $('#board').html(gameScreen);

    // create ship only after background has been changed
    // every n secs delete all ships and create new ones
    createSpaceship();
    var spaceshipInterval = setInterval(function(){
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
  if (roundCount >= 5) {
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
    console.log(roundCount);
    var ship = $('<div class="ship"></div>');
    for (var j = 0; j < 3; j++) {
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
  $(ship).css({'left': newLeft, 'top': newTop})
};

//if ship is clicked add to score else show ship again
//Hide and Show space ship on Click and count Score to display to user
var score = 0;
function clickSpaceShip(event){
  $('.ship').on('click', function(){
    console.log('spaceship this', this);
    ///\/\/\/\/\/\/
    var explode ='<img src="http://i.imgur.com/ROvcbz5.png" alt="explosion" class="explode">'
    $(this).html(explode).show()
    score++;
    getScore()
  })
};


function getScore(){
  console.log(score);
  var sum = score * 10;
  console.log(sum);
  var map = $('#right-col').html("Your Score: " + sum);
}

function endScreen() {
  var gameOver = '<div id ="game-over">GAME OVER<img src="http://i.imgur.com/sKWrXQi.png" alt="vogon" class="vogon"><button class="play" id="play-again">PLAY AGAIN</button></div>'
  var end = $('#board').html(gameOver);
  playAgain();
}

function playAgain(){
    $("#play-again").on('click',function(){
      $('#game-over').hide()
      var gameScreen = '<div class = "game-screen"></div>';
      $('#board').html(gameScreen);
      roundCount = 0;
     changeBackgroundThenCreateShip(); 
  });
}





// function miserableMarvin(){
//   var marvin =  '<img src="http://i.imgur.com/iBPaawF.png" alt="marvin-the-robot" id="marvin">'
//   $('#board').append(marvin) 
//   console.log(marvin);
//   var newPos= Math.random() * ($('#board').width() - marvin.width());
//   var newPos2 = Math.random() * ($('#board').height() - marvin.height());
//   marvin.css({'left': newPos, 'top': newPos2});

// }

  // var marvinMove = setInterval(miserableMarvin, 1000);
  // console.log(moveShipPos)






