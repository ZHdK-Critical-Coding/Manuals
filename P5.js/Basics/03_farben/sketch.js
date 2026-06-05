// Lektion 3: Farben
// Fuellfarbe, Umrandung und Liniendicke.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30); // dunkler Hintergrund

  // fill() legt die Fuellfarbe fest.
  // Ein Wert  = Graustufe (0 = schwarz, 255 = weiss)
  fill(255);
  circle(80, 100, 80);

  // Drei Werte = Rot, Gruen, Blau (jeweils 0-255)
  fill(255, 0, 0);
  circle(200, 100, 80);

  // Vier Werte = RGB + Transparenz (Alpha, 0 = unsichtbar, 255 = deckend)
  fill(0, 150, 255, 120);
  circle(280, 100, 80);

  // stroke() legt die Umrandungsfarbe fest,
  // strokeWeight() die Dicke der Umrandung.
  stroke(255, 200, 0);
  strokeWeight(8);
  fill(80);
  rect(120, 220, 160, 100);

  // noFill() / noStroke() schalten Fuellung bzw. Umrandung aus.
  noFill();
  stroke(255);
  strokeWeight(2);
  circle(200, 270, 140);
}
