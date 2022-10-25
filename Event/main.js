function init() {
  const element = document.getElementById("example");
  const event = new Event(
    "m133", // Typ des Events
    {
      bubbles: true, // Bubbling erlauben
      cancelable: false, // Standardaktionen können nicht verhindert werden.
    }
  );

  element.addEventListener(
    "m133", // Typ des Events
    (event) => {
      console.log("Ereignis ausgelöst");
      console.log(event.type); // "m133"
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", init);
