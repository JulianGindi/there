module.exports = function(grunt) {

  grunt.config('shell', {
    // Install Bower components
    nodemon: {
      command: 'nodemon app.js -e js sass --watch',

    },
    options: {
      stdout: true
    }
  });

  grunt.loadNpmTasks('grunt-shell');

};