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
        "assets/images/tiffany4.jpg"
    ];

    //Sets the random result anywhere between 19 and 102
    random_result = Math.floor((Math.random() * 102) + 19);

    $("#results").html("Random Score: " + random_result);

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
            "background-image": "url('" + crystalImages[i] + "')",
            "background-size": "cover"
        });

        $(".crystals").append(crystal)
    }


    $("#score").html("Your Score: " + previousAmt);
}

resetAndStart();

$(document).on("click touchstart", ".crystal", function () {

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