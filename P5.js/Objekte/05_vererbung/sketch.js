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

class Farbkreis extends Kreis {
  constructor(x, y, radius, farbe, farbwechsel) {
    super(x, y, radius, farbe);
    this.farbwechsel = farbwechsel;
  }
  bewegen() {
    super.bewegen();
    // Farbe dynamisch ändern
    this.farbe[0] = (this.farbe[0] + this.farbwechsel) % 256;
  }
}

let fk;

function setup() {
  createCanvas(400, 400);
  fk = new Farbkreis(50, 200, 50, [255,0,0], 5);
}

function draw() {
  background(220);
  fk.bewegen();
  fk.anzeigen();
}
