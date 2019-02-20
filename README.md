# Crystal Collector Game

This is a simply, yet fun and addicting math game for which the goal is to match your current score to the target number.

[Play now!](https://amfirebaugh.github.io/unit-4-game/)

## How it Works

A target number between 19 and 120 is randomly generated and displayed. Four gems are also displayed on the page that are each assigned a randomly generated number between 1-12. When the user clicks on a gem, their current score is increased by the value of that gem at the time. The user continues to click on the various gems until they either match the target number, or their current score is greater than the target number. If they match the target number, a win is incremented, and if their current score exceeds the target number then a loss is incremented. Wins and losses are also displayed on the page. As soon as a win or loss occurs, a new target number is randomly generated, and the four gems will also have a new value as well.

### Technologies

HTML, CSS, jQuery

### Future Development

As this was an early assignment in my coding bootcamp, there is much room for growth for this application. If the user decides to refresh the page, their scores are lost. Therefore, for a simple application like this the usage of local storage might be an ideal upgrade to its current state. It also is not a responsive website and could use a CSS framework, or media queries, to accommodate this.
