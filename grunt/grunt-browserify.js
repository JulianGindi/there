module.exports = function(grunt) {

  grunt.config('browserify', {
    js: {
      src: [grunt.config.get('meta.dirs.js') + '/app.js'],
      dest: grunt.config.get('meta.dirs.public') + '/js/app.js'
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

};