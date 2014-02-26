module.exports = function(grunt) {

  grunt.config('compass', {
    dist: {
      options: {
        config: grunt.config.get('meta.dirs.root') + '/config.rb'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

};