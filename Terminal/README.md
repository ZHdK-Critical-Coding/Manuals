# Terminal Basics – Cheatsheet

## Navigation
- **`pwd`**  
  → zeigt den aktuellen Pfad (working directory).  

- **`ls`**  
  → listet Dateien und Ordner im aktuellen Verzeichnis.  
  Optionen:  
  - `ls -l` → ausführliche Liste (Details, Rechte, Größe)  
  - `ls -a` → zeigt auch versteckte Dateien (beginnen mit `.`)  
  - `ls -lh` → menschenlesbare Größen (KB, MB)  

- **`cd`** *[Pfad]*  
  → wechselt in ein anderes Verzeichnis.  
  Beispiele:  
  - `cd /Users/deinname/Documents`  
  - `cd ..` → gehe ein Verzeichnis zurück  
  - `cd ~` → gehe ins Home-Verzeichnis  

## Bildschirm
- **`clear`**  
  → leert das Terminal-Fenster (Scrollback bleibt erhalten).  
  Tipp: `Cmd + K` auf macOS macht den Bildschirm komplett sauber.  

## Sonstiges Nützliches
- **`echo "Text"`**  
  → gibt Text im Terminal aus.  
- **`man [befehl]`**  
  → zeigt das Handbuch zum Befehl (z. B. `man ls`).  
- **`exit`**  
  → Terminal-Session beenden.  
- Auf MacOS lassen sich Folder oder Dateien in das Terminal bewegen. Nach dem Droppen wird der Pfad im Terminal hinzugefügt. Also: **`cd [Drop Finder Folder]`** wechselt in das Verzeichnis, welches in das Terminal gedroppt wird.