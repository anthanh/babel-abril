module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take.
    require('time-grunt')(grunt);

    var appConfig = {
        hostname: '0.0.0.0',
        dist: 'dist',
        app: 'app',
        port: grunt.option('port') || 9000,
        livereloadPort: 55555
    };

    grunt.initConfig({

        appConfig: appConfig,

        connect: {
            options: {
                port: appConfig.port,
                hostname: '<%= appConfig.hostname %>', // underscore
                livereload: appConfig.livereloadPort
            },
            livereload: {
                options: {
                    open: true,
                    base: ['.tmp', '.', 'app']
                }
            },
            dist: {
                options: {
                    open: true,
                    base: ['.tmp', 'dist']
                }
            }
        },

        watch: {
            sass: {
                files: [
                    '<%= appConfig.app %>/styles/**/*.{scss,sass}'
                ],
                tasks: ['sass', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= appConfig.livereloadPort %>'
                },
                files: [
                    '<%= appConfig.app %>/**/*.html',
                    '.tmp/styles/{,*/}*.css',
                    '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ]
            }
        },


    });

    // default task
    grunt.registerTask('default', ['connect:livereload', 'watch']);

};
