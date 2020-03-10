/** 
 * This module determines the legal moves for a 'slide' direction.
 * This direction can be up, down, left, right, lower-
 * left, upper-left, lower-right, upper-right. This
 * direction is from the position of the given location. 
 * The amount of moves can be specified. -1 is treated 
 * as infinity. If a square is occupied and the piece is the
 * same color as the piece in question, the location is considered
 * an illegal move. If not, the location is considered a legal move.
 */

// Export the get slide direction legal moves function.
module.exports = getSlideDirectionLegalMoves;

// Imports.
const verifyArgsDefined = require('./verifyArgsDefined');
const slideDirectionModifiers = require('./slideDirectionModifiers')

/**
 * Determines an array of legal slide moves in a single direction for a given location on the board.
 * @param {Number} col The column where the piece is located.
 * @param {Number} row The row where the piece is located.
 * @param {Object} board The board object.
 * @param {String} direction The direction. (up, down, left, right, lowerLeft, UpperLeft, lowerRight, upperRight)
 * @param {Number} amount The amount of squares the piece can slide. -1 is infinity.
 * @param {Boolean} forceTake Wether or not the move has to be a capture to be a legal move.
 * @returns {Array<Object>} An array of legal moves objects with properties col and row. 
 */
function getSlideDirectionLegalMoves (col, row, board, direction, amount) {

	// Verify arguments are defined.
	verifyArgsDefined(getSlideDirectionLegalMoves, arguments);

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

	// If the direction is undefined.
	if (slideDirectionModifiers[direction] === undefined) {

		// Throw an error.
		throw new Error('The direction must be one of these values: up, down, left, right, lowerLeft, upperLeft, lowerRight, upperRight')
	}

	// Create a legal moves array.
	const legalMoves = [];

	// Retrieve the piece from the board.
	const piece = board[col + row].piece;

	// Retrieve the col modifier from the slide direction modifier object.
	const colModifier = slideDirectionModifiers[direction].col;

	// Retrieve the row modifier from the slide direction modifier object.
	const rowModifier = slideDirectionModifiers[direction].row;

	// Add the row modifier to the row.
	let currentRow = parseInt(row, 10) + rowModifier;

	// Add the col modifier to the col.
	let currentCol = col.charCodeAt(0) + colModifier;

	// Set move count equal to 0.
	let moveCount = 0;

	// While the square exists on the board.
	while (board[String.fromCharCode(currentCol) + currentRow]) {

		// If amount does not equal negative 1 and move count is equal to the amount.
		if (amount !== -1 && moveCount === amount) {

			// Break out of the loop.
			break;
		}

		// If the square is not occupied.
		if (board[String.fromCharCode(currentCol) + currentRow].occupied === false) {

			// If the piece is not a pawn and the direction is diagonal.
			if (!(board[col + row].piece.type === 'Pawn' && (direction === 'upperLeft' || direction === 'upperRight' ||
					direction === 'lowerLeft' || direction === 'lowerRight'))) {

				// Push the square into the legal moves array.
				legalMoves.push({
					col: String.fromCharCode(currentCol)
					, row: currentRow
					, from: {
						col
						, row
					}
				});
			}
		}
		// The square is occupied.
		else {

			// If the piece is not the same color.
			if (board[String.fromCharCode(currentCol) + currentRow].piece.color !== piece.color) {

				// If the piece is not a pawn and the direction is up or down (forward).
				if (!(board[col + row].piece.type === 'Pawn' && (direction === 'up' || direction === 'down'))) {

					// Push in the move into the lower left diagonal legal moves array because we can capture a piece of the opposite color.
					legalMoves.push({
						col: String.fromCharCode(currentCol)
						, row: currentRow
						, from: {
							col
							, row
						}
					});
				}
			}

			// End the loop because piece's can't hop over pieces.
			break;
		}

		// Add the col modifier to current col.
		currentCol = currentCol + colModifier;

		// Add the row modifier to current row.
		currentRow = currentRow + rowModifier;

		// Increment move count.
		moveCount++;
	}

	// Return the legal moves array.
	return legalMoves;
}