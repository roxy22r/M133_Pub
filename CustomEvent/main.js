function init() {
  const element = document.getElementById("beispiel");
  const event = new CustomEvent("m133", {
    detail: {
      firstName: "Hans",
      lastName: "Muster",
      id: 2568,
    },
  });
  element.addEventListener(
    "m133",
    (event) => {
      console.log("Ereignis ausgelöst");
      console.log(event.type); // "m133"
      console.log(event.detail.firstName); // "Hans"
      console.log(event.detail.lastName); // "Muster"
      console.log(event.detail.id); // 2568
    },
    false
  );
  element.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", init);
