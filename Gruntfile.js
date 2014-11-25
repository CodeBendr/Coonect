module.exports = function (grunt) {

    grunt.initConfig({
        path: {
            dev: 'dev/parse',
            prod: 'prod/parse',
            sass: '<%= path.dev %>/public/scss',
            stylesheet: '<%= path.dev %>/public/stylesheet',
            foundation_sass: '<%= path.sass %>/app.scss',
            foundation_css: '<%= path.stylesheet %>/app.css',
            foundation_settings: '<%= path.sass %>/_settings.scss'
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                },
                files: {
                    'style/style.css': 'style/sass/style.scss'
                }
            },
            foundation: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none',
                    loadPath: ['bower_components/foundation/scss']
                },
                files: {
                    '<%= path.foundation_css %>': '<%= path.foundation_sass %>'
                }
            }
        },
        watch: {
            grunt: {
                files: [
                    'Gruntfile.js'
                ]
            },
            foundation: {
                files: [
                    '<%= path.foundation_sass %>',
                    '<%= path.foundation_settings %>'
                ],
                tasks: "sass:foundation"
            }
        }
    });

    //basic file manipulation
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //file minification
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // grunt.loadNpmTasks('grunt-contrib-usemin');

    //testing
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    //file linting
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');

    //pro-processors
    grunt.loadNpmTasks('grunt-contrib-sass');

    //file watcher
    grunt.loadNpmTasks('grunt-contrib-watch');

    //define dev task - grunt dev
    // grunt.registerTask('dev', ['env:prod','copy', 'htmlmin', 'jshint:prod']);

    //define productions task - grunt prod
    // grunt.registerTask('prod', ['env:prod','copy', 'htmlmin', 'jshint:prod']);


    //define the default task - grunt
    //grunt.registerTask('default', ['env:dev','copy', 'jshint:dev', 'watch']);

};
