var fs = require('fs');
var path = require('path');
var Handlebars = require('handlebars');

var mainTemplate = fs.readFileSync(path.join(__dirname, 'lib/template/main.hbs')).toString();
var navTemplate = fs.readFileSync(path.join(__dirname, 'lib/template/nav.hbs')).toString();
var moduleTemplate = fs.readFileSync(path.join(__dirname, 'lib/template/module.hbs')).toString();
var classTemplate = fs.readFileSync(path.join(__dirname, 'lib/template/class.hbs')).toString();
var itemTemplate = fs.readFileSync(path.join(__dirname, 'lib/template/item.hbs')).toString();
var paramTemplate = fs.readFileSync(path.join(__dirname, 'ib/template/param.hbs')).toString();

var template = Handlebars.compile(mainTemplate);
Handlebars.registerPartial('nav', navTemplate);
Handlebars.registerPartial('module', moduleTemplate);
Handlebars.registerPartial('class', classTemplate);
Handlebars.registerPartial('item', itemTemplate);
Handlebars.registerPartial('param', paramTemplate);

module.exports = template;
