// Lektion 4: Interaktion
// Auf Maus und Tastatur reagieren.

let hintergrund = 220; // aktuelle Hintergrundfarbe (Grauwert)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(hintergrund);

  // mouseX / mouseY: aktuelle Mausposition
  // mouseIsPressed: true, solange eine Maustaste gedrueckt ist
  if (mouseIsPressed) {
    fill(255, 0, 0); // gedrueckt -> rot
  } else {
    fill(100, 150, 255); // nicht gedrueckt -> blau
  }

  circle(mouseX, mouseY, 60); // Kreis folgt der Maus
}

// mousePressed() wird einmal aufgerufen, wenn man klickt.
function mousePressed() {
  // Hintergrund bei jedem Klick zufaellig aendern.
  hintergrund = random(255);
}

// keyPressed() wird einmal aufgerufen, wenn man eine Taste drueckt.
function keyPressed() {
  // Leertaste setzt den Hintergrund wieder zurueck.
  if (key === ' ') {
    hintergrund = 220;
  }
}
