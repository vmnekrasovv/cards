// VARIABLES & PATHS

let preprocessor = 'scss', // Preprocessor (sass, scss, less, styl)
    fileswatch   = 'html,htm,txt,json,md,woff2', // List of files extensions for watching & hard reload (comma separated)
    imageswatch  = 'jpg,jpeg,png,webp,svg', // List of images extensions for watching & compression (comma separated)
    baseDir      = 'app', // Base directory path without «/» at the end
    online       = true; // If «false» - Browsersync will work offline without internet connection

let paths = {

	scripts: {
		src: [
			baseDir + '/js/jquery.min.js',
			baseDir + '/js/category.js',
			baseDir + '/js/lazyload.min.js',
			baseDir + '/js/app.js' // app.js. Always at the end
		],
		dest: baseDir + '/js',
	},

	styles: {
		src:  baseDir + '/' + preprocessor + '/app.*',
		dest: baseDir + '/css',
	},

	images: {
		src:  baseDir + '/images/design/money/**/*',
		dest: baseDir + '/images/dest/design/money',
	},


	dist: 'dist',

	cssOutputName: 'app.min.css',
	jsOutputName:  'app.min.js',

}



// LOGIC

const { src, dest, parallel, series, watch} = require('gulp');
const fs           = require('fs');
const path         = require('path');
const dir         = require('dir');
const sass         = require('gulp-sass')(require('sass'));
const cleancss     = require('gulp-clean-css');
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const rsync        = require('gulp-rsync');
const del          = require('del');

function browsersync() {
	browserSync.init({
		server: { baseDir: baseDir + '/' },
		notify: false,
		online: online
	})
}

function scripts() {
	return src(paths.scripts.src)
	.pipe(concat(paths.jsOutputName))
	.pipe(uglify())
	.pipe(dest(paths.scripts.dest))
	.pipe(browserSync.stream())
}

function styles() {
	return src(paths.styles.src)
	.pipe(sass())
	.pipe(concat(paths.cssOutputName))
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
	.pipe(dest(paths.styles.dest))
	.pipe(browserSync.stream())
}

function images() {
	return src(paths.images.src)
	.pipe(newer(paths.images.dest))
	.pipe(imagemin())
	.pipe(dest(paths.images.dest))
  .pipe(browserSync.stream())
}


function startwatch() {
	watch(baseDir  + '/**/' + preprocessor + '/**/*', styles);
	watch(baseDir  + '/**/*.{' + fileswatch + '}').on('change', browserSync.reload);
	watch([baseDir + '/**/*.js', '!' + paths.scripts.dest + '/*.min.js'], scripts);
}

async function tt() {
  let path  = './app/images/design/taro/';

  fs.readdir(path, function(err, items) {
	let files = JSON.stringify(items);
	fs.writeFile('./app/js/file_names.js', files, () => true);
  });
}

exports.browsersync = browsersync;
exports.assets      = series(styles, scripts);
exports.tt       	= tt;
exports.images      = images;
exports.styles      = styles;
exports.scripts     = scripts;
exports.default     = parallel(styles, scripts, browsersync, startwatch);