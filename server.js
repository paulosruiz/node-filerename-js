const fs = require('fs');
var inputDir = "input2";
var outputDir = "output";
var file = "";

var newFile = "";
newFile = "t.txt";

//TODO solve the sync problem
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

function renameFile(inputDir,outputDir, onFileContent, onError) {
  fs.readdir(inputDir, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }

    filenames.forEach(function(filename) {

    	//TODO colocar em uma funcao
//20131102_181816.jpg
var res = filename.split('.');
console.log('extension:' + res[1]);
console.log(filename);
console.log("newFile:" + filename.substring(0,4) + "-" +filename.substring(4,6) + "-" + filename.substring(6,8) + ' ' + filename.substring(9,11) + '.' + filename.substring(11,13) + '.' + filename.substring(13,15)+ '.' + res[1]);
newFile = filename.substring(0,4) + "-" +filename.substring(4,6) + "-" + filename.substring(6,8) + ' ' + filename.substring(9,11) + '.' + filename.substring(11,13) + '.' + filename.substring(13,15)+ '.' + res[1];

//  	2016-03-06 21.44.48
		file=inputDir + filename;
		newFile = outputDir + newFile;
      fs.readFile(file, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }

        fs.createReadStream(file).pipe(fs.createWriteStream(newFile));
sleep(1000, function() {
   // executes after one second, and blocks the thread
});

       /*  fs.rename(file, outputDir + file + '2.txt', function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
        */
      });
    });
  });
}

var data = {};
renameFile(inputDir+'/',outputDir+'/', function(filename, content) {
  data[filename] = content;
}, function(error) {
  throw err;
});