module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'public/processed/js/app.js': ['public/js/app.js']
          } //files
        } //my_target
      } //uglify
  }) //initConfig
} //exports
