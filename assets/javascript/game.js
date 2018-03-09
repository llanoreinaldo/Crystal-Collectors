$(document).ready(function () {

});

var targetNumber = " ";

$("#random-score").text(targetNumber);

var crystals = $("#crystals");

//Set counter variables for 
var counter = 0;
var wins = 0;
var losses = 0;

//
var randomCrystalValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Now for the hard part. Creating multiple crystals each with their own unique number value.

// We begin by expanding our array to include four options.
var numberOptions = [];

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    crystals.append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
crystals.on("click", ".crystal-image", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    alert("New score: " + counter);

    if (counter === targetNumber) {
        alert("You win!");
    } else if (counter >= targetNumber) {
        alert("You lose!!");
    }

});