var kreisX = 0;
var kreisY = 0;
var geschwindigkeitX = 1;
var geschwindigkeitY = 1;
var zeichen = 'TEST';
var istVollbild = true;

function hallo(durchmesser) {
  // Füllfarbe wählen
  fill(0,255,0);
  noStroke();
  circle(kreisX, kreisY, durchmesser);
  kreisX = kreisX + geschwindigkeitX;
  kreisY = kreisY + geschwindigkeitY;

  if ((kreisX > width) || (kreisX < 0)) {
    geschwindigkeitX = geschwindigkeitX * -1;
  }

  if ((kreisY > height) || (kreisY < 0)) {
    geschwindigkeitY = geschwindigkeitY * -1;
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255,0,0);
  hallo(100);
  hallo(100);
  hallo(100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  istVollbild = !istVollbild
  fullscreen(istVollbild);
  kreisX = width / 2;
  kreisY = height / 2;
}