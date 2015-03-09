// array of possible enemy starting locations

// variable to store the base y position for enemies
var BASE = 60;
var ADD = 82;

// array that holds all the possible enemy start position heights (or Y values)
var enemyStartLocations = [BASE, BASE + ADD, BASE + ADD * 2, BASE + ADD * 3, BASE + ADD * 4];

// variable for score
var score = 0;

// variable for the timer
var timer;

// returns a random number from min to max
// http://stackoverflow.com/questions/12885110/javascript-math-random
function randomNum( min, max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkCollisions(){

	for(index in allEnemies)
	{
		var enemy = allEnemies[index];
		if(collides(player, enemy)){
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