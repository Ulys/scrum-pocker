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
<<<<<<< HEAD
                src: ["js/*"],
                options:{
                    spec: ["tests/*"]
                }
=======
                src: ["js/"],
                spec: ["tests/"]
>>>>>>> 446124163863bf975d10b0d38e2a6a8ff902881c
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

<<<<<<< HEAD
    grunt.registerTask("test", ["jshint", "jasmine"]);
    grunt.registerTask("style", ["stylus"]);
    grunt.registerTask("default", ["jshint", "jasmine", "stylus"]);
=======
    grunt.registerTask("default", ["test", "style"]);
    grunt.registerTask("test", ["jshint", "jasmine"]);
    grunt.registerTask("style", ["stylus"]);
>>>>>>> 446124163863bf975d10b0d38e2a6a8ff902881c
}