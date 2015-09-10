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
    },

    connect: {
        sample: {
            options: {
                port: 8334,
                hostname: 'localhost'
            }
        }
    }

  });

  grunt.loadNpmTasks('grunt-typescript');  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', [ 'typescript', 'connect:sample', 'watch' ]);
};
