/** 
 * This module retrieves all the legal moves for all pieces
 * on the board excluding check reasons. This means legal
 * moves in the sense is that square in that type of piece's move
 * set and if they are blocked by their own pieces or blocked
 * by opponent pieces.
 */

// Export the get all moves function.
module.exports = getAllMoves;


/**
 * Gets all legal moves for both players.
 * @param {Object} board The board object.
 * @returns {Object} An object with properties whiteLegalMoves, blackLegalMoves,
 * whiteKingPosition, and blackKingPosition.
 */
function getAllMoves (board) {

	// Create an empty array of black's legal moves.
	let blackLegalMoves = [];

	// Create an empty array of white's legal moves.
	let whiteLegalMoves = [];

	// Variable for a piece's legal moves, black king position and white king position.
	let pieceLegalMoves, blackKingPosition, whiteKingPosition;

	// For each square on the board.
	for (let key of Object.keys(board)) {

		// If the position is not occupied.
		if (board[key].occupied === false) {

			// Move onto the next square.
			continue;
		}

		// If the piece is white.
		if (board[key].piece.color === 'white') {

			// If the piece is a king.
			if (board[key].piece.type === 'King') {

				// Set the white king's position to the key.
				whiteKingPosition = key;
			}

			// Retrieve the legal moves of the piece at that location.
			pieceLegalMoves = board[key].piece.getLegalMoves(key[0], parseInt(key[1], 10), board);

			// Add that piece's legal moves to white's legal moves.
			whiteLegalMoves = whiteLegalMoves.concat(pieceLegalMoves);
		}
		// If the piece is black.
		else if (board[key].piece.color === 'black') {

			// If the piece is a king.
			if (board[key].piece.type === 'King') {

				// Set the black king's position to the key.
				blackKingPosition = key;
			}

			// Retrieve the legal moves of the piece at that location.
			pieceLegalMoves = board.getLegalMoves(key[0], parseInt(key[1], 10));

			// Get the legal moves of that piece and add it to black's legal moves array.
			blackLegalMoves = blackLegalMoves.concat(pieceLegalMoves);
		}
	}



	// Create the result object with the information.
	const result = {
		whiteLegalMoves
		, blackLegalMoves
		, whiteKingPosition
		, blackKingPosition
	}

	// Return the result object.
	return result;
}