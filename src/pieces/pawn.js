/** 
 * The pawn module.
 */

// Imports.
const Piece = require('./piece');

/**
 * The pawn class. Creates a pawn chess piece.
 * @class Pawn
 * @extends {Piece}
 */
class Pawn extends Piece {

	/**
	 * Creates an instance of Pawn.
	 * @param {*} color
	 * @param {*} col
	 * @param {*} row
	 * @memberof Pawn
	 */
	constructor(color, col, row) {

		// Invoke the parent's constructor.
		super(color, 'Pawn', col, row);

		// If the color is white and the row is not 2.
		if (color === 'white' && row !== 2) {

			// Set has moved to true.
			this.hasMoved = true;
		}
		// If the color is black and the row is not 7.
		else if (color === 'black' && row !== 7) {

			// Set has moved to true.
			this.hasMoved = true;
		}
		// The pawn is on white and on row 2 or the pawn is black and on row 7.
		else {

			// Set the property has moved to be false.
			this.hasMoved = false;
		}
	}

	/**
	 *
	 *
	 * @param {*} board
	 * @returns
	 * @memberof Pawn
	 */
	getLegalMoves(board) {

		// If board is undefined.
		if (board === undefined) {

			// Throw a new error.
			throw new Error('The parameter board must be provided to the \'getLegalMoves\' function');
		}

		// Create a legal moves array.
		const legalMoves = [];

		// FORWARD MOVES.

		// If the pawn hasn't moved yet.
		if (this.hasMoved === false) {

			// If forward one square exits, is unoccupied, forward two squares exists, and it is unoccupied.
			if (board[this.col + (this.row + 1)] && board[this.col + (this.row + 1)].occupied === false &&
				board[this.col + (this.row + 2)] && board[this.col + (this.row + 2)].occupied === false) {

				// Push in the legal move of moving forward two squares.
				legalMoves.push({
					col: this.col
					, row: this.row + 2
				});
			}
		}

		// If one square forward exists on the board and it is unoccupied.
		if (board[this.col + (this.row + 1)] && board[this.col + (this.row + 1)].occupied === false) {

			// Push in the legal move of moving forward one square.
			legalMoves.push({
				col: this.col
				, row: this.row + 1
			});
		}

		// CAPTURE MOVES.

		// Create the upper right diagonal by adding 1 to the col and 1 to the row. 
		const upperRightDiagonal = String.fromCharCode(this.col.charCodeAt(0) + 1) + (this.row + 1);

		// Create the upper left diagonal by subtracting 1 from the col and adding 1 to the row.
		const upperLeftDiagonal = String.fromCharCode(this.col.charCodeAt(0) - 1) + (this.row + 1);

		// If the upper right diagonal is on the board, is occupied, and the piece is not the same color.
		if (board[upperRightDiagonal] && board[upperRightDiagonal].occupied && board[upperRightDiagonal].piece.color !== this.color) {

			// Push the upper right diagonal as a legal move.
			legalMoves.push({
				col: upperRightDiagonal[0]
				, row: this.row + 1
			});
		}

		// If the upper left diagonal is on the board, is occupied, and the piece is not the same color.
		if (board[upperLeftDiagonal] && board[upperLeftDiagonal].occupied && board[upperLeftDiagonal].piece.color !== this.color) {

			// Push the upper left diagonal as a legal move.
			legalMoves.push({
				col: upperLeftDiagonal[0]
				, row: this.row + 1
			});
		}

		//TODO: Implement 'en passant'

		// Return the legal moves array.
		return legalMoves;
	}
}

// Export the Pawn class.
module.exports = Pawn;