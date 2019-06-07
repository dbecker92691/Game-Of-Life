const chai = require('chai');
const end = require('../app/game-of-life-logic.js');
const start = require('../app/game-of-life-logic.js');
const expectedResult = require('../app/game-of-life-logic.js');

const should = chai.should();


describe('game of life logic', () => {
	it(`end should be equal to expected result: ${expectedResult}`, () => {
		end.should.be.eql(expectedResult);
	})
})