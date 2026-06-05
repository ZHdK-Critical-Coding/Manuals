// Lektion 4: Elemente hinzufuegen und entfernen
// Arrays koennen zur Laufzeit wachsen und schrumpfen.

let punkte = []; // Array fuer die angeklickten Punkte

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(245);

  // Alle gespeicherten Punkte zeichnen.
  for (let i = 0; i < punkte.length; i++) {
    fill(100, 150, 255);
    noStroke();
    circle(punkte[i].x, punkte[i].y, 30);
  }

  // Kurze Anleitung anzeigen.
  fill(80);
  textSize(14);
  text('Klicken: Punkt hinzufuegen | Taste: aeltesten entfernen', 12, 380);
  text('Anzahl: ' + punkte.length, 12, 24);
}

// Bei jedem Klick einen neuen Punkt ans Array anhaengen.
function mousePressed() {
  punkte.push({ x: mouseX, y: mouseY });
}

// Bei jedem Tastendruck den ersten (aeltesten) Punkt entfernen.
function keyPressed() {
  // shift() entfernt das erste Element des Arrays.
  // (pop() wuerde stattdessen das letzte Element entfernen.)
  punkte.shift();
}
