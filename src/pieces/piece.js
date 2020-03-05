/** 
 * This is the piece module.
 */

/**
 * The piece class. A class for chess pieces.
 * @class Piece
 */
class Piece {

	// TODO: Remove col and row from piece. This information is on the board.

	// TODO: Update classes extending piece to remove col and row.

	/**
	 * Creates an instance of Piece.
	 * @param {String} color
	 * @param {String} type 
	 * @param {*} col
	 * @param {*} row
	 * @memberof Piece
	 */
	constructor(color, type, col, row) {

		// If type of color is not a string.
		if (typeof (color) !== 'string') {

			// Throw an error.
			throw new Error('Paramter color must be of type string.');
		}

		// If type of type is not a string.
		if (typeof (type) !== 'string') {

			// Throw an error.
			throw new Error('Paramter type must be of type string.');
		}

		if (typeof (row) !== 'number') {

			//Throw an error.
			throw new Error('Parameter row must be of type number.');
		}

		// If type of col is not a string.
		if (typeof (col) !== 'string') {

			// Throw an error.
			throw new Error('Paramter col must be of type string.');
		}

		// If col is not of length 1.
		if (col.length !== 1) {

			//Throw an error.
			throw new Error('Parameter col must be of length 1.');
		}

		// Set values onto the instance of the piece.
		this.color = color;
		this.type = type;
		this.row = row;
		this.col = col;
	}


	updatePosition(piece, board, newRow, newCol) {

		// If type of piece is not an object.
		if (typeof (piece) !== 'object') {

			// Throw an error.
			throw new Error('Parameter piece must be of type object.');
		}

		// If type of board is not an object.
		if (typeof (board) !== 'object') {

			// Throw an error.
			throw new Error('Parameter board must be of type object.');
		}

		// If get legal moves on the piece is undefined.
		if (piece.getLegalMoves === undefined) {

			// Throw new error.
			throw new Error('The property \'getLegalMoves\' must be defined.');
		}

		// If get legal moves is not a function.
		if (typeof (piece.getLegalMoves) !== 'function') {

			// Throw an error.
			throw new Error('The property \'getLegalMoves\' must have a value of type function.');
		}

		// Retrieve the list of possible moves.
		const legalMoves = piece.getLegalMoves(board);

		// Set is legal move to false.
		let isLegalMove = false;

		// For each move in the list of currently legal moves.
		for (let currentLegalMove of legalMoves) {

			// If the current legal move's row and col matched the new location.
			if (currentLegalMove.row == newRow && currentLegalMove.col === newCol) {

				// Set is legal move to be true.
				isLegalMove = true;
			}
		}

		// If the new move is a legal move.
		if (isLegalMove === true) {

			// TODO: Remove this once col and row are off the piece class.

			// Update the piece's row and col to the new position.
			this.piece.row = newRow;
			this.piece.col = newCol;

			//TODO: Update board.

		}
		// The new move is not a legal move.
		else {

			// TODO: Display some kind of error.
		}
	}

}

// Export the Piece class.
module.exports = Piece;