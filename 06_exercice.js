var fs = require("fs"); // importation du modue de gestion de fichiers
var http = require("http"); // importe le module serveur http

var obj;
fs.readFile('06_fichier.json', 'utf8', function (err, data){
	if(err) return console.error(err);
	obj = JSON.parse(data);
	console.log(obj.toString());
});



http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  response.write("<style>table {border-collapse: collapse;}table, th, td {border: 1px solid black;}td {padding:3%;}</style>");

  response.write(ecritureTableauProvince());	

  response.end(); 
}).listen(8888);

console.log("Program Ended");