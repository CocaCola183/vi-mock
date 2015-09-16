var string_gen = require('./generator/string.gen');
var number_gen = require('./generator/number.gen');
var boolean_gen = require('./generator/boolean.gen');
var simple_array_gen = require('./generator/simple_array.gen');
var nested_object_gen = require('./generator/nested_object.gen');

exports.string = string_gen.generate_string;
exports.string_array = string_gen.generate_string_array;

exports.number = number_gen.generate_number;
exports.number_array = number_gen.generate_number_array;

exports.boolean = boolean_gen.generate_boolean;
exports.boolean_array = boolean_gen.generate_boolean_array;

exports.array = simple_array_gen.generate_simple_array;

exports.object = nested_object_gen.generate_nested_object;
exports.object_array = nested_object_gen.generate_nested_object_array;

// console.log(module.exports);