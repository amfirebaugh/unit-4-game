$(document).ready(function() {

    // global variables:

    var ranNum;
    var wins = 0;
    var losses = 0;
    var crystalArray;
    var currentScore = 0;
    // var ranRed;
    // var ranBlue;
    // var ranGreen;
    // var ranYellow;
    // var sum = [];

    const reducer = (a, b) => a + b;
    // console.log(currentScore.reduce(reducer));
    // Tried using the two above lines to test adding my current score instead my current situation...seemed to fail....but honestly idk...currently trying to fix the NaN's at my onclick's...

    // reset the score on a page load
    $("#wins").text("Wins = " + wins);
    $("#losses").text("Losses = " + losses);

    function start() {
        $("#currentScore").text("Current Score is: " + currentScore);

        // Generate the random target number, kept separate from the gem function because I wanted to pass through 19-120 to make sure to get this entire interval in my random number generator here
        function goldenNumber(min, max) {
            ranNum = Math.floor(Math.random() * (max - min)) + min;
            $("#ranNumBox").append(ranNum);
        }

        // Generate random values for each gem (variable)
        function resetGem() {
            return Math.floor(Math.random() * 12) + 1;
        }

        // below will push my resetGem function, or randomly generated gem values into this new array to use later
        crystalArray = [];
        for (let i = 0; i < 4; i++) {
            crystalArray.push(resetGem());
            console.log(crystalArray); // this works and puts each gem into the array
        }
        goldenNumber(19, 120);
        resetGem();
    }
    start();
    
    console.log(currentScore); // 0 (which is good at this level)

    // These push the randomly generated gem values into the currentScore array

    // ************************************************** I think these lines below might be where my application is breaking...

    $("#redGem").on("click", function() {
        gamePlay(crystalArray[0]);
        console.log(currentScore); // NaN
        console.log(crystalArray.reduce(reducer)); // just a test to check reduce function. it does work...
    });

    $("#blueGem").on("click", function() {
        gamePlay(crystalArray[1]);
        console.log(currentScore); // NaN
        console.log(crystalArray.reduce(reducer));
    });

    $("#yellowGem").on("click", function() {
        gamePlay(crystalArray[2]);
        console.log(currentScore); // NaN
        console.log(crystalArray.reduce(reducer));
    });

    $("#greenGem").on("click", function() {
        gamePlay(crystalArray[3]);
        console.log(currentScore); // NaN
        console.log(crystalArray.reduce(reducer)); // this does add the numbers inside the current [random] crystal array based on those current random gem values... so this could potentially work for something... maybe... it's just not working for currentScore
    });
    // red = 0, blue = 1, yellow = 2, green = 3

    // Game Play: increments current score, wins, and losses.
    function gamePlay (gameScore) {
        console.log(currentScore); 
        console.log(crystalArray);

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
            $("wins").text("Wins: " + wins);
            console.log(currentScore);
            console.log(crystalArray);
            console.log(wins);
        }
    }

});