var fs = require("fs");
var file = process.argv[2];

fs.readFile(file, function(err,data){
    if(err){
        console.log("Couldn't read the file!");
    }else{
        var size = data.toString().split('\n').length-1;
    }
    console.log(size);
});