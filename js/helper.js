// variable to store the base y position for enemies and the addition to
// change the y value. Enemy start positions can be changed by just
// changing these two variables
var BASE = 60;
var ADD = 82;

// array that holds all the possible enemy start position heights (or Y values)
var enemyStartLocations = [BASE, BASE + ADD, BASE + ADD * 2, BASE + ADD * 3, BASE + ADD * 4];

// variable for score
var score = 0;

/* variable for the timer
 * for the timer we use simpleGame.js
 */
var timer;

/* Returns a random number from min to max
 * code from:
 * http://stackoverflow.com/questions/12885110/javascript-math-random
 */
function randomNum( min, max ){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function that checks for any collisions
function checkCollisions(){

	// iterate over all the enemies
	for(index in allEnemies)
	{
		// check if current (index) enemy, collides with player
		var enemy = allEnemies[index];
		if(collides(player, enemy)){
			// if there is a collision, remove enemy and reset the game
			enemy.remove();
			score = 0;
			timer.reset();
			player.x = 200;
			player.y = 400;
		}
	}
}

/* Checks if player collides with an enemy
 * code from Udacity Course:
 * https://www.udacity.com/course/viewer#!/c-cs255/l-52265917/e-130215280/m-129941633
 */
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