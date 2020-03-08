/** 
 * The Rook module.
 */

// Imports.
const Piece = require('./piece');
const slideDirectionMoves = require('../lib/slideDirectionMoves');
const verifyArgsDefined = require('../lib/verifyArgsDefined');

/**
 * Rook class. Creates a Rook chess piece.
 * @class Rook
 * @extends {Piece}
 */
class Rook extends Piece {

	/**
	 * Creates an instance of Rook.
	 * @param {String} color The color of the piece.
	 * @memberof Rook
	 */
	constructor(color) {

		// Invoke parent's constructor.
		super(color, 'Rook');
	}

	/**
	 * Determines the legal moves for a rook on the board at the
	 * given location.
	 * @param {String} col The column of where the piece is located.
	 * @param {Number} row The row of where the piece is located.
	 * @param {Object} board The board.
	 * @returns {Array<Object>} An array of legal move objects with properties col and row.
	 * @memberof Rook
	 */
	getLegalMoves(col, row, board) {

		// Verify arguments are defined.
		verifyArgsDefined(this.getLegalMoves, arguments);

		// Retrieve the horizontal and vertical moves.
		const up = slideDirectionMoves(col, row, board, 'up', -1);
		const down = slideDirectionMoves(col, row, board, 'down', -1);
		const left = slideDirectionMoves(col, row, board, 'left', -1);
		const right = slideDirectionMoves(col, row, board, 'right', -1);

		// Create a legal moves array of all directions added together.
		const legalMoves = up.concat(right).concat(down).concat(left);

		// Return the legal moves array.
		return legalMoves;
	}
}

// Export the Rook class.
module.exports = Rook;