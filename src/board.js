/** 
 * This is the board module.
 */

/**
 * Board class. Hold information regarding the state of the
 * board in the game.
 * @class Board
 */
class Board {

	/**
	 * Creates an instance of Board.
	 * @param {Number} width How many squares the board is wide.
	 * @param {Number} height How many squares the board is tall.
	 * @memberof Board
	 */
	constructor(width, height) {

		// Set column start at 65 (uppercase A).
		let colStart = 65;

		// Variable for the current column.
		let col;

		// For each number from 1 to height.
		for (let row = 1; row <= height; row++) {

			// Set col to col start.
			col = colStart;

			// For each count
			for (let count = 0; count < width; count++) {

				// Create a square on the board of the column and the row.
				this[String.fromCharCode(col) + row] = {
					occupied: false
					, piece: {}
				}

				// Increment col.
				col++;
			}
		}
	}

	/**
	 * Places a piece on the board in a given position.
	 * @param {Piece} piece A chess piece.
	 * @param {String} col The column the piece is to be placed on.
	 * @param {Number} row The row the piece is to be placed on.
	 * @memberof Board
	 */
	placePieceOnBoard(piece, col, row) {

		// If the position exists on the board.
		if (this[col + row]) {

			// Set the piece on that location.
			this[col + row].piece = piece;

			// Set that position to be occupied.
			this[col + row].occupied = true;
		}
	}

	/**
	 * Retrieves the legal moves of a piece at a given location.
	 * @param {String} col The column the piece is on.
	 * @param {Number} row The row the piece is on.
	 * @returns {Array<Object>} An array of legal moves for that piece.
	 * @memberof Board
	 */
	getLegalMoves(col, row) {

		// If the position doesn't exist.
		if (this[col + row] === undefined) {

			// Throw an error.
			throw new Error(`Position ${col + row} does not exist on the board.`);
		}

		// If the position is not occupied.
		if (this[col + row].occupied === false) {

			// Return an empty array because there are no legal moves for an unoccupied position.
			return [];
		}

		// Return the legal moves of that piece passing in the board and the piece's current position.
		return this[col + row].piece.getLegalMoves(col, row, this);
	}

	/**
	 * Moves a piece on the board to another square if it is a legal move.
	 * @param {String} col The column the piece is currently on.
	 * @param {Number} row The row the piece is currently on.
	 * @param {String} desiredCol The column the piece is trying to move to.
	 * @param {Number} desiredRow The row the piece is trying to move to.
	 * @param {Boolean} checkLegal Wether or not to check if the move is legal.
	 * @memberof Board
	 */
	movePiece(col, row, desiredCol, desiredRow) {

		// If the position doesn't exist.
		if (this[col + row] === undefined) {

			// Throw an error.
			throw new Error(`Position ${col + row} does not exist on the board.`);
		}

		// If the position is not occupied.
		if (this[col + row].occupied === false) {

			// Throw an error.
			throw new Error(`There is no piece currently located at position ${col + row}.`);
		}


		// Retrieve the legal moves for the piece on that position using the board, col and row.
		const legalMoves = this[col + row].piece.getLegalMoves(this, col, row);

		// Set is legal move to false.
		let isLegalMove = false

		// For each move in the legal moves array.
		for (let move of legalMoves) {

			// If the col and the desired col match and the row and desired row match.
			if (move.col === desiredCol && move.row === desiredRow) {

				// Set is legal move to true.
				isLegalMove = true;

				// Break out of the loop.
				break;
			}
		}

		// If the move is illegal.
		if (isLegalMove === false) {

			// Throw an error.
			throw new Error(`Moving piece located at ${col + row} to ${desiredCol + desiredRow} is not a legal move.`);
		}


		// Retrieve the current piece from the board.
		const piece = this[col + row].piece;

		// Set the current position to unoccupied.
		this[col + row].occupied = false;

		// Set the current position's piece to an empty object.
		this[col + row].piece = {};

		// Set the new position as occupied.
		this[desiredCol + desiredRow].occupied = true;

		// Set the piece onto the new position.
		this[desiredCol + desiredRow].piece = piece;

		//TODO: Implement move history.
	}
}

// Export the Board class.
module.exports = Board;