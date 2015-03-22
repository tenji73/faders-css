module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  var concatAnim;

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),


    cssmin: {
      minify: {
        src: ['faders.css'],
        dest: 'faders.min.css',
      }
    },

    uglify: {
      options: {
      mangle: false
    },
      js: {
        src: ['faders.js'],
        dest: 'faders.min.js',
      }
    },

    watch: {
      css: {
        files: [ 'faders.css','faders.js'],
        tasks: ['default']
      }
    }

  });

  

  grunt.registerTask('default', ['cssmin','uglify']);
  grunt.registerTask('dev', ['watch']);

};
