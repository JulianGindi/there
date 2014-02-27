module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    coffee: {
      compile: {
        options: { join: true },
        files: {
          'app.js': 'app.coffee',
          'build/there.js': ['src/js/*.coffee']
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: ['sass'],
          cssDir: ['static/css'],
          environment: 'development'
        }
      }
    },
    express: {
        web: {
            options: {
                script: './app.js',
            }
        },
    },
    watch: {
      web: {
        files: ['src/js/*.coffee', 'app.coffee', 'sass/*.scss', 'sass/**/*.scss'],
        tasks: ['coffee', 'compass', 'express:web'],
        options: {
            nospawn: true,
            livereload: true,
            atBegin: true
        },
      },
    },
    parallel: {
        web: {
            options: {
                stream: true
            },
            tasks: [{
                grunt: true,
                args: ['watch:web']
            }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-parallel');

  grunt.registerTask('web', 'launch webserver and watch tasks', ['parallel:web']);
  grunt.registerTask('default', ['web']);
};