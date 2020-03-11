/**
 * Determines the legal moves for a knight on the board.
 */

// Export the knight moves function.
module.exports = knightMoves;

// Imports.
const verifyArgsDefined = require('./verifyArgsDefined');

/**
 * Determines a legal moves for a knight on a board.
 * @param {String} col The column where the piece is located.
 * @param {Number} row The row where the piece is located.
 * @param {Object} board A reference to the board.
 */
function knightMoves (col, row, board) {

	// Verify the arguments are defined.
	verifyArgsDefined(knightMoves, arguments);

	// If the location on the board is undefined.
	if (board[col + row] === undefined) {

		// Throw an error.
		throw new Error('That position does not exist on thw board.');
	}

	// If the square is not occupied.
	if (board[col + row].occupied === false) {

		// Throw an error.
		throw new Error('There is no piece at that location.');
	}

	// Retrieve the piece from the board.
	const piece = board[col + row].piece

	// All possible positions.
	const U2L1 = String.fromCharCode(col.charCodeAt(0) - 1) + (row + 2);
	const U2R1 = String.fromCharCode(col.charCodeAt(0) + 1) + (row + 2);
	const U1L2 = String.fromCharCode(col.charCodeAt(0) - 2) + (row + 1);
	const U1R2 = String.fromCharCode(col.charCodeAt(0) + 2) + (row + 1);
	const D1L2 = String.fromCharCode(col.charCodeAt(0) - 2) + (row - 1);
	const D1R2 = String.fromCharCode(col.charCodeAt(0) + 2) + (row - 1);
	const D2L1 = String.fromCharCode(col.charCodeAt(0) - 1) + (row - 2);
	const D2R1 = String.fromCharCode(col.charCodeAt(0) + 1) + (row - 2);

	// Create an array of the positions.
	const positions = [U1L2, U2L1, U2R1, U1R2, D1R2, D2R1, D2L1, D1L2];

	// Create a legal moves array.
	const legalMoves = [];

	// For each position in the positions array.
	for (let pos of positions) {

		// If that position on the board exists.
		if (board[pos]) {

			// If that position is no occupied.
			if (board[pos].occupied === false) {

				// Push the move into the legal moves array.
				legalMoves.push({
					col: pos.charAt(0)
					, row: parseInt(pos.charAt(1), 10)
					, from: {
						col
						, row
					}
				});

			}
			// The position is occupied.
			else {

				// If the piece is that position does not have the same color as this piece.
				if (board[pos].piece.color !== piece.color) {

					legalMoves.push({
						col: pos.charAt(0)
						, row: parseInt(pos.charAt(1), 10)
						, from: {
							col
							, row
						}
					});
				}
			}
		}
	}

	// Return the legal moves array.
	return legalMoves;
}