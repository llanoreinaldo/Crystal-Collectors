### File

* [Crystal Collector](https://llanoreinaldo.github.io/Crystal-Collectors/)

# Crystal Collectors Game

### INSTRUCTIONS

* For this project I used HTML, Bootstrap 4.0 (and some CSS), and JQuery to create a Crystal Collectors website that can be played on desktop as well as PC.  Below are some functionality notes:

    1. The game was designed for mobile first, and then upscaled to a desktop size using media queries in CSS.  The images used for the crystal and to style the site were taking from Tiffany's website.

    3. For the game logic, I used jQuery.

    4. The game creates four crystals that are displayed as buttons on the page.  The player will be shown a random score at the start of the game.  When the player clicks on a crystal ring, it will add a specific amount of points to the player's total score.  A value between 1 and 12 is randomly assigned to each crystal on each click and is hidden from the player.  When they click on the crystal, the player's score is dplayed in the Game Stats.  The value of the score is added to the player's score after each click. The player wins if their score matches the random score assigned at the beginning of the game.  The player looses if their score goes above the random score.  The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


* Outstanding design issues:

    None