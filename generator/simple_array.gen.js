var Enum = require('enum');
var assert = require('assert-plus');
var string_gen = require('./string.gen');
var number_gen = require('./number.gen');
var boolean_gen = require('./boolean.gen');

/**
 * generators
 * @type {Object}
 */
var gen = {
	string: string_gen.generate_string_array,
	number: number_gen.generate_number_array,
	boolean: boolean_gen.generate_boolean_array
}

/**
 * default configuration
 * @type {Object}
 */
var default_config = {
	type: 'string',
	length: 5
}

/**
 * allowed type
 * @type {Enum}
 */
var method = new Enum(['string', 'number', 'boolean']);
// console.log(method.get('string').key)

/**
 * generate simple_array
 * @return {[type]} return a simple array
 */
function generate_simple_array (type, length) {
	type = method.get(type) ? method.get(type).key : default_config.type;
	length = parseInt(length, 10) || default_config.length;
	assert.number(length, 'Array length must be a number');
	return gen[type](length);
}

// console.log(generate_simple_array('string', '1'));
// console.log(generate_simple_array('number', '2'));
// console.log(generate_simple_array('boolean', '3'));

exports.generate_simple_array = generate_simple_array;