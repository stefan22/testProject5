module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.initConfig({
      uglify: {
        my_target: {
          files: {
            'public/processed/js/app.js': 'public/js/app.js',
            'public/processed/js/gitUserSearchController.js': 'public/js/gitUserSearchController.js',
            'public/processed/js/searchFactory.js': 'public/js/searchFactory.js'

          } //files
        } //my_target
      }, //uglify
    
      watch: {
        options: {livereload: true },//options  it doesn't work if used 9292
        scripts: {
          files: ['public/js/*.js'],
          tasks: ['uglify']
        },//scripts
        html: {
          files: ['*.html']
        }
      } //watch

  }) //initConfig
  grunt.registerTask('default', 'watch');
} //exports
