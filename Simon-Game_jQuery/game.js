var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;

$(document).on("keydown", function() {
    if (!started) {
  
      // The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
      $("h1").text("Level " + level);
      nextSequence();
      started = true;
    }
});

// $(document).one("keydown", function(){
//     nextSequence();
// })

$(".btn").on("click", function(event){
    var userChosenColour = this.classList[1];
    userClickedPattern.push(userChosenColour);
    // console.log(event);
    // console.log(userClickedPattern);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence(){
    // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed")}, 100);
}

function checkAnswer(currentLevel){
    // Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");

        // If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userClickedPattern.length === gamePattern.length){

            // Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function(){
              nextSequence();
            }, 1000);
        }
    }else{
        console.log("wrong");
        playSound("wrong");

        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200)

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

    console.log(gamePattern);
    console.log(userClickedPattern);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}

