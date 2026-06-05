// Lektion 2: Formen zeichnen
// Ein Ueberblick ueber die wichtigsten Zeichen-Funktionen.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);

  // circle(x, y, durchmesser) -- x und y sind der Mittelpunkt
  fill(255, 100, 100);
  circle(80, 80, 80);

  // rect(x, y, breite, hoehe) -- x und y sind die obere linke Ecke
  fill(100, 200, 100);
  rect(160, 40, 100, 80);

  // ellipse(x, y, breite, hoehe) -- Kreis mit unterschiedlicher Breite/Hoehe
  fill(100, 150, 255);
  ellipse(320, 80, 100, 60);

  // triangle(x1, y1, x2, y2, x3, y3) -- drei Eckpunkte
  fill(255, 200, 0);
  triangle(60, 280, 120, 180, 180, 280);

  // line(x1, y1, x2, y2) -- Linie zwischen zwei Punkten
  stroke(0);          // Linienfarbe schwarz
  strokeWeight(4);    // Liniendicke 4 Pixel
  line(220, 180, 360, 280);

  // square(x, y, groesse) -- Quadrat
  noStroke();         // keine Umrandung
  fill(180, 100, 220);
  square(220, 300, 60);
}
