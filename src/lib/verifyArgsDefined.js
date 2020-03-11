/** 
 * This module verifies the correct number of arguments have been provided
 * to a function and that the arguments  are defined.
 */

// Export the verify args defined function.
module.exports = verifyArgsDefined;


/**
 * Verifies  the correct number of arguments are provided
 * to a function and all arguments to a function are defined.
 * @param {Function} func A reference to the function.
 * @param {Object} args The arguments to the function. 
 */
function verifyArgsDefined (func, args) {

	// If function name is undefined.
	if (func === undefined) {

		// Throw an error.
		throw new Error('Parameter \'func\' must be passed to the verifyArgsDefined function.');
	}

	// If args is undefined.
	if (args === undefined) {

		// Throw an error.
		throw new Error('Parameter \'params\' must be passed to the verifyArgsDefined function.');
	}

	// If the type of func is not a func.
	if (typeof (func) !== 'function') {

		// Throw new error.
		throw new Error('Parameter \'func\' must be of type function.');
	}

	// If the type of args is not a object.
	if (typeof (args) !== 'object') {

		// Throw new error.
		throw new Error('Parameter \'args\' must be of type object.');
	}

	// Create a keys array.
	const keys = Object.keys(args);

	// If the number of parameters the function is expecting does not equal the length of the keys.
	if (func.length !== keys.length) {

		// Throw an error.
		throw new Error(`${func.name} is expecting ${func.length} arguments and only received ${keys.length} arguments.`)
	}

	// For each key in the key array.
	for (let key of keys) {

		// If the value of the key is undefined.
		if (args[key] === undefined) {

			// Throw a new error.
			throw new Error(`Parameter: ${key} must be defined for function: ${func}`);
		}
	}
}