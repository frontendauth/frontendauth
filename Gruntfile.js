var paths = {
  styles: {
    src : ['scss/**/*.scss','scss/**/*.sass'],
    dist : 'dist/css'
  }
};
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourceMap: true,
        includePaths: [
          'bower_components/foundation/scss',
          'bower_components/juice/dist'
        ]
      },
      dist: {
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    views: {

    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: paths.styles.src,
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}
