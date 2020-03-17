/** 
 * This file tests the Bishop module.
 */

// Imports.
const test = require('tape');
const Board = require('../board');

// Compile test.
test('Compile test', (t) => {

	try {

		// Require in the module.
		require('../pieces/bishop');

		// Pass the test.
		t.pass('No error requiring in the module.');

	}
	catch (e) {

		// Fail the test.
		t.fail('Error trying to require in the module.');
	}

	// End the test.
	t.end();
});

// Require in the module now that it complies.
const Bishop = require('../pieces/bishop');

test('BISHOP: legalMoves(), D4, no blocks', (t) => {

	// Create a new bishop on A1.
	const bishop1 = new Bishop('white');

	// Create the board.
	const board1 = new Board(8, 8);

	// Place the piece on the board.
	board1.placePieceOnBoard(bishop1, 'D', 4);

	// Retrieve the legal moves.
	const legalMoves = bishop1.getLegalMoves('D', 4, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'C'
			, row: 5
		}, {
			col: 'B'
			, row: 6
		}, {
			col: 'A'
			, row: 7
		}, {
			col: 'E'
			, row: 5
		}, {
			col: 'F'
			, row: 6
		}, {
			col: 'G'
			, row: 7
		}, {
			col: 'H'
			, row: 8
		}, {
			col: 'E'
			, row: 3
		}, {
			col: 'F'
			, row: 2
		}, {
			col: 'G'
			, row: 1
		}, {
			col: 'C'
			, row: 3
		}, {
			col: 'B'
			, row: 2
		}, {
			col: 'A'
			, row: 1
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 4
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// TODO: Test more moves.