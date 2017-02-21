var fs = require("fs"); // importation du modue de gestion de fichiers
var http = require("http"); // importe le module serveur http

var obj;
fs.readFile('06_fichier.json', 'utf8', function (err, data){
	if(err) return console.error(err);
	obj = JSON.parse(data);
	console.log(obj.toString());
});

function ecritureTableauProvince(){

	var sChaine = "";

	sChaine += "<h1>Tableau de provinces</h1>";
	sChaine += "<table>";
	for (province in obj){

		sChaine += "<tr><td>" + province + "</td><td>" + obj[province].toString() + "</td></tr>";
	}
	sChaine += "</table>";

	return sChaine;
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  

  response.write(ecritureTableauProvince());	

  response.end(); 
}).listen(8888);

console.log("Program Ended");