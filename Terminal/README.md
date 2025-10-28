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

## Kopieren, Verschieben
- **`cp [input] [output]`**  
  → Kopiert (**c**op**y**) eine Datei [input] nach [output].
  Beispiele:  
  - `cp datei1.txt datei2.txt` → Dupliziert datei1.txt nach datei2.txt
  - `cp datei1.txt ../anderes_verzeichnis/` → Dupliziert datei1.txt nach in das Verzeichnis ../anderes_verzeichnis unter Beibehaltung des Namens

- **`mv [input] [output]`**  
  → Verschiebt (**m**ov**e**) eine Datei [input] nach [output].
  Beispiele:  
  - `mv datei1.txt datei2.txt` → Verschiebt datei1.txt nach datei2.txt. Entspricht auch einem Umbenennen.
  - `mv datei1.txt ../anderes_verzeichnis/` → Verschiebt datei1.txt nach in das Verzeichnis ../anderes_verzeichnis unter Beibehaltung des Namens.

## Löschen
- **`rm [input]`**  
  → Löscht (**r**e**m**ove) eine Datei [input].
  Beispiele:  
  - `rm datei1.txt` → Löscht datei1.txt
  - `rm *.txt` → Löscht **alle** Dateien, die auf `.txt` enden. _Gefährlich :)_
  - `rm Verzeichnis/*.txt -r` → Löscht **alle** Dateien im Ordner Verzeichnis, die auf `.txt` enden und in dessen Unterordnern (`-r`). _Sehr Gefährlich :)_
  - `rm Verzeichnis -rf` → Löscht **alle** Dateien im Ordner Verzeichnis in dessen Unterordnern davon und danach die Unterordner und Verzeichnis selbst (`-rf`). _Sehr sehr Gefährlich :)_

## Ordner
- **`mkdir [input]`**  
  → Erstellt (**m**a**k**e **dir**ectory) ein Verzeichnis
  Beispiele:  
  - `mkdir Verzeichnis` → Erstellt das Directory "Verzeichnis"
  - `mkdir Test/Verzeichnis` → Erstellt das Directory "Verzeichnis" im Ordner "Test"
  - `mkdir Test/Test/Test/Verzeichnis -p` → Erstellt das Directory "Verzeichnis" und alle dazugehörigen Ordner falls nötig.

- **`rmdir [input]`**  
  → Löscht (**r**e**m**ove **dir**ectory) ein (leeres) Verzeichnis.
  Beispiele:  
  - `rmdir Verzeichnis` → Löscht das Directory "Verzeichnis". Funktioniert nur, wenn das Verzeichnis leer ist.
  - `rmdir Verzeichnis/*` → Löscht alle Directories unter "Verzeichnis", Verzeichnis selbst aber nicht. 

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
