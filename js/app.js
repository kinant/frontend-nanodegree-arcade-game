"use strict";
// Enemies our player must avoid
var Enemy = function( x, y, speed, sprite) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 101;
    this.height = 171;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = sprite;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;

    // if the enemy runs off the screen, remove
    if(this.x > 505){
        this.remove();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.remove = function ()
{
    // clear the canvas rectangle represented by the enemy
    ctx.clearRect(this.x, this.y, this.width, this.height);

    // use the remove function from sugar-1.4.1-custom.min.js
    allEnemies.remove(this);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, sprite) {
    this.x = x;
    this.y = y;
    this.sprite = "images/char-boy.png";
    this.width = 101;
    this.height = 171;
};

Player.prototype.update = function( )
{
    // nothing
};

Player.prototype.changeSprite = function()
{
    // change sprite based on the value of the selected select menu option
    this.sprite = document.getElementById("charSprite").value;
};

Player.prototype.render = function()
{
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function ( key ){

    // if right was pressed + check bound
    if(key === "right" && this.x < 400){
       this.x += 100;
    }
    // if left was pressed + check bound
    else if(key === "left" && this.x > 0){
        this.x -= 100;
    }
    // if up was pressed + check bound
    else if(key === "up" && this.y > 0){

        // check if attempting to move to top of screen
        if(this.y === 60){

            // if so, reset player position
            this.x = 200;
            this.y = 400;

            // update score
            score += 50;
        }
        else {
            // if not, move player up
            this.y -= 85;
        }
    }
    // if down was pressed + check bounds
    else if(key === "down" && this.y < 400){
        this.y += 85;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player;

function spawnPlayer( sprite ){
    player = new Player( 200, 400, sprite);
}

// variable to store where last enemy spawned. This way enemies will spawn at a different y value each time.
var lastEnemyStart = 0;

// function that spawns an enemy
function spawnEnemy(){

    // variables for min and max speed
    var min_speed = 20,
    	max_speed = 100;

    // set the default sprite
    var enemy_sprite = 'images/enemy-bug.png';

    // we want the enemy to spawn at a new location
    var newStart = randomNum(0, 4);

    // so continue to set the newStart until it does not equal the last spawn location
    while(newStart === lastEnemyStart){
        newStart = randomNum(0, 4);
    }

    // use a random int to determine when a car will spawn
    var randomInt = randomNum(0, 10);

    // spawn a car enemy when the random int is 5, 7 or 0
    if(randomInt === 7 || randomInt === 5 || randomInt === 0){

        // make the min and max speeds higher
        min_speed = 150;
        max_speed = 200;

        // change to car sprite
        enemy_sprite = 'images/enemy-car.png';
    }

    // create the enemy
    var enemy = new Enemy(0, enemyStartLocations[newStart], randomNum(min_speed, max_speed), enemy_sprite);

    // set the value of the last spawn location
    lastEnemyStart = newStart;

    // push the enemy into the array
    allEnemies.push(enemy);

}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
