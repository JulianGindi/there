module.exports = function(grunt) {

  grunt.config('concurrent', {
    dev: {
      tasks: ['watch', 'shell'],
      options: {
        logConcurrentOutput: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');

};