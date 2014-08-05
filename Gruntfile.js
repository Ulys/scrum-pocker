module.exports = function(grunt) {

    'use strict';

    grunt.initConfig({
        jshint: {
            files: ["js/*"],
            options: {
                eqeqeq: true,
                curly: true,
                latedef: true,
                newcap: true,
                undef: true,
                browser: true
            }
        },
        jasmine: {
            pivotal: {
                src: ["js/"],
                spec: ["tests/"]
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
        watch: {
            files: ["js/*", "css/*", "stylus/*"],
            tasks: ["jshint", "jasmine", "stylus"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-jasmine");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-stylus");

    grunt.registerTask("default", ["test", "style"]);
    grunt.registerTask("test", ["jshint", "jasmine"]);
    grunt.registerTask("style", ["stylus"]);
}