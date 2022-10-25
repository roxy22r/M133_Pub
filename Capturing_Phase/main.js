function handler(ev) {
  const e = ev;
  const target = e.target;
  this.classList.toggle("selected");
  console.log('Geklickt auf Knoten mit ID "' + target.id + '"'); // target.nodeName
  console.log('Event an Knoten mit ID "' + this.id + '"');
  /* if (this.classList.contains("level2")) {
    e.stopPropagation();
  } */
}
function init() {
  const elements = document.querySelectorAll(".level1, .level2, .level3");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", handler, true);
  }
}
document.addEventListener("DOMContentLoaded", init);
