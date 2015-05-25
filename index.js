var events=require('events');
var util= require('util');
util.inherits(player,events.EventEmitter);


function player () {
	this.shots=0;
	events.EventEmitter.call(this);
}

player.prototype.Up=function(goal){

	this.shots+=goal;
	this.emit('ShotsChange');
}

player.prototype.down=function(goal){

	this.shots-=goal;
	this.emit('ShotsChange');
}

function displayShots(){

	console.log("the shots of basktball player:"+this.shots);
}
function CheckShotsChange(){

	if (this.shots<0) {

		console.log("you cant go down below ZERO");
	}

}
var Player= new player;
Player.on("ShotsChange",displayShots);
Player.on("ShotsChange",CheckShotsChange);
module.exports=Player;

