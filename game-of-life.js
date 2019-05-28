/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules:
* Any live cell with fewer than two live neighbors dies, as if caused by under-population.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by over-population..
* Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
* Write a function to compute the next state (after one update) of the board given its current state.
*/
// Example:
// nextGeneration([
//   [1, 1, 1],
//   [1, 0, 0],
//   [1, 1, 0]
// ])

// // Will return:
// [
//   [1, 1, 0],
//   [0, 0, 1],
//   [1, 1, 0]
// ]


// create grid of m, n length (start with 3x3)
const gameGrid = [];
const gridHeight = 3;
const gridWidth = 3;
const gridRows = gridWidth;


const createArray = (rows) => {
	for(let i = 0; i < rows; i++){
		gameGrid[i] = []
	}

	return gameGrid;
}

createArray(gridRows);
console.log(gameGrid, "<--- original game grid");


// populate grid

const populateGrid = (height, width) => {
	for(let j = 0; j < height; j++){
		for(let k = 0; k < width; k++){

			const getRandomNumber = Math.floor(Math.random() * 2);

			if(getRandomNumber === 1){
				gameGrid[j][k] = 1
			}else{
				gameGrid[j][k] = 0
			}
		}
	}
}
	
populateGrid(gridHeight, gridWidth);
console.log(gameGrid, "<--- populated game grid");


// loop through grid to get value at array[h][v]
// log values as alive (1) or dead (0)

const evolveGrid = (gridHeight, gridWidth) => {
	for(let j = 1; j < gridHeight - 1; j++){
		for(let k = 1; k < gridWidth - 1; k++){

			// log values as alive (1) or dead (0)

			let allCells = 0;

			allCells += gameGrid[j - 1][k - 1]; // top left cell
			allCells += gameGrid[j - 1][k]; // top center
			allCells += gameGrid[j - 1][k + 1]; // top right
			allCells += gameGrid[j][k - 1]; // center left
			allCells += gameGrid[j][k]; // center
			allCells += gameGrid[j][k + 1]; // center left
			allCells += gameGrid[j + 1][k - 1]; //botton left
			allCells += gameGrid[j + 1][k]; // bottom center
			allCells += gameGrid[j + 1][k + 1]; // bottom right

			// add logic to dead cells

			console.log(allCells);
		}
	}
}

evolveGrid(gridHeight, gridWidth);

 

/* Sources: 

https://en.wikipedia.org/wiki/The_Game_of_Life

https://www.w3schools.com/js/js_random.asp
 
*/



