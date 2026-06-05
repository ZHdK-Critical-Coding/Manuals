let auto = { x: 50, y: 200, breite: 100, hoehe: 50, farbe: 'red' };

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(auto.farbe);
  rect(auto.x, auto.y, auto.breite, auto.hoehe);

  // Auto bewegen
  auto.x += 2;
  if(auto.x > width) auto.x = -auto.breite;
}
