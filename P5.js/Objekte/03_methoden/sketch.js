let kreis = {
  x: 200,
  y: 200,
  radius: 50,
  farbe: [255, 0, 0],
  bewegen: function() {
    this.x += 2;
    if(this.x > width) this.x = 0;
  },
  anzeigen: function() {
    fill(this.farbe);
    circle(this.x, this.y, this.radius*2);
  }
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  kreis.bewegen();
  kreis.anzeigen();
}
