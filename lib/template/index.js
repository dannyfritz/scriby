var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

var mainTemplate = fs.readFileSync(path.join(__dirname, 'main.hbs')).toString();
var navTemplate = fs.readFileSync(path.join(__dirname, 'nav.hbs')).toString();
var moduleTemplate = fs.readFileSync(path.join(__dirname, 'module.hbs')).toString();
var classTemplate = fs.readFileSync(path.join(__dirname, 'class.hbs')).toString();
var itemTemplate = fs.readFileSync(path.join(__dirname, 'item.hbs')).toString();
var paramTemplate = fs.readFileSync(path.join(__dirname, 'param.hbs')).toString();

var template = Handlebars.compile(mainTemplate);
Handlebars.registerPartial('nav', navTemplate);
Handlebars.registerPartial('module', moduleTemplate);
Handlebars.registerPartial('class', classTemplate);
Handlebars.registerPartial('item', itemTemplate);
Handlebars.registerPartial('param', paramTemplate);

module.exports = template;
