// array of possible enemy starting locations

// bug height: 171 px

var base = 60;
var add = 82;

var enemyStartLocations = [base, base + add, base + add*2, base + add*3, base + add*4];

clickLocations = [];

var counter = 100;

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
}

$(document).click(function(loc) {  
	logClicks(loc.pageX, loc.pageY);
});

// returns a random number from 0 to toNum
function randomNum( toNum ){
    return Math.floor((Math.random() * toNum) + 1)
}