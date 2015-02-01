// array of possible enemy starting locations

// bug height: 171 px

var base = 60;
var add = 82;

var enemyStartLocations = [base, base + add, base + add*2, base + add*3, base + add*4];

clickLocations = [];

// log clic locations for easy determination of coordinates
// from resume project

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
  objectAt(x,y);
}

$(document).click(function(loc) {  
	logClicks(loc.pageX, loc.pageY);
});

// returns a random number from 0 to toNum
function randomNum( toNum ){
    return Math.floor((Math.random() * toNum) + 1)
}

function checkCollisions(){
	
	var playerX = player.x;
	var playerY = player.y;

	for(enemy in allEnemies)
	{
		if(enemy.x === playerX && enemy.y === playerY){
			console.log("collision!!!!");
		}
	}
}

function objectAt(x, y)
{
	console.log("attempting to find object");
	for(enemy in allEnemies)
	{
		var boundX = enemy.x + enemy.width;
		var boundY = enemy.y + enemy.height;
		
		if((x >= enemy.x && x <= boundX) && ( y >= enemy.y && y <= boundY)){
			console.log("object found!!");
		}
	}
}