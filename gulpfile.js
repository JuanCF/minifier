"use strict";

var fs = require('fs'),
	path = require('path'),
	gulp = require('gulp'),
	sh = require('shelljs'),
	argv = require('yargs').argv;

gulp.task('testTask', function () {
	console.log(argv);
});

gulp.task('copyFiles', function () {
	var basePath = argv.source;
	var destDir = argv.dest;
	var directoriesToCopy = [
		'hooks',
		'node_modules',
		'platforms',
		'plugins',
		'resources',
		'scss',
		'www',
		'.bowerrc',
		'.editorconfig',
		'.gitignore',
		'.brackets.json',
		'bower.json',
		'config.xml',
		'gulpfile.js',
		'ionic.project',
		'ionic.config.json',
		'package.json',
		'README.md'
	];

	directoriesToCopy.forEach(function (dir, idx) {
		var commandToExec = "cp -R " + basePath + '/' + dir + ' ' + destDir;
		sh.exec(commandToExec, function (code, stdout, stderr) {
			if(code === 0){
				console.log("Sucessfully copied "+ basePath + '/' + dir +" to "+ destDir);
			}else{
				console.log("Failed to copy "+ basePath + '/' + dir +" to "+ destDir);
				console.log("Error",stderr);

			}
		});
	});
});
