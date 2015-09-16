# vi-mock
Data generator tool based on yod-mock.

## Install
```
npm install vi-mock
```

## Usage
```js
var vi = require('vi-mock');  
```

generate a string:  
```js
vi.string();
```

generate a number:  
```js
vi.number();
```

generate a boolean:  
```js
vi.boolean();
```

generate a simple array:  
```js
vi.array('string', 1);  
vi.array('number', 2);  
vi.array('boolean', 3);  
```

generate a nested object:  
```js
var schema = {  
	string: {type: 'string'},  
	array: {type: 'array',elemType: 'string'},  
	nested_array: {type: 'array',  
		elemSchema: {  
			name: {type: 'string'},  
			sex: {type: 'boolean'}  
		}  
	},  
	object: {  
		object1: {  
			string1: {type: 'string'},  
			number2: {type: 'number'}  
		},  
		boolean: {type: 'boolean'}  
	}  
}  
vi.object(schema);  
```

