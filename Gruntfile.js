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
    },
    release: {
      options: {
        file: 'bower.json'
      }
    }
  });
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.renameTask('release', 'releaseToBower');
  grunt.registerTask('release', function(major_minor_patch){
    major_minor_patch = major_minor_patch || 'patch';
    grunt.log.writeln("******************************************************************");
    grunt.log.writeln("* IMPORTANT: you have to commit the .min file before releasing *");
    grunt.log.writeln("******************************************************************");
    grunt.task.run([
      'build',
      'releaseToBower:' + major_minor_patch
    ]);
  });
  
  grunt.registerTask('build', ['uglify']);
  grunt.registerTask('default', ['build']);
};
