
var fs= require('fs');

fs.readFile(process.argv[2],function(err,data){
  if (err){
    return console.error(err);
  }
  var text = data.toString();
  var espace = text.split('\n');
  console.log(espace.length-1);
})
