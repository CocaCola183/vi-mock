var assert = require('assert-plus');
var string_gen = require('./string.gen');
var number_gen = require('./number.gen');
var boolean_gen = require('./boolean.gen');
var simple_array_gen = require('./simple_array.gen');
var validate_type = require('../lib/validate-type');
var validate_schema_prop = require('../lib/validate-schema-prop');

var gen = {
	string: string_gen.generate_string(),
	number: number_gen.generate_number(),
	boolean: boolean_gen.generate_boolean(),
	array: simple_array_gen.generate_simple_array
}


var default_configuration = {
	length: 5
}

// var test_schema = {
// 	string: {
// 		type: 'string',
// 		required: true
// 	},
// 	array: {
// 		type: 'array',
// 		required: true,
// 		elemType: 'string'
// 	},
// 	nested_array: {
// 		type: 'array',
// 		required: true,
// 		elemSchema: {
// 			name: {
// 				type: 'string',
// 				required: true
// 			},
// 			sex: {
// 				type: 'boolean',
// 				required: true
// 			}
// 		}
// 	},
// 	object: {
// 		object1: {
// 			string1: {
// 				type: 'string',
// 				required: true
// 			},
// 			number2: {
// 				type: 'number',
// 				required: true
// 			}
// 		},
// 		boolean: {
// 			type: 'boolean',
// 			required: true
// 		}
// 	}
// }

/**
 * generate nested array
 * @param  {[object]} schema array schema
 * @return {[array]}        return a nested array
 */
function generate_nested_object (schema, length) {
	length = length || default_configuration.length;
	/*handle array*/
	if(schema.type === 'array'){
		if(schema.elemType) {
			/*simple array*/
			return gen['array'](validate_type(schema.elemType), length || default_configuration.length);
		}
		if(schema.elemSchema) {
			/*nested array*/
			var ret_array = [];
			for(var i=0; i<length; i++) {
				ret_array.push(generate_nested_object(schema.elemSchema, length || default_configuration.length));
			}
			return ret_array;
		}
	}
	var ret_object = {};
	for(var key in schema) {
		/*handle array*/
		if(schema[key].type === 'array') {
			if(schema[key].elemType) {
				/*simple array*/
				ret_object[key] = gen['array'](validate_type(schema[key].elemType), default_configuration.length);
				continue;
			}
			if(schema[key].elemSchema) {
				/*nested array*/
				ret_object[key] = [];
				for(var i=0; i<default_configuration.length; i++) {
					ret_object[key].push(generate_nested_object(schema[key].elemSchema), length || default_configuration.length);
				}
				continue;
			}
			continue;
		}
		/*nested object*/
		var is_nested = !Object.keys(schema[key]).every(function(key) {
			return validate_schema_prop(key);
		});
		if(is_nested) {
			ret_object[key] = generate_nested_object(schema[key], default_configuration.length);
			continue;
		}
		/*simple type*/
		ret_object[key] = gen[schema[key].type];
		continue;
	}
	return ret_object;
}

// function generate_nested_object_array (schema, length) {
// 	length = length || 5;
//  	var ret_array = [];
//  	for (var i=0; i<length; i++) {
//  		ret_array.push(generate_nested_object(schema.elemSchema));
//  	}
//  	return ret_array;
// }

// console.log(generate_nested_object(test_schema));

// var test_get_schema = {
// 	name: {
// 		type: 'string'
// 	},
// 	sex: {
// 		type: 'boolean'
// 	}
// };

// var test_array_schema = {
// 	type: 'array',
// 	elemSchema: {
// 		name: {
// 			type: 'string'
// 		}
// 	}
// }

// console.log(generate_nested_object(test_array_schema, 10));


exports.generate_nested_object = generate_nested_object;