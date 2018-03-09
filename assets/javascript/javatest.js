//* There will be four crystals displayed as buttons on the page.

//* The player will be shown a random number at the start of the game.
//* Each crystal should have a random hidden value between 1 - 12.

//* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//* Your game will hide this amount until the player clicks a crystal.

//* When they do click one, update the player's score counter.

//The player wins if their total score matches the random number from the beginning of the game.

//* The player loses if their score goes above the random number.

//* The game restarts whenever the player wins or loses.

//  * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

//Game design notes

//* The random number shown at the start of the game should be between 19 - 120.

//Creates initial variables
var random_result;
var losses = 0;
var wins = 0;
var previousAmt = 0;


var resetAndStart = function () {

    $(".crystals").empty(); //empty's the crystals from previous game

    var crystalImages = [
        "assets/images/tiffany1.jpg",
        "assets/images/tiffany2.jpg",
        "assets/images/tiffany3.jpg",
        "assets/images/tiffany4.jpg"];

    //Sets the random result anywhere between 19 and 102
    random_result = Math.floor((Math.random() * 102) + 19);

    $("#results").html("Random Result: " + random_result);

    //Creates crystals and random values and assigns it 
    for (var i = 0; i < 4; i++) {

        //Assigns random value between 1-12 to Crystal
        var random = Math.floor((Math.random() * 11) + 1);


        //Creates crystals on HTML and assigns the random value
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal anime',
            "data-random": random,
        });
        crystal.css({
            "background-image": "url('"+ crystalImages[i]+"')",
            "background-size": "cover"
        });

        $(".crystals").append(crystal)

    }
    $("#score").html("Your Score: " + previousAmt);
}

resetAndStart();

$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr("data-random")); //Gets number from crystal and turns it into a number.


    previousAmt += num; //adds Crystal number to the previoius amount.
    $("#score").html("Your Score: " + previousAmt);


    if (previousAmt > random_result) {
        losses++;
        $("#losses").html("Losses: " + losses);
        previousAmt = 0;
        console.log("Sorry, but you lost!! Play again!");
        resetAndStart();


    } else if (previousAmt === random_result) {
        wins++;

        $("#wins").html("Wins: " + wins);
        console.log("Congratulations, you won!");
        previousAmt = 0;
        resetAndStart();
    }

});