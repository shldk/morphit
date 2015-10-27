# gulp-morphit [![Build Status](https://travis-ci.org/stashladki/gulp-morphit.svg?branch=master)](https://travis-ci.org/stashladki/gulp-morphit)

> My posh gulp plugin


## Install

```
$ npm install --save-dev gulp-morphit
```


## Usage

```js
var gulp = require('gulp');
var morphit = require('gulp-morphit');

gulp.task('default', function () {
	return gulp.src('src/file.ext')
		.pipe(morphit())
		.pipe(gulp.dest('dist'));
});
```


## API

### morphit(options)

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [hladkis](https://github.com/stashladki)
