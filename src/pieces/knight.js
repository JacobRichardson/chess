/** 
 * The Knight module.
 */

// Imports.
const Piece = require('./piece');
const verifyArgsDefined = require('../lib/verifyArgsDefined');
const knightMoves = require('../lib/knightMoves');

/**
 * The Knight class. Creates a Knight chess piece.
 * @class Knight
 * @extends {Piece}
 */
class Knight extends Piece {

	/**
	 * Creates an instance of Knight.
	 * @param {String} color The color of the piece.
	 * @memberof Knight
	 */
	constructor(color) {

		// Invoke the parent constructor.
		super(color, 'knight');
	}

	/**
	 * Determines the legal moves for a Knight on the board at the
	 * given location.
	 * @param {String} col The column of where the piece is located.
	 * @param {Number} row The row of where the piece is located.
	 * @param {Object} board The board.
	 * @returns {Array<Object>} An array of legal move objects with properties col and row.
	 * @memberof Knight
	 */
	getLegalMoves(col, row, board) {

		// Verify the arguments are defined.
		verifyArgsDefined(this.getLegalMoves, arguments);

		// Retrieve the legal moves using the board and the piece.
		const legalMoves = knightMoves(col, row, board);

		// Return the legal moves array.
		return legalMoves;
	}
}

// Export the knight class.
module.exports = Knight;