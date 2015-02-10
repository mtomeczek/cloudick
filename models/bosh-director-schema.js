/**
 * Created by mtomeczek on 05.02.15.
 */
var Schema = require('mongoose').Schema;
var jsonSelect = require('mongoose-json-select');
var schema = new Schema({
		guid: {type: String, unique: true, required: true},
		description: {type: String, required: true}
	},
	{
		autoIndex: true
	}
);
schema.plugin(jsonSelect, 'guid description');
module.exports = schema;
