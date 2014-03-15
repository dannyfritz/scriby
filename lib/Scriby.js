var _ = require('lodash');
var YUIDoc = require('yuidocjs');

/**
	This is the __module__ description for the `scriby` module.

	@module Scriby
	@main Scriby
*/

/**
	Scriby turns comment blocks into a bare-bones single-page documentation
	website.

	@class Scriby
	@constructor
	@param options {Object} The options object
*/
function Scriby (options) {
	this.options = parseOptions(options);
}
Scriby.prototype = {};

var defaultOptions = {
	sources: ['./src'],
	output: 'docs'
}

/**
	@method parseOptions
	@private
	@param options {Object} The options object
*/
parseOptions = function (options) {
	options = _.isObject(options) ? options : {};
	if (_.isString(options.sources)) {
		options.sources = [options.sources];
	} else if (_.isEmpty(options.sources)) {
		options.sources = undefined;
	}
	if (!_.isString(options.output)) {
		options.output = undefined;
	}
	_.defaults(options, defaultOptions);
	return options;
};

/**
	The parser takes the directory and files and outputs a JSON representation
	of the document comments.

	@method parser
	@param options {Object} the options object
*/
Scriby.prototype.parse = function() {
	var options = _.defaults(
		{ paths: this.options.sources, outdir: this.options.output},
		yuiDocOptions
	);
	var yuiDoc = new YUIDoc.YUIDoc(options);
	var json = yuiDoc.run();
	this.json = json;
	return json;
}

var yuiDocOptions = {
	parseOnly: true,
	writeJSON: false,
	quiet: true
};

module.exports = Scriby;
