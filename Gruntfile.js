module.exports = function (grunt) {

    grunt.initConfig({
        path:{
            dev:'dev/parse/',
            prod:'prod/parse/',
            styleguide:'<% path.dev %>/public/styleguide',
            stylesheet:'<% path.dev %>/public/stylesheet',
            foundation_sass:'<% path.styleguide %>/foundation/app.scss',
            foundation_css:'<% path.stylesheet %>/app.css'
        },
        sass: {
            options: {
                sourceMap: false
            },
            main: {
                files: {
                    'main.css': 'main.scss'
                }
            },
            foundation: {
                files: {
                    '<% path.foundation_sass %>': '<% path.foundation_css %>'
                }
            }
        }
    });
};
