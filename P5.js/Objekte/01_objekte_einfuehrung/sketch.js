// Einfaches Objekt
let kreis = { x: 200, y: 200, radius: 50 };

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220);
  fill(100, 150, 255);
  circle(kreis.x, kreis.y, kreis.radius * 2);
}
