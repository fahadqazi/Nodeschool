var fs = require('fs');
var file = fs.readFileSync('process.argv[1]');

var count = 0;

var file_split = file.split('/n');

console.log(file_split.length);