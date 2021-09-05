module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			options: {
				compress: {
					global_defs: {
						'NUMERIC_FORMAT_BROWSER_CONTEXT': true
					},
					dead_code: true
				},
				output: {
					comments: 'some',
				},
			},
			min: {
				files: {
					'numer.min.js': ['numer.js']
				},
			},
		},
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('build', ['uglify']);
	grunt.registerTask('default', ['uglify']);
};
