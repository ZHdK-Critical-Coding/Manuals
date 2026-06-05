class Kreis {
  constructor(x, y, radius, farbe) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.farbe = farbe;
  }

  anzeigen() {
    fill(this.farbe);
    circle(this.x, this.y, this.radius*2);
  }

  bewegen() {
    this.x += 2;
    if(this.x > width) this.x = 0;
  }
}

let kreis1;

function setup() {
  createCanvas(400, 400);
  kreis1 = new Kreis(100, 200, 50, [0, 150, 255]);
}

function draw() {
  background(220);
  kreis1.bewegen();
  kreis1.anzeigen();
}
