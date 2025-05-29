"use strict";

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
