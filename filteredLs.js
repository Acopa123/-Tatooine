var fs = require("fs");
var path = require("path");

var route = './';

fs.readdir(route, function (err, files) {
  if (err) {
        console.error(err);
    }
    files.filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
        console.log("%s (%s)", file, path.extname(file));
    });
});
