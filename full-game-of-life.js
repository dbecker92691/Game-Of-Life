// create grid of m, n length (start with 3x3)
const gameGrid = [];
const newGeneration = [];
const gridHeight = 5;
const gridWidth = 5;
const gridRows = gridWidth;


const createArray = (rows) => {
	for(let i = 0; i < rows; i++){
		gameGrid[i] = [],
		newGeneration[i] = [];

	}

	return gameGrid && newGeneration;
}

createArray(gridRows);
console.log(gameGrid, "<--- original game grid");
console.log(newGeneration, "<----- new generation")

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
			let numberOfNeighbors = 0;

			numberOfNeighbors += gameGrid[j - 1][k - 1]; // top left cell
			numberOfNeighbors += gameGrid[j - 1][k]; // top center
			numberOfNeighbors += gameGrid[j - 1][k + 1]; // top right
			numberOfNeighbors += gameGrid[j][k - 1]; // center left
			numberOfNeighbors += gameGrid[j][k]; // center
			numberOfNeighbors += gameGrid[j][k + 1]; // center left
			numberOfNeighbors += gameGrid[j + 1][k - 1]; //botton left
			numberOfNeighbors += gameGrid[j + 1][k]; // bottom center
			numberOfNeighbors += gameGrid[j + 1][k + 1]; // bottom right

			console.log(numberOfNeighbors, "<--- counted cells");
			
			// add logic to dead cells
			if(gameGrid[j][k] === 0){
				switch(numberOfNeighbors){

					// if dead cell has === 3 neighbors revive it
					case 3: 
						newGeneration[j][k] = 1;
						break;

					// else leave dead
					default: 
						newGeneration[j][k] = 0;
					}

					//add logic to dead cells
			}else if(gameGrid[j][k] === 1){
				switch(numberOfNeighbors){

					case 0: // do nothing
						newGeneration[j][k] = gameGrid[j][k];
						break;

					//kill cell if under populated
					case 1: 
						newGeneration[j][k] = 0;
						break;

					case 2: // do nothing
						newGeneration[j][k] = gameGrid[j][k];
						break;

					// cell continues to live
					case 3: 
						newGeneration[j][k] = 1;
						break;

					// do nothing
					case 4: 
						newGeneration[j][k] = gameGrid[j][k];
						break;

					// do nothing
					case 5:
						newGeneration[j][k] = gameGrid[j][k];
						break;
					// do nothing
					case 6:
						newGeneration[j][k] = gameGrid[j][k];
						break;

					// do nothing
					case 7:
						newGeneration[j][k] = gameGrid[j][k];
						break;

					// kill due to over population
					case 8: 
						newGeneration[j][k] = 0;
						break;

					default: 
						newGeneration[j][k] = 0; 
				}
			}
		}
	}

	// return new generation

	for(let j = 0; j < gridHeight; j++){
		for(let k = 0; k < gridWidth; k++){
			gameGrid[j][k] = newGeneration[j][k];
		}
	}
}

evolveGrid(gridHeight, gridWidth);
console.log(gameGrid, "<---- new generation")

evolveGrid(gridHeight, gridWidth);
console.log(gameGrid, "<---- third gen");




