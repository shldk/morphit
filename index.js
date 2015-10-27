'use strict';
var gutil = require('gulp-util');
var through = require('through2');

function replaceClasses(html, data) {

	//use regex group, because js doesn't support lookbehinds
	var modifiedHtml = html.replace(/(class[\s]*=[\s]*")([^"]+)(")/g, function (match, start, classes, end) {
		return start + classes.replace(/[^\s]+/g, function (clazz) {
				if (clazz in data) {
					return data[clazz];
				}
				return clazz;
			}) + end;
	});

	return new Buffer(modifiedHtml);
}

function morphit(options) {
	if (!options.data) {
		throw new gutil.PluginError('gulp-morphit', '`data` required');
	}

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-morphit', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = replaceClasses(file.contents.toString(), options.data);
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-morphit', err));
		}

		cb();
	});
}

module.exports = morphit;
