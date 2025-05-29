"use strict";

const toggles = document.querySelectorAll('.js_toggle');

for (const toggle of toggles) {
  toggle.addEventListener("click", (ev) => {
    const content = toggle.nextElementSibling;
    content.classList.toggle('is-open');
  })
    
}