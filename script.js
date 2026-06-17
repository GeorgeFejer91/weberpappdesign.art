const toggle = document.querySelector("[data-invert-toggle]");
const storageKey = "weberpappdesign:inverted";

function setInverted(isInverted) {
  document.documentElement.classList.toggle("is-inverted", isInverted);
  toggle.setAttribute("aria-pressed", String(isInverted));
  toggle.textContent = isInverted ? "Normal" : "Invertieren";

  try {
    localStorage.setItem(storageKey, isInverted ? "1" : "0");
  } catch (_) {}
}

setInverted(document.documentElement.classList.contains("is-inverted"));

toggle.addEventListener("click", () => {
  setInverted(!document.documentElement.classList.contains("is-inverted"));
});
