const playTheGame = require('../app/full-game-of-life.js');
const gameGrid = require('../app/full-game-of-life.js');
const newGeneration = require('../app/full-game-of-life.js');
const gridHeight = require('../app/full-game-of-life.js');
const gridWidth = require('../app/full-game-of-life.js');
const gridRows = require('../app/full-game-of-life.js');
const createArray = require('../app/full-game-of-life.js');
const populateGrid = require('../app/full-game-of-life.js');
const evolveGrid = require('../app/full-game-of-life.js');


const chai = require('chai');
const assert = require('chai');
const should = chai.should();


describe('grid creation', () => {
	it('createArray should create an empty game grid', () => {
		createArray.should.be.eql(gameGrid && newGeneration);
	})
	it('gameGrid and newGeneration should be equal', () => {
		gameGrid.should.be.eql(newGeneration);
	})
	it('gameGrid should have equal height and width', () => {
		gridHeight.should.be.eql(gridWidth);
	})
})


// test to see if gameGrid has been populated



// test to see if evolveGrid returns correctly evolved game
