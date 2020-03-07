/** 
 * This is the piece module. It creates chess pieces.
 * The types a piece can be are Rook, Knight, Bishop
 * Queen, King, or Pawn.
 */

// Imports.
const verifyArgTypes = require('../lib/verifyArgTypes');

/**
 * The piece class. A class for chess pieces.
 * @class Piece
 */
class Piece {

	/**
	 * Creates an instance of Piece.
	 * @param {String} color The color of the piece.
	 * @param {String} type The type of the piece. Rook, Knight, Bishop
	 * Queen, King, or Pawn.
	 * @memberof Piece
	 */
	constructor(color, type) {

		// Declare the argument types.
		const argumentTypes = ['string', 'string'];

		// Verify the arguments are defined and of correct type.
		verifyArgTypes(constructor, arguments, argumentTypes)

		// Set values onto the instance of the piece.
		this.color = color;
		this.type = type;
	}
}

// Export the Piece class.
module.exports = Piece;