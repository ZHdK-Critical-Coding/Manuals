// Lektion 1: Setup und Draw
// Die beiden wichtigsten Funktionen in p5.js.

// setup() wird genau EINMAL beim Start ausgefuehrt.
// Hier richtet man das Canvas ein.
function setup() {
  createCanvas(400, 400); // Canvas mit Breite 400 und Hoehe 400 erstellen
}

// draw() wird danach ununterbrochen wiederholt (ca. 60 Mal pro Sekunde).
// Hier passiert die eigentliche Zeichnung und Animation.
function draw() {
  background(220); // Hintergrund bei jedem Frame neu fuellen (Grauwert 220)

  // Ein Kreis, der der Maus folgt.
  // mouseX und mouseY enthalten die aktuelle Mausposition.
  fill(100, 150, 255); // Fuellfarbe (Rot, Gruen, Blau)
  circle(mouseX, mouseY, 50); // Kreis an der Mausposition, Durchmesser 50
}
