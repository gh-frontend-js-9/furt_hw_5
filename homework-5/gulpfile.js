var gulp = require("gulp"),
    sass = require("gulp-sass"),
    watch = require('gulp-watch'),
    browserSync = require("browser-sync").create();

function sasss() {
    return gulp.src('./app/**/*.sass') //вернуть функцию-источник
        .pipe(sass())  //преобразование  
        .pipe(gulp.dest('./app/css'))   //выведение в папку
        .pipe(browserSync.reload({stream:true}))
};

function watchFiles() {
    browserSync.init({
        server: {
            baseDir: './app',
            index: '/html/hw-4.html'
        }
    })

    gulp.watch('./app/**/*.sass', {}, sasss);
    gulp.watch('./app/html/**/*.html').on('change', browserSync.reload);
}

exports.watch = watchFiles;







// gulp.task('watch',function(){
//  gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
//  gulp.watch('app/sass/**/*.sass', gulp.series('scss'));
//  gulp.watch('app/html/**/*.sass', gulp.series('html'));
// });


// gulp.task('sass', function(){
//  return gulp.src('app/sass/**/*.sass') //вернуть функцию-источник
//      .pipe(sass())  //преобразование  
//      .pipe(gulp.dest('app/css'))   //выведение в папку
//      // .pipe(browserSync.reload({strem:true}))
// });

// gulp.task('browserSync', function() {
//   browserSync({
//     server: { 
//       baseDir: 'app/'
//     },
//     notify:false
//   });
// });




// function style() {
//  return (
//      gulp
//          .src(app/sass/**/*.sass)
//          .pipe(sourcemaps.init())
//          .pipe(sass())
//          .on("error", sass.logError)
//          .pipe(sourcemaps.write(./))
//          .pipe(gulp.dest(app/css))
//          .pipe(browserSync.stream())
//  );
// }

// function watch() {
//  browserSync.init({
//      server: {
//          baseDir: "app"
//      }     
//  });
//  gulp.watch("app/*.sass", style); 
// }

// function reload() {
//     browserSync.reload();
// }
 
// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     gulp.watch(app);
//     gulp.watch("app/sass/**/*.sass", reload);
// }

