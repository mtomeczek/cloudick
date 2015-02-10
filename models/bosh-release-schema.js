/**
 * Created by mtomeczek on 05.02.15.
 */
var Schema = require('mongoose').Schema;
var jsonSelect = require('mongoose-json-select');
var schema = new Schema({
		name: {type: String, unique: true, required: true},
		version: {type: String, required: true}
	},
	{
		autoIndex: true
	}
);
schema.plugin(jsonSelect, 'name version');
module.exports = schema;
