'use strict';
var gutil = require('gulp-util');
var morphit = require('./');

var data = {};
data.bla = 'such-class';

var stream = morphit({ data: data});

stream.on('data', function (file) {
	console.log(file.contents.toString());
});

stream.on('end', console.log);

stream.write(new gutil.File({
	base: __dirname,
	path: __dirname + '/file.ext',
	contents: new Buffer('<body class="bla bla">')
}));

stream.end();
