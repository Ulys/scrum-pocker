module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        jshint: {
            files: ["js/*"],
            options: {
                bitwise: true,
                freeze: true,
                noarg: true,
                noempty: true,
                nonew: true,
                eqeqeq: true,
                curly: true,
                newcap: true,
                forin: true,
                // undef: true,
                browser: true,
                strict: true,
                unused: true,
                maxparams: 3,
                maxlen: 90,
                globals: {
                    console: true,
                    Team: true,
                    UserStory: true,
                    Templates: true
                }
            }
        },
        stylus: {
            options: {
                compress: false,
            },
            all: {
                files: {
                    "css/main.css": "stylus/main.styl",
                    "css/circle.css": "stylus/circle.styl"
                }
            }
        },
        open: {
            file:{
                path: "index.html",
                app: "google-chrome"
            }
        },
        watch: {
            files: ["js/*", "css/*", "stylus/*"],
            tasks: ["jshint", "stylus"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-stylus");
    grunt.loadNpmTasks("grunt-open");

    grunt.registerTask("default", ["jshint", "style", "open", "watch"]);
    grunt.registerTask("test", ["jshint"]);
    grunt.registerTask("style", ["stylus"]);
}