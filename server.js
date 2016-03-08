const fs = require('fs');
var inputDir = "input";
var outputDir = "input";
var file = "";
function renameFile(inputDir,outputDir, onFileContent, onError) {
  fs.readdir(inputDir, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
file=inputDir + filename;
      fs.readFile(file, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
         fs.rename(file, outputDir + file + '2.txt', function(err) {
            if ( err ) console.log('ERROR: ' + err);
        });
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