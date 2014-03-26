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
			target: ['bin/**.js', 'lib/**.js', 'index.js', 'Gruntfile.js']
		},

		csslint: {
			options: {
				csslintrc: '.csslintrc'
			}
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
			options: {
				livereload: true
			},
			scripts: {
				files: ['lib/**/*', 'bin/**/*', 'test/**/*.js', 'index.js'],
				tasks: ['test'],
				options: {
					interrupt: true,
					livereload: true
				}
			}
		},

		connect: {
			docs: {
				options: {
					keepalive: true,
					base: 'docs',
					livereload: true
				}
			},
			test: {
				options: {
					keepalive: true,
					base: 'test/docs',
					livereload: true
				}
			}
		}

	});

	grunt.loadNpmTasks('grunt-eslint');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-mocha-test');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('test', ['eslint', 'csslint', 'mochaTest']);
	grunt.registerTask('build', ['test', build]);
	grunt.registerTask('default', ['test']);

};
