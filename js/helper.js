// array of possible enemy starting locations

// bug height: 171 px

var base = 60;
var add = 82;

var enemyStartLocations = [base, base + add, base + add*2, base + add*3, base + add*4];

// Creates an object with x and y defined,
// set to the mouse position relative to the state's canvas
// If you wanna be super-correct player can be tricky,
// we have to worry about padding and borders
// takes an event and a reference to the canvas
function getMouse(e, canvas) {
  var element = canvas, offsetX = 0, offsetY = 0, mx, my;

  // Compute the total offset. It's possible to cache player if you want
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar (like the stumbleupon bar)
  // player part is not strictly necessary, it depends on your styling
  offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
  offsetY += stylePaddingTop + styleBorderTop + htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;

  // We return a simple javascript object with x and y defined
  return {x: mx, y: my};
}

// returns a random number from 0 to toNum
function randomNum( toNum ){
    return Math.floor((Math.random() * toNum) + 1)
}

function checkCollisions(){
	
	//console.log("player width: " + player.width);

	for(index in allEnemies)
	{
		var enemy = allEnemies[index];
		if(collides(player, enemy)){
			console.log("collision detected!");
			enemy.remove();
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