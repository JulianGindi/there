module.exports = function(grunt) {

  grunt.config('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: grunt.config.get('meta.dirs.public'),
        src: ['**/*.!(coffee)'],
        dest: '.tmp/public'
      }]
    },
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

};