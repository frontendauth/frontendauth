// Path variables
// The assets and distribution paths
var assets_path = "assets",
    dist_path = "dist";
// The `paths` object holds the source and distribution paths of all the directories
// Edit once here and it will work everywhere
// Most tasks only require the directory by default, but some need files.
// Use paths.type.src model for directories, and paths.type.src_file model for files
var paths = {
  styles: {
    src : assets_path+'/styles',
    dist : dist_path+'/css',
    srcfiles : [assets_path+'/styles/**/*.scss', assets_path+'/styles/**/*.sass'],
    srcmainfile: assets_path+'/styles/app.scss',
    distmainfile: dist_path+'/css/app.css' //currently broken
  },
  views: {
    src: assets_path+'/views',
    dist: dist_path,
    srcfiles: [ assets_path+'/views', assets_path+'/views/**/*.html' ]
  },
  images: {
    src: assets_path+'/images',
    dist: dist_path+'/img',
    srcfiles: [assets_path+'/images/**/*.jpg', assets_path+'/images/**/*.png', assets_path+'/images/**/*.gif', assets_path+'/images/**/*.svg'],
  },
  scripts: {
    src: assets_path+'/scripts',
    dist: dist_path+'/js',
    srcfiles: [ assets_path+'/scripts/**/*.js', assets_path+'/scripts/**/*.coffee' ]
  },
  server: {
    src: assets_path+'/server',
    dist: dist_path,
    srcfiles: assets_path+'/server/**/*',
  }
};
module.exports = function(grunt) {
  var styles_dist_mainfile = paths.styles.distmainfile;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /**
     * Sass
     */
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
          // styles_dist_mainfile: paths.styles.srcmainfile //this should work
          'dist/css/app.css': paths.styles.srcmainfile
        }
      }
    },

    /**
     * Copy files that don't need to be compiled or modified
     */
    copy: {
      //Images
      images: {
        files: [ {expand: true, cwd: paths.images.src, src: ['**'], dest: paths.images.dist} ],
      },
      //JavaScript
      scripts: {
        files: [ {expand: true, cwd: paths.scripts.src, src: ['**'], dest: paths.scripts.dist} ],
      },
      //Files at the root of the server (favicon, robots, htaccess, etc)
      server: {
        files: [ {expand: true, cwd: paths.server.src, src: ['**'], dest: paths.server.dist} ],
      },
      //Views
      views: {
        files: [ {expand: true, cwd: paths.views.src, src: ['**'], dest: paths.views.dist} ],
      },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      styles: {
        files: paths.styles.src,
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.task.registerTask('images', ['copy:images']);
  grunt.task.registerTask('server', ['copy:server']);
  grunt.task.registerTask('scripts', ['copy:scripts']);
  grunt.task.registerTask('styles', ['sass']);
  grunt.task.registerTask('views', ['copy:views']);

  grunt.registerTask('build', [
    'images',
    'server',
    'scripts',
    'styles',
    'views'
  ]);
  grunt.registerTask('default', ['build','watch']);
}
