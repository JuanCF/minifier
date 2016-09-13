"use strict";

var fs = require('fs'),
	path = require('path'),
	gulp = require('gulp'),
	sh = require('shelljs'),
	ngAnnotate  = require('gulp-ng-annotate'),
	uglify = require('gulp-uglify'),
	notify = require('gulp-notify'),
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
	if (!sh.test('-e', destDir)) {
		console.log("Directory " + destDir + " does not exists, creating it...");
		sh.mkdir('-p', destDir);
	}

	directoriesToCopy.forEach(function (dir, idx) {
		var commandToExec = "cp -R " + basePath + '/' + dir + ' ' + destDir;
		sh.exec(commandToExec, function (code, stdout, stderr) {
			if (code === 0) {
				console.log("Sucessfully copied " + basePath + '/' + dir + " to " + destDir);
			} else {
				console.log("Failed to copy " + basePath + '/' + dir + " to " + destDir);
				console.log("Error", stderr);
			}
		});
	});
});

gulp.task('minify', function () {
	var destDir = argv.dest;
	var dirsDestToCompress = [
		'www/js/**/*.provider.js',
		'www/js/**/*.factory.js',
		'www/js/**/*.controller.js',
		'www/js/**/*.service.js'
	];
	dirsDestToCompress.forEach(function (relPath, idx) {
		var path = destDir+'/'+relPath;
		gulp.src([path,'!'+destDir+'/'+'www/js/app.js','!www/js/**/*.min.js'])
			.pipe(ngAnnotate())
			.on('error', notify.onError("Error: <%= error.message %>"))
			.pipe(uglify())
			.on('error', notify.onError("Error: <%= error.message %>"))
			.pipe(gulp.dest(destDir+'/'+'www/js/'));
	});
});

gulp.task('restoreJS',function(){
	var basePath = argv.source;
	var destDir = argv.dest;
	var directoriesToCopy = [
		'www'
	];
	if (!sh.test('-e', destDir)) {
		console.log("Directory " + destDir + " does not exists, creating it...");
		sh.mkdir('-p', destDir);
	}

	directoriesToCopy.forEach(function (dir, idx) {
		var commandToExec = "cp -R " + basePath + '/' + dir + ' ' + destDir;
		sh.exec(commandToExec, function (code, stdout, stderr) {
			if (code === 0) {
				console.log("Sucessfully copied " + basePath + '/' + dir + " to " + destDir);
			} else {
				console.log("Failed to copy " + basePath + '/' + dir + " to " + destDir);
				console.log("Error", stderr);
			}
		});
	});
});
