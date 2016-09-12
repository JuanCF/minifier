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
	var directoriesToCopy = [
		'hooks/**/*',
		'node_modules/**/*',
		'platforms/**/*',
		'plugins/**/*',
		'resources/**/*',
		'scss/**/*',
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

	/*var directoriesToCopy = [
		'hooks',
		'node_modules',
		'platforms',
		'plugins',
		'resources',
		'scss',
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
		sh.cp('-Rf', basePath + '/' + dir, 'build/'+dir);
	});*/
	gulp.src(directoriesToCopy, {
		base: basePath
	})
  	.pipe(gulp.dest('build'));
});
