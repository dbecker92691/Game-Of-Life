const gameGrid =[
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 0]
]


const newGeneration = [
	[],
	[],
	[]
]

const evolveGrid = (gridHeight, gridWidth) => {
	
	for(let j = 0; j < gridWidth; j++){
		for(let k = 0; k < gridHeight; k++){

			// log values as alive (1) or dead (0)
			let numberOfNeighbors = 0;

			try {
				const val = gameGrid[j - 1][k - 1]; // top left cell
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j - 1][k]; // top center
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j - 1][k + 1]; // top right
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j][k - 1]; // center left
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j][k + 1]; // center left
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j + 1][k - 1]; //botton left
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j + 1][k]; // bottom center
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}

			try {
				const val = gameGrid[j + 1][k + 1]; // bottom right
				if(val) {
					numberOfNeighbors += val;
				}
			} catch {
			
			}
			

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
						[j][k] = 0;
						break;

					default: 
						newGeneration[j][k] = 0; 
				}
			}
		}
	}

	console.log(newGeneration);


	// return new generation

	for(let j = 0; j < gridHeight; j++){
		for(let k = 0; k < gridWidth; k++){
			gameGrid[j][k] = newGeneration[j][k];

			return gameGrid;
		}
	}
}

evolveGrid(3,3);
console.log(gameGrid, "<---- new generation")