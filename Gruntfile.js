var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    meta: {
      port: '3000',
      dirs: {
        root: '.',
        public: './static',
        css: './static/css',
        images: './static/images',
        js: './static/js-dev',
        sass: './sass',
      }
    }
  });

  grunt.loadTasks('./grunt');

  grunt.registerTask('default', [
    'compileAssets'
  ]);

  grunt.registerTask('compileAssets', [
    'browserify',
    'copy:dev'
  ]);

  grunt.registerTask('dev',
    'Starting a live reloading dev webserver on localhost. ', [
    'default',
    'concurrent'
  ]);

};