const root = document.documentElement;
const themeSwitch = document.querySelector("[data-theme-switch]");
const languageSwitch = document.querySelector("[data-language-switch]");
const themeKey = "weberpappdesign:theme";
const languageKey = "weberpappdesign:language";

const copy = {
  de: {
    description: "WEBER PAPPDESIGN: handgefertigte Wellpappeboxen zur Aufbewahrung und Praesentation gerahmter Bilder.",
    email: "E-Mail an info@weberpappdesign.art schreiben",
    languageSwitch: "Switch to English",
    site: "WEBER PAPPDESIGN",
    themeSwitch: "Farbmodus wechseln"
  },
  en: {
    description: "WEBER PAPPDESIGN: handmade corrugated cardboard boxes for storing and presenting framed pictures.",
    email: "Write an email to info@weberpappdesign.art",
    languageSwitch: "Zur deutschen Version wechseln",
    site: "WEBER PAPPDESIGN",
    themeSwitch: "Change color mode"
  }
};

function remember(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {}
}

function applyMediaFit(media) {
  const width = media.videoWidth || media.naturalWidth || Number(media.getAttribute("width"));
  const height = media.videoHeight || media.naturalHeight || Number(media.getAttribute("height"));

  if (!width || !height) {
    return;
  }

  const ratio = `${width} / ${height}`;
  const block = media.closest(".media-block");

  if (block) {
    block.style.setProperty("--media-native-width", `${width}px`);
    block.style.setProperty("--media-aspect", ratio);
  }

  media.style.aspectRatio = ratio;
}

function initializeMediaFit() {
  document.querySelectorAll("[data-fit-media]").forEach((media) => {
    applyMediaFit(media);

    if (media.tagName === "IMG" && !media.complete) {
      media.addEventListener("load", () => applyMediaFit(media), { once: true });
    }

    if (media.tagName === "VIDEO" && media.readyState < 1) {
      media.addEventListener("loadedmetadata", () => applyMediaFit(media), { once: true });
    }
  });
}

function currentLanguage() {
  return root.lang === "en" ? "en" : "de";
}

function setTheme(theme) {
  const isDark = theme === "dark";

  root.classList.toggle("is-dark", isDark);
  themeSwitch.setAttribute("aria-checked", String(isDark));
  themeSwitch.setAttribute("aria-label", copy[currentLanguage()].themeSwitch);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#050505" : "#ffffff");

  remember(themeKey, isDark ? "dark" : "light");
}

function setLanguage(language) {
  const nextLanguage = language === "en" ? "en" : "de";
  const strings = copy[nextLanguage];

  root.lang = nextLanguage;
  languageSwitch.dataset.lang = nextLanguage;
  languageSwitch.setAttribute("aria-label", strings.languageSwitch);
  themeSwitch.setAttribute("aria-label", strings.themeSwitch);
  document.querySelector("main")?.setAttribute("aria-label", strings.site);
  document.querySelector('meta[name="description"]')?.setAttribute("content", strings.description);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", strings.description);

  document.querySelectorAll("[data-alt-de]").forEach((image) => {
    image.alt = image.dataset[`alt${nextLanguage[0].toUpperCase()}${nextLanguage.slice(1)}`];
  });

  document.querySelectorAll("[data-label-de]").forEach((media) => {
    media.setAttribute("aria-label", media.dataset[`label${nextLanguage[0].toUpperCase()}${nextLanguage.slice(1)}`]);
  });

  document.querySelectorAll("[data-email-link]").forEach((link) => {
    link.setAttribute("aria-label", strings.email);
  });

  remember(languageKey, nextLanguage);
}

initializeMediaFit();
setTheme(root.classList.contains("is-dark") ? "dark" : "light");
setLanguage(currentLanguage());

themeSwitch.addEventListener("click", () => {
  setTheme(root.classList.contains("is-dark") ? "light" : "dark");
});

languageSwitch.addEventListener("click", () => {
  setLanguage(currentLanguage() === "de" ? "en" : "de");
});
