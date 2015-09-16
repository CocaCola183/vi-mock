var yod = require('yod-mock');

/**
 * generate boolean
 * @return {[type]} return a boolean
 */
function generate_boolean () {
	return yod('@Bool()');
}

/**
 * generate boolean array
 * @param  {[type]} length array length
 * @return {[type]}        return a boolean array
 */
function generate_boolean_array (length) {
	return yod('@Bool().repeat(10)');
}

exports.generate_boolean = generate_boolean;
exports.generate_boolean_array = generate_boolean_array;