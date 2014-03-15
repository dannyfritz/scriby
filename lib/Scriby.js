'use strict';

var _ = require('lodash');
var YUIDoc = require('yuidocjs');

/**
	This is the __module__ description for the `scriby` module.

	@module Scriby
	@main Scriby
*/

var defaultOptions = {
	sources: ['./src'],
	output: 'docs'
};

/**
	@method parseOptions
	@private
	@param options {Object} The options object
*/
function parseOptions (options) {
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
}

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

var yuiDocOptions = {
	parseOnly: true,
	writeJSON: false,
	quiet: true
};

/**
	Takes the directories and files and outputs a JSON representation of the
	document comments.

	@method parser
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
};

/**
	Takes a JSON representation and creates a documentation webpage.

	@method generateDocuments
*/
Scriby.prototype.generateDocuments = function() {
	throw new Error('Not Implemented.');
};

module.exports = Scriby;
