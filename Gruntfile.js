'use strict';

function build () {
	//TODO: run scriby on self.
	throw new Error('Not Implemented');
}

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		eslint: {
			options: {
				config: '.eslintrc'
			},
			target: ['./bin/**.js', './lib/**.js', 'index.js', 'Gruntfile.js']
		},

		mochaTest: {
			options: {
				ui: 'qunit'
			},
			test: {
				src: ['test/test-*.js']
			}
		},

		watch: {
			scripts: {
				files: ['lib/**.js', 'bin/**.js', 'test/**/*.js', 'index.js'],
				tasks: ['test'],
				options: {
					interrupt: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('test', ['eslint', 'mochaTest']);
	grunt.registerTask('build', ['test', build]);
	grunt.registerTask('default', ['test']);

};
