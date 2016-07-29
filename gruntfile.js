  // Gruntfile.js

  module.exports = function(grunt) {

      grunt.initConfig({

          express: {
              default_option: {}
          },

          // get the configuration info from package.json ----------------------------
          // this way we can use things like name and version (pkg.name)
          pkg: grunt.file.readJSON('package.json'),

          // all of our configuration will go here

          // configure jshint to validate js files -----------------------------------
          jshint: {
              options: {
                  reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
              },

              // when this task is run, lint the Gruntfile and all js files in src
              build: ['Gruntfile.js', '*.js']
          },


          // configure watch to auto update ----------------
          watch: {

              // for scripts, run jshint 
              scripts: {
                  files: '*.js',
                  tasks: ['jshint']
              }
          }

      });

      // ===========================================================================
      // LOAD GRUNT PLUGINS ========================================================
      // ===========================================================================

      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-express');
      grunt.registerTask('default', ['express']);

  };
