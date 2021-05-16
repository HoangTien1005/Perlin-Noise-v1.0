let WIDTH;
let HEIGHT;

var start = 0;
var yoff = 0;
var inc = 0.02;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  pixelDensity(1);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  WIDTH = windowWidth;
  HEIGHT = windowHeight;
  pixelDensity(1);
}

function draw() {
  loadPixels();
  for (var y = 0; y < HEIGHT; y++) {
    var xoff = 0;
    for (var x = 0; x < WIDTH; x++) {
      var index = (x + y * WIDTH) * 4;
      var rand = noise(xoff, yoff) * 255;
      pixels[index + 0] = rand;     //change this value to x, y or anything to get the different colors
      pixels[index + 1] = rand;     //change this value to x, y or anything to get the different colors
      pixels[index + 2] = rand;     //change this value to x, y or anything to get the different colors
      pixels[index + 3] = 255;      //change this value to x, y or anything to get the different colors

      xoff += inc;
    }
    yoff += inc;
  }
  updatePixels();
}

function mouseWheel() {
  if (event.deltaY > 0) inc += 0.01;
  else inc -= 0.01;
}
