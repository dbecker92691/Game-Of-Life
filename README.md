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

- full-game-of-life.js is a full version of the game start to finish with the ability to produce a grid with M x N cells, and populate them as alive or dead randomly, then evlolve said grid into the new outcome.



time it took:

3 hours of coding + a few extra minutes to learn about what the game of life is

Sources: 

https://en.wikipedia.org/wiki/The_Game_of_Life

https://www.youtube.com/watch?v=ouipbDkwHWA

https://www.w3schools.com/js/js_random.asp

https://www.w3schools.com/js/js_switch.asp
 
Help recieved: 

Sent to a friend (Alex Baumhoer, Sr. Developer @ ibotta) to have him check/test my code