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


// loop through grid to get value at array[h][w]
// log values as alive (1) or dead (0)

const retrieveFromGrid = (x, y) => {
	const gridHeight = gameGrid.length;
	const gridWidth = gameGrid[0].length;

		if (x < 0 || x >= gridWidth) {
			return 0;
		}

		if (y < 0 || y >= gridHeight) {
			return 0;
		}

	return gameGrid[x][y];
}

const evolveGrid = (gridHeight, gridWidth) => {
	
	for(let j = 0; j < gridWidth; j++){
		for(let k = 0; k < gridHeight; k++){

			// log values as alive (1) or dead (0)
			let numberOfNeighbors = 0;

			//numberOfNeighbors += gameGrid[j][k]; // center is itself not a neighbor

			numberOfNeighbors += retrieveFromGrid(j - 1, k - 1); // top left cell
			numberOfNeighbors += retrieveFromGrid(j - 1, k); // top center
			numberOfNeighbors += retrieveFromGrid(j - 1, k + 1); // top right
			numberOfNeighbors += retrieveFromGrid(j, k - 1); // center left
			numberOfNeighbors += retrieveFromGrid(j, k + 1); // center left
			numberOfNeighbors += retrieveFromGrid(j + 1, k - 1); //botton left
			numberOfNeighbors += retrieveFromGrid(j + 1, k); // bottom center
			numberOfNeighbors += retrieveFromGrid(j + 1, k + 1); // bottom right;
			

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


const playTheGame = (rows, height, width) => {
	createArray(rows);
		console.log(gameGrid, "<---- original game grid");
		console.log(newGeneration, "<--- original new gen");

	populateGrid(height, width);
		console.log(gameGrid, "<--- populated game grid");

	evolveGrid(height, width);
		console.log(gameGrid, "<--- new gen");
}


playTheGame(gridRows, gridHeight, gridWidth);




