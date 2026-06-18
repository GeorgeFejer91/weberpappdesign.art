const root = document.documentElement;
const themeSwitch = document.querySelector("[data-theme-switch]");
const imageZoom = document.querySelector("[data-image-zoom]");
const imageZoomImg = document.querySelector("[data-image-zoom-img]");
const themeKey = "weberpappdesign:theme";
let imageZoomTimer;
let imageZoomCloseTimer;

function rememberTheme(theme) {
  try {
    localStorage.setItem(themeKey, theme);
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

function setTheme(theme) {
  const isDark = theme === "dark";

  root.classList.toggle("is-dark", isDark);
  themeSwitch?.setAttribute("aria-checked", String(isDark));
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isDark ? "#050505" : "#ffffff");

  rememberTheme(isDark ? "dark" : "light");
}

function closeImageZoom() {
  if (!imageZoom || imageZoom.hidden) {
    return;
  }

  clearTimeout(imageZoomTimer);
  clearTimeout(imageZoomCloseTimer);
  imageZoom.classList.remove("is-open");
  imageZoom.setAttribute("aria-hidden", "true");

  imageZoomCloseTimer = setTimeout(() => {
    imageZoom.hidden = true;
    imageZoomImg.removeAttribute("src");
  }, 220);
}

function openImageZoom(tile) {
  const image = tile.querySelector("img");

  if (!imageZoom || !imageZoomImg || !image) {
    return;
  }

  clearTimeout(imageZoomTimer);
  clearTimeout(imageZoomCloseTimer);
  imageZoomImg.src = image.currentSrc || image.src;
  imageZoomImg.alt = image.alt;
  imageZoom.hidden = false;
  imageZoom.setAttribute("aria-hidden", "false");

  requestAnimationFrame(() => {
    imageZoom.classList.add("is-open");
  });

  imageZoomTimer = setTimeout(closeImageZoom, 10000);
}

initializeMediaFit();
setTheme(root.classList.contains("is-dark") ? "dark" : "light");

themeSwitch?.addEventListener("click", () => {
  setTheme(root.classList.contains("is-dark") ? "light" : "dark");
});

document.querySelectorAll("[data-email-link]").forEach((link) => {
  link.setAttribute("aria-label", "E-Mail an info@weberpappdesign.art schreiben");
});

document.querySelectorAll(".box-tile").forEach((tile) => {
  tile.addEventListener("click", () => openImageZoom(tile));
});

imageZoom?.addEventListener("click", closeImageZoom);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeImageZoom();
  }
});
