var gulp = require('gulp'), //referencia a gulp

//gulp es solo el task-runner, entonces para lo que necesitamos esta nodemon

nodemon = require ('gulp-nodemon');
gulp.task('default', function(){
    nodemon({                       //json para configurar
        script: 'app.js',  //que es lo que va a correr
        ext: 'js',   //what to watch for
        env: {
            PORT:8888
        },
        ignore: ['./node_modules/**']
    })
    .on('restart',function(){
        console.log('Restarting')
    });
});
