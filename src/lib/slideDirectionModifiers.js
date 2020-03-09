/** 
 * This module exports an object that has how
 * the col and row should be modified based on
 * the direction.
 */

// Modifiers object.
const modifiers = {
	up: {
		col: 0
		, row: 1
	}
	, down: {
		col: 0
		, row: -1
	}
	, left: {
		col: -1
		, row: 0
	}
	, right: {
		col: 1
		, row: 0
	}
	, lowerLeft: {
		col: -1
		, row: -1
	}
	, upperLeft: {
		col: -1
		, row: 1
	}
	, lowerRight: {
		col: 1
		, row: -1
	}
	, upperRight: {
		col: 1
		, row: 1
	}
}

// Export the modifiers object.
module.exports = modifiers;