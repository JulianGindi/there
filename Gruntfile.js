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
        files: ['src/js/*.coffee', 'app.coffee'],
        tasks: ['coffee']
      },
      css: {
        files: ['sass/*.scss', 'sass/partials/*.scss'],
        tasks:['compass']
      }
    },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['watch']);
};