var fs = require('fs');
var Handlebars = require('handlebars');

var mainTemplate = fs.readFileSync('./lib/template/main.hbs').toString();
var moduleTemplate = fs.readFileSync('./lib/template/module.hbs').toString();
var classTemplate = fs.readFileSync('./lib/template/class.hbs').toString();
var itemTemplate = fs.readFileSync('./lib/template/item.hbs').toString();
var paramTemplate = fs.readFileSync('./lib/template/param.hbs').toString();

var template = Handlebars.compile(mainTemplate);
Handlebars.registerPartial('module', moduleTemplate);
Handlebars.registerPartial('class', classTemplate);
Handlebars.registerPartial('item', itemTemplate);
Handlebars.registerPartial('param', paramTemplate);

module.exports = template;
