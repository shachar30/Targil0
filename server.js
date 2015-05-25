var http=require('http');
var Player=require("./index.js")


var reqhandlr= function(req,res){

	res.end("our first node");
}
var server=http.createServer(reqhandlr);
server.listen(3000);




Player.Up(220);
Player.down(100);
