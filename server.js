const fs = require('fs');
var inputDir = "input";
var outputDir = "output";
var file = "";

var newFile = "";

//TODO solve the sync problem
function sleep(time, callback) {
    var stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
    callback();
}

function rename(inputDir){
	fs.readdir(inputDir, function(err, filenames) {

	    if (err) {
	      onError(err);
	      return;
	    }

  	filenames.forEach(function(filename) {

			var res = filename.split('.');
			console.log('extension:' + res[1]);
			console.log(filename);
			console.log("newFile:" + filename.substring(0,4) + "-" +filename.substring(4,6) + "-" + filename.substring(6,8) + ' ' + filename.substring(9,11) + '.' + filename.substring(11,13) + '.' + filename.substring(13,15)+ '.' + res[1]);
			newFile = filename.substring(0,4) + "-" +filename.substring(4,6) + "-" + filename.substring(6,8) + ' ' + filename.substring(9,11) + '.' + filename.substring(11,13) + '.' + filename.substring(13,15)+ '.' + res[1];
			var newName = inputDir+filename;
			
			fs.rename(newName, inputDir+newFile, function (err) {
				if (err){
					throw err;
		  		}
		  		fs.stat(newName, function (err, stats) {
		    		if (err){
		    			throw err;
		    		}
		    	console.log('stats: ' + JSON.stringify(stats));
		  		});
			});
		});
	});
}


/*renameFile(inputDir+'/',outputDir+'/', function(filename, content) {
  data[filename] = content;
}, function(error) {
  throw err;
});
*/
rename(inputDir+'/');