///generates a random position on the board, applies it to ship every 2 secs
var count = 0;
var newShip;
var roundCount = 0

var spaceships = []

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
  if (roundCount >= 3) {
    console.log(roundCount)
    // console.log(spaceshipInterval)
    spaceships.splice(0)
    for (var i = 1; i < 99999; i++) {
      window.clearInterval(i);
    }

    console.log('play the damn game!')
  } else {

    // var ship1 = '<div id="ship1" class="ship"></div>';
    // $("#board").append(ship1);

    var ship = $('<div class="ship"></div>');
    for (var i = 0; i < 2; i++) {
      // newShip = $('<div class="ship" />');
      var clonedShip = ship.clone()
      spaceships.push(clonedShip);
      
      randomPos(clonedShip);
    }

    var spaceshipInterval = setInterval(function() {
      roundCount++
      spaceships.forEach(function(element, index) {
        element.fadeOut(50).remove();
      })
      spaceships.splice(0)
      createSpaceship()
    }, 1500)



    // var ship2 = '<div id="ship2" class="ship"></div>';
    // $("#board").append(ship2);
    // only change position once it's been created
    clickSpaceShip();
  }
}

function randomPos(ship){
  // count++;
  // debugger

  // var position = $(ship).position();
  $('#board').append(ship)
  ship.hide().fadeIn(50);

  // console.log(count);
  var newLeft = Math.floor(Math.random() * $('#board').width());
  // console.log(newLeft)
  var newTop = Math.floor(Math.random() * $('#board').height());
  $(ship).css({'left': newLeft, 'top': newTop})
  // var time = setTimeout(randomPos, 1500);



    // debugger;
    ///change count to higher num
  // if (count === 10){
  //   console.log('end')
  //   clearTimeout(time);
  //   endScreen();
  // }
};



// var newShip;
// for (var i = 0; i < 10; i++) {
//     newShip = $('<div class="ship" />').text(i);
//     $('#board').append(newShip);
// }



// function whichShips(firstShip, secondShip) {
//   //how to have many ships appear at the same time at random interval
//   var shipArray = ['ship1', 'ship2']
//   newShip = Math.floor(Math.random() * shipArray.length)

// }


//if ship is clicked add to score
//else show ship again
//Hide and Show space ship on Click 
//Count Score to display to user
var score = 0;

///find a way to call what is clicked on, not the specific ship
function clickSpaceShip(event){
  // console.log(this);
//use event.target but will have to define what the target is 
//like maybe class target?
//look up handller
//diff between this and event target
  $('.ship').on('click', function(){
    console.log('spaceship this', this);
    $(this).hide()
    // .delay(500).queue(function(n) { $(this).show(); n();});
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
  var gameOver = '<div id ="game-over">GAME OVER<img src="http://i.imgur.com/sKWrXQi.png" alt="vogon" class="vogon"><button class="play" id="play-again">PLAY AGAIN</button></div>'
  var end = $('#board').html(gameOver);
  playAgain();
}


function playAgain(){
    $("#play-again").one('click',function(){
    changeBackgroundThenCreateShip();
  });

}










