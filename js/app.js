// Enemies our player must avoid
var Enemy = function( x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.width = 101;
    this.height = 171;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x > 400){
        console.log("removing!!");
        this.remove();
    }

    this.x = this.x + this.speed * dt;
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Enemy.prototype.remove = function ()
{
    ctx.clearRect(this.x, this.y, this.width, this.height);
    allEnemies.pop(this);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.sprite = "images/char-boy.png";
    this.width = 101;
    this.height = 171;
}

Player.prototype.update = function( dt )
{
}

Player.prototype.render = function()
{
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

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
}

// canvas is 505 x 606

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player;

function spawnPlayer(){
    player = new Player( 200, 400);
}

var lastEnemyStart = 0;
// function that spawns an enemy
function spawnEnemy(){

    var newStart = randomNum(4);
    
    while(newStart === lastEnemyStart){
        newStart = randomNum(4);
    }

    var enemy = new Enemy(0, enemyStartLocations[newStart], randomNum(100));
    
    lastEnemyStart = newStart;

    allEnemies.push(enemy);

};

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
