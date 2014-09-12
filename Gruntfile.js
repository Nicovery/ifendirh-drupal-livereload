/*global module:false*/
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        compass: { // Task
            dist: { // Target
                options: { // Target options
                    sassDir: 'sites/all/themes/tasker/sass',
                    cssDir: 'sites/all/themes/tasker/css' //,
                    //environment: 'production'
                }
            }
        },
        watch: {
            sass: {
                files: '**/*.scss',
                tasks: ['compass']S
            },
            php: {
                files: '**/*.php',
                options: {
                    livereload: true,
                },
            },
            css: {
                files: '**/*.css',
                options: {
                    livereload: true,
                },
            },
        }
    });
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    // Default task.
    grunt.registerTask('default', ['watch']);
};