var Enum = require('enum');
var method = new Enum(['string', 'number', 'boolean'], { ignoreCase: true });
module.exports = function(type) {
	return method.get(type);
}