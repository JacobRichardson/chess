/** 
 * The Pawn module. This creates a Pawn chess piece.
 */

// Imports.
const Piece = require('./piece');
const slideDirectionMoves = require('../lib/slideDirectionMoves');

// TODO: Uncomment import if necessary.
// const verifyArgTypes = require('../lib/verifyArgTypes');


/**
 * The Pawn class. Creates a Pawn chess piece.
 * @class Pawn
 * @extends {Piece}
 */
class Pawn extends Piece {

	/**
	 * Creates an instance of Pawn.
	 * @param {String} color The color of the piece.
	 * @memberof Pawn
	 */
	constructor(color) {

		// TODO: Uncomment argument type checking if necessary.

		// Declare the types.
		// const types = ['string'];

		// Verify they are the correct types.
		// verifyArgTypes(constructor, arguments, types)

		// Invoke the parent's constructor with the type of the piece.
		super(color, 'Pawn');

		// Set has moved to be false.
		this.hasMoved = false;
	}

	/**
	 * Determines the legal moves for a Pawn on the board at the
	 * given location.
	 * @param {String} col The column of where the piece is located.
	 * @param {Number} row The row of where the piece is located.
	 * @param {Object} board The board.
	 * @returns {Array<Object>} An array of legal move objects with properties col and row.
	 * @memberof Pawn
	 */
	getLegalMoves(col, row, board) {

		// TODO: Uncomment argument type checking if necessary.

		// Declare the types.
		// const types = ['string', 'number', 'object'];

		// Verify the arguments are defined and the proper types.
		// verifyArgTypes(this.getLegalMoves, arguments, types);

		// Variable for forward moves and forward attacks. Different for black and white.
		let forward, forwardAttackLeft, forwardAttackRight;

		// If the color of the pawn is white.
		if (this.color === 'white') {

			// Retrieve sliding up 2 and diagonal 'up' attacks.
			forward = slideDirectionMoves(col, row, board, 'up', 2);
			forwardAttackLeft = slideDirectionMoves(col, row, board, 'upperLeft', 1);
			forwardAttackRight = slideDirectionMoves(col, row, board, 'upperRight', 1);

		}
		// The pawn is black.
		else {

			// Retrieve sliding down 2 and diagonal 'down' attacks.
			forward = slideDirectionMoves(col, row, board, 'down', 2);
			forwardAttackLeft = slideDirectionMoves(col, row, board, 'lowerLeft', 1);
			forwardAttackRight = slideDirectionMoves(col, row, board, 'lowerRight', 1);
		}

		// If the pawn has moved and there are 2 different legal moves.
		if (this.hasMoved && forward.length == 2) {

			// Remove the second up legal move.
			forward.pop();
		}

		// Create a legal moves array.
		const legalMoves = forwardAttackLeft.concat(forward).concat(forwardAttackRight);

		//TODO: Implement 'en passant'

		// Return the legal moves array.
		return legalMoves;
	}

	/**
	 * Set's the has moved property to a value.
	 * @param {Boolean} value The value has move is going to be set to.
	 * @memberof Pawn
	 */
	setHasMoved(value) {

		// Set has moved to the pass in value.
		this.hasMoved = value;
	}
}

// Export the Pawn class.
module.exports = Pawn;