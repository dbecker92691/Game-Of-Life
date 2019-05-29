const evolveGrid = (gameGrid) => {

	const gridHeight = gameGrid.length;
	const gridWidth = gameGrid[0].length;

	const retrieveFromGrid = (x, y) => {
		if (x < 0 || x >= gridWidth) {
			return 0;
		}
	
		if (y < 0 || y >= gridHeight) {
			return 0;
		}
	
		return gameGrid[x][y];
	}

	const newGeneration = [
		[],
		[],
		[]
	];
	
	for(let j = 0; j < gridWidth; j++) {
		for(let k = 0; k < gridHeight; k++) {

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

			// Add logic to dead cells
			if (gameGrid[j][k] === 0) {
				if (numberOfNeighbors === 3) {
					newGeneration[j][k] = 1;
				} else {
					newGeneration[j][k] = 0;
				}
			// Add logic to live cells
			} else {
				if (numberOfNeighbors < 2) {
					newGeneration[j][k] = 0;
				} else if (numberOfNeighbors > 3) {
					newGeneration[j][k] = 0;
				} else {
					newGeneration[j][k] = 1;
				}
			}
		}
	}

	return newGeneration;
}

const start = [ [1, 1, 1], [1, 0, 0], [1, 1, 0] ];
const end = evolveGrid(start);
console.log(end, "<---- new generation");