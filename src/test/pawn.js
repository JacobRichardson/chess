/** 
 * This file tests the Pawn module.
 */

// Imports.
const test = require('tape');
const Board = require('../board');

// Compile test.
test('Compile test', (t) => {

	try {

		// Require in the module.
		require('../pieces/pawn');

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
const Pawn = require('../pieces/pawn');

// White, D2 No blocks no captures.
test('PAWN: legalMoves() white, D2, no blocks, no captures and the pawn hasn\'t moved.', (t) => {

	// Create a new pawn.
	const pawn1 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawn on the board.
	board1.placePieceOnBoard(pawn1, 'D', 2);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 2, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'D'
			, row: 3
		}
		, {
			col: 'D'
			, row: 4
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 2
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D3 No blocks, no captures, and the pawn has moved.
test('PAWN: legalMoves() white, D3, no blocks, no captures, pawn has moved.', (t) => {

	// Create a new pawn.
	const pawn1 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawn on the board.
	board1.placePieceOnBoard(pawn1, 'D', 3);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 3, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'D'
			, row: 4
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 3
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D3, blocked, no captures
test('PAWN: legalMoves() white, D3, blocked, no capture.', (t) => {

	// Create a new pawn.
	const pawn1 = new Pawn('white');

	// Create the blocking pawn.
	const pawn2 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 3);
	board1.placePieceOnBoard(pawn2, 'D', 4);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 3, board1);

	// The expected result.
	const expectedResult = [];

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D3, blocked, left capture.
test('PAWN: legalMoves() white, D3, blocked, left capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('white');
	const pawn2 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 3);
	board1.placePieceOnBoard(pawn2, 'D', 4);

	// Place another black pawn on C4 which is left diagonal to the D3 pawn.
	board1.placePieceOnBoard(pawn2, 'C', 4);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 3, board1);

	// The expected result.
	const expectedResult = [{
		col: 'C'
		, row: 4
	}];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 3
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D3, blocked, right capture.
test('PAWN: legalMoves() white, D3, blocked, right capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('white');
	const pawn2 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 3);
	board1.placePieceOnBoard(pawn2, 'D', 4);

	// Place another black pawn on E4 which is right diagonal to the D3 pawn.
	board1.placePieceOnBoard(pawn2, 'E', 4);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 3, board1);

	// The expected result.
	const expectedResult = [{
		col: 'E'
		, row: 4
	}];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 3
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D3, blocked, left and right capture.
test('PAWN: legalMoves() white, D3, blocked, right capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('white');
	const pawn2 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 3);
	board1.placePieceOnBoard(pawn2, 'D', 4);

	// Place another black pawn on C4 which is left diagonal to the D3 pawn.
	board1.placePieceOnBoard(pawn2, 'C', 4);

	// Place another black pawn on E4 which is right diagonal to the D3 pawn.
	board1.placePieceOnBoard(pawn2, 'E', 4);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 3, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'C'
			, row: 4
		}
		, {
			col: 'E'
			, row: 4
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 3
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D2, blocks from 2 forward, has not moved, no captures.
test('PAWN: legalMoves() white, D2, blocks from 2 forward, has not moved, no captures.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('white');
	const pawn2 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other 1 square a part.
	board1.placePieceOnBoard(pawn1, 'D', 2);
	board1.placePieceOnBoard(pawn2, 'D', 4);

	// Set has moved equal to false.
	pawn1.setHasMoved(false);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 2, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'D'
			, row: 3
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 2
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// White, D2, no blocks, has not moved, capture left and capture right.
test('PAWN: legalMoves() white, D2, no blocks, has not moved, capture left and capture right.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('white');
	const pawn2 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board. Pawns one each diagonal.
	board1.placePieceOnBoard(pawn1, 'D', 2);
	board1.placePieceOnBoard(pawn2, 'C', 3);
	board1.placePieceOnBoard(pawn2, 'E', 3);

	// Set has moved equal to false.
	pawn1.setHasMoved(false);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 2, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'C'
			, row: 3
		}
		, {
			col: 'D'
			, row: 3
		}
		, {
			col: 'D'
			, row: 4
		}
		, {
			col: 'E'
			, row: 3
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 2
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D7 No blocks no captures.
test('PAWN: legalMoves() black, D7, no blocks, no captures and the pawn hasn\'t moved.', (t) => {

	// Create a new pawn.
	const pawn1 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawn on the board.
	board1.placePieceOnBoard(pawn1, 'D', 7);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 7, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'D'
			, row: 6
		}
		, {
			col: 'D'
			, row: 5
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 7
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D6 No blocks, no captures, and the pawn has moved.
test('PAWN: legalMoves() Black, D6, no blocks, no captures, pawn has moved.', (t) => {

	// Create a new pawn.
	const pawn1 = new Pawn('black');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawn on the board.
	board1.placePieceOnBoard(pawn1, 'D', 6);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 6, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'D'
			, row: 5
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 6
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D6, blocked, no captures
test('PAWN: legalMoves() black, D6, blocked, no capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('black');
	const pawn2 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 6);
	board1.placePieceOnBoard(pawn2, 'D', 5);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 6, board1);

	// The expected result.
	const expectedResult = [];

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D6, blocked, left capture.
test('PAWN: legalMoves() black, D6, blocked, left capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('black');
	const pawn2 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 6);
	board1.placePieceOnBoard(pawn2, 'D', 5);

	// Place another black pawn on C4 which is left diagonal (in respect to the 'white' side of the board being at the bottom) to the D6 pawn.
	board1.placePieceOnBoard(pawn2, 'C', 5);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 6, board1);

	// The expected result.
	const expectedResult = [{
		col: 'C'
		, row: 5
	}];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 6
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D6, blocked, right capture.
test('PAWN: legalMoves() black, D6, blocked, right capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('black');
	const pawn2 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 6);
	board1.placePieceOnBoard(pawn2, 'D', 5);

	// Place another black pawn on E4 which is right diagonal (in respect to the 'white' side of the board being at the bottom) to the D6 pawn.
	board1.placePieceOnBoard(pawn2, 'E', 5);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 6, board1);

	// The expected result.
	const expectedResult = [{
		col: 'E'
		, row: 5
	}];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 6
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D6, blocked, left and right capture.
test('PAWN: legalMoves() black, D6, blocked, right capture.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('black');
	const pawn2 = new Pawn('White');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other.
	board1.placePieceOnBoard(pawn1, 'D', 6);
	board1.placePieceOnBoard(pawn2, 'D', 5);

	// Place another black pawn on C4 which is left diagonal (in respect to the 'white' side of the board being at the bottom) to the D6 pawn.
	board1.placePieceOnBoard(pawn2, 'C', 5);

	// Place another black pawn on E4 which is right diagonal (in respect to the 'white' side of the board being at the bottom) to the D6 pawn.
	board1.placePieceOnBoard(pawn2, 'E', 5);

	// Set has moved equal to true.
	pawn1.setHasMoved(true);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 6, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'C'
			, row: 5
		}
		, {
			col: 'E'
			, row: 5
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 6
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D7, blocks from 2 forward, has not moved, no captures.
test('PAWN: legalMoves() black, D7, blocks from 2 forward, has not moved, no captures.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('black');
	const pawn2 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board facing each other 1 square a part.
	board1.placePieceOnBoard(pawn1, 'D', 7);
	board1.placePieceOnBoard(pawn2, 'D', 5);

	// Set has moved equal to false.
	pawn1.setHasMoved(false);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 7, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'D'
			, row: 6
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 7
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});

// Black, D7, no blocks, has not moved, capture left and capture right.
test('PAWN: legalMoves() black, D7, no blocks, has not moved, capture left and capture right.', (t) => {

	// Create the pawns.
	const pawn1 = new Pawn('black');
	const pawn2 = new Pawn('white');

	// Create a new board.
	const board1 = new Board(8, 8);

	// Place the pawns on the board. Pawns one each diagonal.
	board1.placePieceOnBoard(pawn1, 'D', 7);
	board1.placePieceOnBoard(pawn2, 'C', 6);
	board1.placePieceOnBoard(pawn2, 'E', 6);

	// Set has moved equal to false.
	pawn1.setHasMoved(false);

	// Retrieve the legal moves.
	const legalMoves = pawn1.getLegalMoves('D', 7, board1);

	// The expected result.
	const expectedResult = [

		{
			col: 'C'
			, row: 6
		}
		, {
			col: 'D'
			, row: 6
		}
		, {
			col: 'D'
			, row: 5
		}
		, {
			col: 'E'
			, row: 6
		}
	];

	// Attach the from to each move.
	expectedResult.forEach(move => {
		move.from = {
			col: 'D'
			, row: 7
		}
	});

	// Verify the actual legal moves are correct.
	t.deepEqual(legalMoves, expectedResult, 'The legal moves are correct.');

	// End the test.
	t.end();
});


// TODO: 'en passant'