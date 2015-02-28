// array of possible enemy starting locations

// bug height: 171 px

var base = 60;
var add = 82;

// array that holds all the possible enemy start position heights (or Y values)
var enemyStartLocations = [base, base + add, base + add*2, base + add*3, base + add*4];

// variable for score
var score = 0;
var timer;

// returns a random number from 0 to toNum
// http://stackoverflow.com/questions/12885110/javascript-math-random
function randomNum( toNum ){
    return Math.floor(Math.random() * (toNum + 1));
}

function checkCollisions(){
	
	for(index in allEnemies)
	{
		var enemy = allEnemies[index];
		if(collides(player, enemy)){
			console.log("collision detected!");
			enemy.remove();
			score = 0;
			timer.reset();
			player.x = 200;
			player.y = 400;
		}
	}
}

// from https://www.udacity.com/course/viewer#!/c-cs255/l-52265917/e-130215280/m-129941633
function collides(player, enemy) {
	
	var r1 = {
		"top": player.y + 65,
		"bottom": player.y + player.height - 30,
		"right": player.x + player.width - 30,
		"left": player.x + 36
	};
	
	var r2 = {
		"top": enemy.y + 85,
		"bottom": enemy.y + enemy.height - 30,
		"right": enemy.x + enemy.width - 7,
		"left": enemy.x + 7
	};

	return !(r2.left > r1.right ||
			 r2.right < r1.left ||
			 r2.top > r1.bottom ||
			 r2.bottom < r1.top)
}