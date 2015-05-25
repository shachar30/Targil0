var http=require('http');
var Player=require("./index.js");
var port = process.env.PORT || 8080;


var reqhandlr= function(req,res){

	res.end("our first node");
}
var server=http.createServer(reqhandlr);
server.listen(port);




Player.Up(220);
Player.down(100);
