var yod = require('yod-mock');

/**
 * generate number
 * @return {[type]} return an int
 */
function generate_number () {
	return yod('@Int()');
}

/**
 * generate number array
 * @param  {[type]} length array length
 * @return {[type]}        number array
 */
function generate_number_array (length) {
	return yod('@Int().repeat(' + length + ')');
}

exports.generate_number = generate_number;
exports.generate_number_array = generate_number_array