// Lektion 3: Array mit Objekten
// Ein Array kann nicht nur Zahlen, sondern auch ganze Objekte enthalten.

let baelle = []; // Array fuer die Ball-Objekte

function setup() {
  createCanvas(400, 400);

  // 10 Baelle mit zufaelligen Eigenschaften erzeugen.
  for (let i = 0; i < 10; i++) {
    // Jedes Element ist ein Objekt mit Position, Geschwindigkeit und Farbe.
    let ball = {
      x: random(width),
      y: random(height),
      dx: random(-3, 3),   // Geschwindigkeit in x-Richtung
      dy: random(-3, 3),   // Geschwindigkeit in y-Richtung
      farbe: [random(255), random(255), random(255)]
    };
    baelle.push(ball);
  }
}

function draw() {
  background(30);

  // "for ... of" durchlaeuft jedes Objekt im Array.
  for (let ball of baelle) {
    // Position aktualisieren.
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Am Rand abprallen: Geschwindigkeit umkehren.
    if (ball.x < 0 || ball.x > width) ball.dx *= -1;
    if (ball.y < 0 || ball.y > height) ball.dy *= -1;

    // Ball zeichnen.
    fill(ball.farbe);
    noStroke();
    circle(ball.x, ball.y, 30);
  }
}
