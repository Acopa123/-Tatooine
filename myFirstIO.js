var fs = require("fs");
var file = fs.readFileSync(process.argv[2]);
var quantity = file.toString();
var line = quantity.split('\n');
console.log(line.length-1);
