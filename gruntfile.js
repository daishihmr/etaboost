var SOURCES = [
    "main.js",
];

var BANNER = "/*\n\
 * <%= pkg.name %> v<%= pkg.version %>\n\
 * http://www.dev7.jp\n\
 * \n\
 * The MIT License (MIT)\n\
 * Copyright © 2014 daishi_hmr, dev7.jp\n\
 * \n\
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and\n\
 * associated documentation files (the “Software”), to deal in the Software without restriction, including\n\
 * without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies\n\
 * of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following\n\
 * conditions:\n\
 * \n\
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions\n\
 * of the Software.\n\
 * \n\
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n\
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n\
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n\
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n\
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n\
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n\
 * THE SOFTWARE.\n\
 */\n\
 \n";

module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-zip');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: {
            dist: {
                options: {
                    banner: BANNER,
                    sourceMap: true
                },
                files: {
                    "build/yokosuku.min.js": SOURCES
                }
            }
        },
        watch: {
            scripts: {
                files: ["main.js", "js/**/*.js"],
                tasks: ["uglify"]
            }
        },
        zip: {
            dist: {
                src: [
                    "index.html",
                    "build/yokosuku.min.js",
                    "plib/build/plib.min.js",
                    "fonts/*",
                    "sounds/*",
                    "images/*",
                ],
                dest: "_yokosuku.zip",
            },
        },
    });

    grunt.registerTask("default", ["uglify", "zip"]);

};
