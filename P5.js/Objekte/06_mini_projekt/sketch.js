class Auto {
  constructor(x, y, breite, hoehe, farbe) {
    this.x = x;
    this.y = y;
    this.breite = breite;
    this.hoehe = hoehe;
    this.farbe = farbe;
    this.speed = random(1,5);
  }

  anzeigen() {
    fill(this.farbe);
    rect(this.x, this.y, this.breite, this.hoehe);
  }

  bewegen() {
    this.x += this.speed;
    if(this.x > width) this.x = -this.breite;
  }
}

let autos = [];

function setup() {
  createCanvas(600, 400);
  for(let i=0;i<5;i++){
    autos.push(new Auto(random(width), random(height), 80, 40, [random(255), random(255), random(255)]));
  }
}

function draw() {
  background(220);
  for(let auto of autos){
    auto.bewegen();
    auto.anzeigen();
  }
}
