module.exports = function(grunt){
	
	//project configuration
	grunt.initConfig({
			pkg:grunt.file.readJSON('package.json'),
			sass:{ //sass tasks
				dist:{
					options:{
						style:'expanded'

					},
					files: {
						'css/style.css':'sass/style.scss'
					}
					
				}
			},
			
			cssmin:{ //minifying css
				dist:{
					files: {
					'css/style.min.css':'css/style.css'
				}
			}
					
			},
			
			watch:{ //watch tasks 
				sass: {
					files:['sass/**/*.scss'],
					tasks:['sass']
				},
				styles:{
					files:['css/style.css'],
					tasks:['cssmin']
				}
			}
			
			
		});
	
	
	
	
	//load the plugin to minify, sass & watch 
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	
	
	//Default tasks
	grunt.registerTask('default',['sass','cssmin']);
	
};