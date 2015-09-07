module.exports = function(grunt) {

  grunt.initConfig({

    typescript: {
      base: {
        src: [ "typescript/**/*.ts" ],
        dest: "build/javascript",
        options: {
          module: 'amd',
          target: 'es5',
          sourceMap: true
        }
      }
    },

    watch: {
      scripts: {
        files: [ 'typescript/**/*.ts' ],
        tasks: [ 'typescript:base' ]
      }
    },

    bowerInstall: {
        target: {
            src: [ '**/*.html' ]
        }
    }

  });

  grunt.loadNpmTasks('grunt-typescript');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install');

  grunt.registerTask('default', [ 'typescript', 'watch' ]);
};
