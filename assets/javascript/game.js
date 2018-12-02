$(document).ready(function() {

    // global variables:

    var ranNum;
    var wins = 0;
    var losses = 0;
    var crystalArray;
    var currentScore = 0;

    // const reducer = (a, b) => a + b;
    // console.log(currentScore.reduce(reducer));
    // Two lines above were (old) attempts for trying to sum up an array to keep the currentScore counting on the page. I found a much better way, but I wanted to keep this for future reference since I spent time learning about the reduce function.

    // Adding in sound effects as a bonus:

    var crystalClick = new Audio("assets/sounds/gem.mp3");
    var winSound = new Audio("assets/sounds/win.mp3");
    var lossSound = new Audio("assets/sounds/loss.mp3");

    // reset the score on a page load
    $("#wins").text("Wins = " + wins);
    $("#losses").text("Losses = " + losses);

    function start() {
        currentScore = 0;
        $("#currentScore").text("Current Score is: " + currentScore);

        // Generate the random target number, kept separate from the gem function because I wanted to pass through 19-120 to make sure to get this entire interval in my random number generator here
        function goldenNumber(min, max) {
            ranNum = Math.floor(Math.random() * (max - min)) + min;
            $("#ranNumBox").text(ranNum);
        } // End goldenNumber

        // Generate random values for each gem (variable)
        function resetGem() {
            return Math.floor(Math.random() * 12) + 1;
        } // End resetGem

        // below will push my resetGem function, or randomly generated gem values into this new array to use later
        crystalArray = [];
        for (let i = 0; i < 4; i++) {
            crystalArray.push(resetGem());
            console.log(crystalArray[i]); // Shows you the randomly generated gem values in the console if you feel like cheating the game, lol.
        }
        goldenNumber(19, 120);
        resetGem();
    } // End start
    start();

    // These push the randomly generated gem values into the currentScore array
    $("#redGem").on("click", function() {
        gamePlay(crystalArray[0]);
        crystalClick.play();
    });
    $("#blueGem").on("click", function() {
        gamePlay(crystalArray[1]);
        crystalClick.play();
    });
    $("#yellowGem").on("click", function() {
        gamePlay(crystalArray[2]);
        crystalClick.play();
    });
    $("#greenGem").on("click", function() {
        gamePlay(crystalArray[3]);
        crystalClick.play();
    });
    // red = 0, blue = 1, yellow = 2, green = 3

    // Game Play: increments current score, wins, and losses.
    function gamePlay (gameScore) {
        currentScore += gameScore;
        $("#currentScore").text("Current score is: " + currentScore);
        if (currentScore > ranNum) {
            losses++;
            start();
            $("#losses").text("Losses: " + losses);
            lossSound.play();
        } else if (currentScore === ranNum) {
            wins++;
            start();
            $("#wins").text("Wins: " + wins);
            winSound.play();
        }
    } // End gamePlay
}); // End document.ready