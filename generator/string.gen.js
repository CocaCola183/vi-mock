var yod = require('yod-mock');

/**
 * generate string
 * @return {[type]} return a string with length = 10
 */
function generate_string () {
	return yod('@String(10)');
}

/**
 * generate string array
 * @param  {[type]} length array lenth
 * @return {[type]}        string array
 */
function generate_string_array (length) {
	return yod('@String(10).repeat(' + length + ')');
}

exports.generate_string = generate_string;
exports.generate_string_array = generate_string_array;