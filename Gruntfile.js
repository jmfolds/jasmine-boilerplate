module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      appName: {
        src : 'src/**/*.js',
        options : {
          vendor: [
            './lib/jquery-1.11.0.js',
            './lib/underscore.js',
            './lib/backbone.js',
            './lib/backbone.marionette.js',
          ],
          specs : 'spec/**/*.js',
          keepRunner: true
        }
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: ['Gruntfile.js','./src/*.js','./spec/*.js'],
        template: 'spec/TestRunner.tmpl',
        tasks: ['jshint', 'jasmine'],
        options: {
          nospawn: true
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['test']);

};