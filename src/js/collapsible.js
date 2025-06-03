/* console.log("Funcion de colapsable")

const toggles = document.querySelectorAll(".js_toggle");

for (const toggle of toggles) {
  toggle.addEventListener("click", (ev) => {
    const content = toggle.nextElementSibling;
    content.classList.toggle("is-open");

    if (content.classList.contains("is-open")) {
      toggle.textContent = toggle.textContent.replace("⬇️", "⬆️");
    } else {
      toggle.textContent = toggle.textContent.replace("⬆️", "⬇️");
    }
  });
}
 */

const toggles = document.querySelectorAll(".js_toggle");

for (const toggle of toggles) {
  toggle.addEventListener("click", (ev) => {
    const content = toggle.nextElementSibling;
    const isOpen = content.classList.contains("is-open");

    for (const otherToggle of toggles) {
      const otherContent = otherToggle.nextElementSibling;
      otherContent.classList.remove("is-open");
      const h2 = otherToggle.querySelector(".form__section-title");
      if (h2) {
        h2.textContent = h2.textContent.replace("⬆️", "⬇️");
      }
    }

    if (!isOpen) {
      content.classList.add("is-open");
      const h2 = toggle.querySelector(".form__section-title");
      if (h2) {
        h2.textContent = h2.textContent.replace("⬇️", "⬆️");
      }
    }
  });
}


   