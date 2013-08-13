module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    uglify: {
      all: {
        files: {
          'ui-bootstrap-alerts.min.js': ['ui-bootstrap-alerts.js']
        }
      }
    }
  });

  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('default', ['build']);
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
