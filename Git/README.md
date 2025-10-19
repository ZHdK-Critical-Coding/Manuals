# 📝 Git Basics – Cheatsheet

## ⚙️ Einrichtung
- **`git config --global user.name "Dein Name"`**  
  → Benutzername setzen  

- **`git config --global user.email "deine@email.com"`**  
  → E-Mail setzen  

- **`git config --list`**  
  → aktuelle Konfiguration anzeigen  

---

## 📥 Repository klonen
- **`git clone URL`**  
  → ein Remote-Repository lokal kopieren  
  Beispiel:  
  - SSH: `git clone git@github.com:USER/REPO.git`  
  - HTTPS: `git clone https://github.com/USER/REPO.git`  

---

## 📂 Status & Infos
- **`git status`**  
  → zeigt den aktuellen Status (geänderte Dateien, Branch etc.)  

- **`git log`**  
  → Commit-Historie ansehen  
  - `git log --oneline` → kompakte Ansicht  

---

## ✏️ Änderungen
- **`git add DATEI`**  
  → Datei zum Staging-Bereich hinzufügen  
  - `git add .` → alle Änderungen hinzufügen  

- **`git commit -m "Nachricht"`**  
  → Änderungen ins lokale Repo übernehmen  

- **`git diff`**  
  → zeigt Änderungen im Vergleich zum letzten Commit  

---

## ⬆️ Arbeiten mit Remote
- **`git push origin BRANCH`**  
  → lokalen Branch ins Remote-Repo hochladen  

- **`git pull`**  
  → neueste Änderungen vom Remote holen und mergen  

---

## 🌿 Branches
- **`git branch`**  
  → zeigt alle lokalen Branches  

- **`git branch NAME`**  
  → neuen Branch erstellen  

- **`git checkout NAME`**  
  → zu einem anderen Branch wechseln  

- **`git checkout -b NAME`**  
  → neuen Branch erstellen **und** direkt wechseln  

- **`git merge NAME`**  
  → Änderungen aus Branch *NAME* in den aktuellen Branch einfügen  

---

## 🧹 Sonstiges
- **`git remote -v`**  
  → zeigt die Remote-URLs  

- **`git reset --hard COMMIT-ID`**  
  → springt zu einem älteren Commit (⚠️ Vorsicht: Änderungen gehen verloren)  

- **`git stash`**  
  → aktuelle Änderungen zwischenspeichern  

- **`git stash pop`**  
  → zwischengespeicherte Änderungen wiederherstellen  