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

    // reset the score on a page load
    $("#wins").text("Wins = " + wins);
    $("#losses").text("Losses = " + losses);

    function start() {
        $("#currentScore").text("Current Score is: " + currentScore);

        // Generate the random target number, kept separate from the gem function because I wanted to pass through 19-120 to make sure to get this entire interval in my random number generator here
        function goldenNumber(min, max) {
            ranNum = Math.floor(Math.random() * (max - min)) + min;
            $("#ranNumBox").append(ranNum);
        } // End goldenNumber

        // Generate random values for each gem (variable)
        function resetGem() {
            return Math.floor(Math.random() * 12) + 1;
        } // End resetGem

        // below will push my resetGem function, or randomly generated gem values into this new array to use later
        crystalArray = [];
        for (let i = 0; i < 4; i++) {
            crystalArray.push(resetGem());
            console.log(crystalArray);
        }
        goldenNumber(19, 120);
        resetGem();
    } // End start
    start();

    // These push the randomly generated gem values into the currentScore array
    $("#redGem").on("click", function() {
        gamePlay(crystalArray[0]);
    });
    $("#blueGem").on("click", function() {
        gamePlay(crystalArray[1]);
    });
    $("#yellowGem").on("click", function() {
        gamePlay(crystalArray[2]);
    });
    $("#greenGem").on("click", function() {
        gamePlay(crystalArray[3]);
    });
    // red = 0, blue = 1, yellow = 2, green = 3

    // Game Play: increments current score, wins, and losses.
    function gamePlay (gameScore) {
        currentScore += gameScore;
        $("#currentScore").text("Current score is: " + currentScore);
        if (currentScore > ranNum) {
            losses++;
            $("#losses").text("Losses: " + losses);
            console.log(currentScore);
            console.log(crystalArray);
            console.log(losses);
        } else if (currentScore === ranNum) {
            
            wins++;
            $("#wins").text("Wins: " + wins);
            console.log(currentScore);
            console.log(crystalArray);
            console.log(wins);
        }
    } // End gamePlay
}); // End document.ready