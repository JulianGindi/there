module.exports = function(grunt) {

  grunt.config('watch', {
    livereload: {
      options: {
        livereload: true,
      },
      files: [
        grunt.config.get('meta.dirs.public') + '/**/*.{js,html,css}',
        grunt.config.get('meta.dirs.js') + '/*',
      ],
      tasks: ['compileAssets']
    },
    sass: {
      files: [grunt.config.get('meta.dirs.sass') + '/*', grunt.config.get('meta.dirs.sass') + '/partials/*'],
      tasks: ['compass', 'compileAssets']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');

};