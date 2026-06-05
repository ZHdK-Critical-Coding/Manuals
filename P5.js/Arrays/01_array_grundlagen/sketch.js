// Lektion 1: Array-Grundlagen
// Ein Array ist eine Liste von Werten.

// Array mit fuenf x-Positionen.
let positionen = [50, 130, 200, 280, 360];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Auf einzelne Elemente greift man ueber den Index zu.
  // Achtung: Der erste Index ist 0, nicht 1!
  fill(255, 0, 0);
  circle(positionen[0], 100, 40); // erstes Element

  fill(0, 0, 255);
  circle(positionen[4], 100, 40); // fuenftes (= letztes) Element

  // positionen.length gibt die Anzahl der Elemente zurueck.
  fill(40);
  textSize(16);
  text('Anzahl Elemente: ' + positionen.length, 20, 300);
}
