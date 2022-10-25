function handler(ev) {
  const e = ev; // Event holen
  const target = e.target; // Zielelement
  this.classList.toggle("selected"); // CSS-Klasse
  console.log(
    // Ausgabe geklicktes Element.
    `Geklickt auf Knoten mit ID "${target.id}"`
  );
  console.log(
    // Ausgabe aktuelles Element.
    `Event an Knoten mit ID "${this.id}"`
  );
  /* if (this.classList.contains("level2")) {
    //Sobald Level 2 erreicht ist wird das Event nicht weitergereicht
    e.stopPropagation();
  } */
}
function init() {
  const elements = document.querySelectorAll(
    // Alle Elemente ...
    ".level1, " + // ... der ersten, ...
      ".level2, " + // ... der zweiten ...
      ".level3" // ... und der dritten Ebene.
  );
  for (let i = 0; i < elements.length; i++) {
    // ... erhalten einen Listener für das click-Event.
    elements[i].addEventListener("click", handler);
  }
}
document.addEventListener("DOMContentLoaded", init);
