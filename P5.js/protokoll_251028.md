Die Quellen beschreiben detailliert die Verwendung verschiedener p5.js-Funktionen und Systemvariablen zur Erstellung einer interaktiven Landschaft.

Hier ist eine Liste aller p5.js-Befehle, Funktionen und Systemvariablen, die im Tutorial verwendet oder explizit erwähnt werden:

### I. Struktur und Basis-Setup (Functions)

*   **`function setup()`:** Wird einmal aufgerufen und ausgeführt, wenn das Programm startet. Es wird verwendet, um Standardwerte festzulegen.
*   **`function draw()`:** Wird direkt nach `setup()` aufgerufen und führt den Code in seinen geschweiften Klammern 60 Mal pro Sekunde aus.
*   **`createCanvas()`:** Erstellt eine HTML-Leinwand. Die Argumente legen die Breite und Höhe in Pixeln fest (z. B. `createCanvas(400, 400)` oder `createCanvas(600, 400)` oder `createCanvas(windowWidth, windowHeight)`).
*   **`noLoop()`:** Eine Funktion, die aufgerufen werden kann, um zu verhindern, dass die `draw()`-Funktion kontinuierlich ausgeführt wird.
*   **`fullscreen(true)`:** Fullscreen ein oder ausschalten
*   **`windowResized()`:** wird ausgeführt wenn das Fenster verändert wird.
*   **`resizeCanvas(breite, höhe)`:** Verändert dynamisch die Grösse des Canvas

### II. Hintergrund und Farbeinstellungen (Color)

*   **`background()`:** Legt die Farbe fest, die für den Hintergrund der Leinwand verwendet wird. Kann mit einem Graustufenwert (z. B. `background(220)`), mit drei Zahlen für RGB-Werte (z. B. `background(135, 206, 235)`), mit einem String für HTML-Farbnamen oder mit HEX-Farbwerten verwendet werden.
*   **`fill()`:** Legt die Füllfarbe für Formen fest.
    *   Muss *vor* der Zeichnungsfunktion der Form aufgerufen werden.
*   **`stroke()`:** Legt die Farbe für Linien und Umrisse fest.
*   **`strokeWeight()`:** Legt die Dicke von Linien, Umrissen und Punkten fest. Der Wert wird in Pixeln angegeben (z. B. `strokeWeight(20)`).
*   **`color(r, g, b, a);`:** Gibt ein Farbobjekt zurück: https://p5js.org/reference/p5/color/ 

### III. Formen zeichnen (Shapes)

Die folgenden Funktionen werden verwendet, um Formen auf die Leinwand zu zeichnen:

*   **`circle()`:** Zeichnet einen Kreis unter Verwendung der x-Koordinate, der y-Koordinate (Mittelpunkt) und der Größe (Breite und Höhe).
*   **`rect()`:** Zeichnet ein Rechteck unter Verwendung der x-Koordinate, der y-Koordinate (obere linke Ecke), der Breite und der Höhe (z. B. `rect(0, 200, 600, 200)`).

**Optionale/Erwähnte Formen:**

Das Tutorial erwähnt auch die folgenden Formen, die optional zur Landschaft hinzugefügt werden können:

*   `ellipse()`
*   `square()`
*   `quad()`
*   `triangle()`
*   `line()`
*   `point()`
*   `arc()`

### IV. Text und Schriftgröße

*   **`text()`:** Zeichnet Text (oder Emojis als String) auf die Leinwand. Die Argumente sind ein String, eine x-Koordinate und eine y-Koordinate (untere linke Ecke des Textfeldes).
*   **`textSize()`:** Legt die Größe des Textes in Pixeln fest (z. B. `textSize(75)`). Muss vor der `text()`-Funktion aufgerufen werden.

### V. Interaktivität und Systemvariablen

Dies sind integrierte Variablen, die Werte speichern und zur Erzeugung von Interaktivität genutzt werden können:

*   **`mouseX`:** Speichert die aktuelle x-Koordinate des Mauszeigers auf der Leinwand.
*   **`mouseY`:** Speichert die aktuelle y-Koordinate des Mauszeigers auf der Leinwand.
*   **`width`:** Speichert die Breite der Leinwand.
*   **`height`:** Speichert die Höhe der Leinwand.
*   **`pmouseX`:** Speichert die vorherige x-Koordinate der Maus.
*   **`pmouseY`:** Speichert die vorherige y-Koordinate der Maus.