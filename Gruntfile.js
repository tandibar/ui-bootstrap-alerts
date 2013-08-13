module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    uglify: {
      all: {
        files: {
          'ui-bootstrap-alerts.min.js': [
            'src/AlertService.js',
            'src/AlertCtrl.js',
            'src/alerts-directive.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('default', ['build']);
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
};
