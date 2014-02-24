module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        files: {
          'app.js': 'app.coffee',
          'build/there.js': ['src/js/*.coffee']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/js', 'app.coffee'],
        tasks: ['coffee']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['coffee']);
};
