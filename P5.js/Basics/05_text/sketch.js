// Lektion 5: Text
// Text und Zahlen auf das Canvas schreiben.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);

  // textSize() legt die Schriftgroesse in Pixeln fest.
  // textAlign() bestimmt die Ausrichtung (CENTER = zentriert).
  fill(40);
  textSize(32);
  textAlign(CENTER);
  text('Hallo p5.js!', width / 2, 80);

  // Man kann auch Variablen oder Zahlen anzeigen.
  // frameCount zaehlt, wie viele Frames seit dem Start gezeichnet wurden.
  textSize(18);
  text('Frame: ' + frameCount, width / 2, 140);

  // Text laesst sich auch mit Emojis kombinieren.
  textSize(64);
  text('🎨', width / 2, 240);

  // Linksbuendiger Text (LEFT) an einer festen Position.
  textAlign(LEFT);
  textSize(16);
  fill(120);
  text('Die Maus ist bei x=' + mouseX + ', y=' + mouseY, 20, 320);
}
