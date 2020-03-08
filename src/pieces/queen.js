/** 
 * The Queen module.
 */

// Imports.
const Piece = require('./piece');
const slideDirectionMoves = require('../lib/slideDirectionMoves');
const verifyArgsDefined = require('../lib/verifyArgsDefined');

/**
 * Queen class. Creates a Queen chess piece.
 * @class Queen
 * @extends {Piece}
 */
class Queen extends Piece {

	/**
	 * Creates an instance of Queen.
	 * @param {String} color The color of the piece.
	 * @memberof Queen
	 */
	constructor(color) {

		// Invoke parent's constructor.
		super(color, 'Queen');
	}

	/**
	 * Determines the legal moves for a Queen on the board at the
	 * given location.
	 * @param {String} col The column of where the piece is located.
	 * @param {Number} row The row of where the piece is located.
	 * @param {Object} board The board.
	 * @returns {Array<Object>} An array of legal move objects with properties col and row.
	 * @memberof Queen
	 */
	getLegalMoves(col, row, board) {

		// Verify arguments are defined.
		verifyArgsDefined(this.getLegalMoves, arguments);

		// Retrieve all directions for 1 square in that direction..
		const up = slideDirectionMoves(col, row, board, 'up', -1);
		const down = slideDirectionMoves(col, row, board, 'down', -1);
		const left = slideDirectionMoves(col, row, board, 'left', -1);
		const right = slideDirectionMoves(col, row, board, 'right', -1);
		const lowerLeft = slideDirectionMoves(col, row, board, 'lowerLeft', -1);
		const upperLeft = slideDirectionMoves(col, row, board, 'upperLeft', -1);
		const lowerRight = slideDirectionMoves(col, row, board, 'lowerRight', -1);
		const upperRight = slideDirectionMoves(col, row, board, 'upperRight', -1);

		// Create a legal moves array of all directions added together.
		const legalMoves = upperLeft.concat(up).concat(upperRight).concat(right).concat(lowerRight).concat(down).concat(lowerLeft).concat(left);

		// Return the legal moves array.
		return legalMoves;
	}
}

// Export the Queen class.
module.exports = Queen;