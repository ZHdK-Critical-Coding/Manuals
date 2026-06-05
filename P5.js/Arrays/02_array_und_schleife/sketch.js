// Lektion 2: Array und Schleife
// Mit einer for-Schleife durchlaeuft man alle Elemente eines Arrays.

let xPositionen = []; // leeres Array

function setup() {
  createCanvas(400, 400);

  // Array in setup() mit Werten fuellen.
  // push() haengt einen neuen Wert hinten an das Array an.
  for (let x = 40; x < width; x += 60) {
    xPositionen.push(x);
  }
}

function draw() {
  background(220);

  // Mit einer Schleife alle Elemente durchlaufen.
  // i laeuft von 0 bis kurz vor xPositionen.length.
  for (let i = 0; i < xPositionen.length; i++) {
    let x = xPositionen[i];

    // Die Hoehe haengt vom Index ab -> die Kreise "wandern" nach unten.
    let y = 60 + i * 40;

    fill(100, 150, 255);
    circle(x, y, 40);
  }
}
