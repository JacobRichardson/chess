/** 
 * The Bishop module. 
 */

// Imports.
const Piece = require('./piece');
const slideDirectionMoves = require('../lib/slideDirectionMoves');

/**
 * The bishop class.
 * @class Bishop
 * @extends {Piece}
 */
class Bishop extends Piece {

	/**
	 * Creates an instance of Bishop.
	 * @param {String} color The color of the bishop.
	 * @memberof Bishop
	 */
	constructor(color) {

		// Invoke parent's constructor
		super(color, 'Bishop');
	}

	/**
	 * Determines the legal moves for a Bishop on the board at the
	 * given location.
	 * @param {String} col The column of where the piece is located.
	 * @param {Number} row The row of where the piece is located.
	 * @param {Object} board The board.
	 * @returns {Array<Object>} An array of legal move objects with properties col and row.
	 * @memberof Bishop
	 */
	getLegalMoves(col, row, board) {

		// Retrieve the diagonal moves.
		const lowerLeft = slideDirectionMoves(col, row, board, 'lowerLeft', -1);
		const upperLeft = slideDirectionMoves(col, row, board, 'upperLeft', -1);
		const lowerRight = slideDirectionMoves(col, row, board, 'lowerRight', -1);
		const upperRight = slideDirectionMoves(col, row, board, 'upperRight', -1);

		// Create a legal moves array of all directions added together.
		const legalMoves = upperLeft.concat(upperRight).concat(lowerRight).concat(lowerLeft);

		// Return the legal moves array.
		return legalMoves;
	}
}

// Export the Bishop class.
module.exports = Bishop;