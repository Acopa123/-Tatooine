function sum() {
  var suma= 0;

  for (var i = 2; i < process.argv.length; i++) {
        suma += parseInt(process.argv[i]);

  }
  return suma;
}
console.log(sum());
