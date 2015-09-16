var Enum = require('enum');
var method = new Enum(['type', 'required', 'elemType', 'elemSchema']);
module.exports = function(prop) {
	return method.get(prop);
}