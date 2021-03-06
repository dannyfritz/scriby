'use strict';

var fs = require('fs');
var serialize = require('node-serialize');
var file = require('file');

var _ = require('lodash');
var YUIDoc = require('yuidocjs');

/**
This is the __module__ description for the `scriby` module.

@module Scriby
@main Scriby
*/

var defaultOptions = {
	sources: ['lib/'],
	output: 'docs/',
	template: null
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
	Handle errors in a common way

	@method handleError
	@private
*/
function handleError(error) {
	if (!_.isObject(error) && !_.isString(error)) {
		return;
	}
	console.error(error);
}

/**
	Write data.json file

	@method writeDataJsonFile
	@private
	@param data {Object}
*/
function writeDataJsonFile(output, data) {
	file.mkdirsSync(output);
	fs.writeFile(output + '/data.json', serialize.serialize(data), handleError);
}

/**
	Cook data

	@method cookData
	@private
	@param data {Object}
*/
function cookData(data) {
	var modules = _(data.modules).toArray().sortBy('name').value();
	var classes = _(data.classes).toArray().sortBy('name').groupBy('module').value();
	var classItems = _(data.classitems).toArray().sortBy(['name']).groupBy('class').value();
	var groupedItems = _.mapValues(classItems, function (items) {
		return _.groupBy(items, 'itemtype');
	});
	_.each(modules, function (module) {
		module.classes = classes[module.name];
		_.each(module.classes, function (classItem) {
			classItem.items = groupedItems[classItem.name];
		});
	});
}

/**
	Write HTML File

	@method writeHtmlFile
	@private
	@param data {Object}
*/
function writeHtmlFile(output, data) {
	var template = require('./template');
	fs.writeFile(output + '/index.html', template(data), handleError);
}

/**
Takes a JSON representation and creates a documentation webpage.

@method generateDocumentation
@param [data] {Object}
*/
Scriby.prototype.generateDocumentation = function(data) {
	if (_.isUndefined(data)) {
		data = this.parse();
	}
	writeDataJsonFile(this.options.output, data);
	cookData(data);
	writeHtmlFile(this.options.output, data);
};

module.exports = Scriby;
