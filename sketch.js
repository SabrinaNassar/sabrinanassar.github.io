var mySound;
let circles = [];
var n = 500;
var d = 10;


function preload(){
  soundFormats('mp3','ogg');
  mySound = loadSound ('Control.mp3');
}
/*function mouseClicked()

function mouse() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
*/
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
	colorMode(HSB);
  background(100);
  background(255);

  //mySound.setVolume(0,500);
  mySound.loop();


	for (let i = 0; i < n; i++) {
// Origating line
  /*	circles.push({
      x: (i/n)*width,
      y: sin(PI/500 *i)*height/3*2,
      vx: random(-sin(PI/360*i), sin(PI/360*i)),
      vy: random(-sin(PI/360*i), cos(PI/360*i))
    });*/
	}
  background(100);
}


function draw() {


if (mouseIsPressed){
  circles.push({
    x: mouseX,
    y: mouseY,
    vx: random(-.5,.5),
    vy: random(-.5,.5),
  });
//  mySound.pan(mouseX);
//  mySound.play();
}
//else {
  //mySound.stop()
//}


  n = sin(PI/360 * millis())+1*10;
  // HSB: fully orange (hue of 30, sat & bri at 100%), 0.03 opacity
  stroke(random (100,300), 100, 100, 0.03);
  //strokeWeight(1);
	for (let i = 0; i < circles.length; i++) {
    // for each circle
    let from = circles[i];
		for (let j = i+1; j < circles.length; j++) {
      let to = circles[j];
			if (dist(from.x, from.y, to.x, to.y) < d) {
        /*
        if(from.x < width-100 && from.x > 100 &&
           from.y < height-100 && from.y > 100 &&
           to.x < width-100 && to.x > 100 &&
           to.y < height-100 && to.y > 100
          )
          */
				line(from.x, from.y, to.x, to.y);
		  }
    }
    move(from);
  }
}

function move(circle) {
  circle.x += circle.vx;
  circle.y += circle.vy;

  if (circle.x < -d || circle.x > width+d) {
    //circles.splice(circles.indexOf(circle), 1);
    circle.vx *= -1;
  }
  if (circle.y < -d || circle.y > height+d) {
    //circles.splice(circles.indexOf(circle), 1);
    circle.vy *= -1;
  }
}
