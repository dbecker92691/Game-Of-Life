# Rasa-Game-Of-Life


According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:
* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by over-population..
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
* Write a function to compute the next state (after one update) of the board given its current state.

// Example:
nextGeneration([
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0]
])

// Will return:
[
  [1, 1, 0],
  [0, 0, 1],
  [1, 1, 0]
]


- game-of-life-logic.js is the logic for the game provided the example given.

- full-game-of-life.js is a full version of the game start to finish with the ability to produce a grid with M x N cells, and populate them as alive or dead randomly, then evlolve said grid into the new outcome. To execute this, update the vars gridHeight && gridWidth to be equal numbers.



time it took:
- 3 hours (broken up over the day) of coding + a few extra to learn about what the game of life is

Sources: 
- https://en.wikipedia.org/wiki/The_Game_of_Life
- https://www.youtube.com/watch?v=ouipbDkwHWA
- https://www.w3schools.com/js/js_random.asp
- https://www.w3schools.com/js/js_switch.asp
 
Help recieved: 
- Sent to a friend to have him check/test my code


Prolems and hardships:
- Biggest issue was with writing the evolution logic. I used a switch case to provide the evloution conditions. 
However I kept having my new generations come back as largely 'undefined'. The problem was not accounting for out of bounds or NaN values. To fix it I added a try catch block to accurately check a cell's neighbor accounting for the previous mistake.

- updated try catch to be function that checks the cell to see if it's in/out of bounds. The following evolveGrid function will run the switch case block to execute evolution rules.


Things I learned:
- The try catch block was imparitive to get my evolution logic working. The problem centered around not having an accurate representation of alive and dead cells before I was entering my switch case block. Once I figured that out everything started working as I had it. 



