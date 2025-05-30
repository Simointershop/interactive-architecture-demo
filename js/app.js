// js/app.js
import { modules, layout } from "./config.js";
import { labels, theme }   from "./vars.js";
import { info }            from "./info.js";

const root = document.documentElement;
root.style.setProperty("--color-border-core",  theme.core);
root.style.setProperty("--color-border-addon", theme.addon);

document.title = labels.pageTitle;
document.querySelector("h1").textContent = labels.pageTitle;

const modalOverlay      = document.getElementById("modal-overlay");
const modalTitle        = document.getElementById("modal-title");
const providersGrid     = document.getElementById("providers-grid");
const modalClose        = document.getElementById("modal-close");

const infoOverlay       = document.getElementById("info-overlay");
const infoModalTitle    = document.getElementById("info-modal-title");
const infoModalContent  = document.getElementById("info-modal-content");
const infoModalClose    = document.getElementById("info-modal-close");

let currentModule = null;

function findModule(id) {
  return modules.find(m => m.id === id);
}

function createModuleCard(mod) {
  const card = document.createElement("div");
  card.className = "module-card";
  if (mod.providers) {
    card.addEventListener("click", () => openProvidersModal(mod));
  } else {
    if (!mod.enabled) card.classList.add("disabled");
    card.addEventListener("click", () => {
      mod.enabled = !mod.enabled;
      card.classList.toggle("disabled");
    });
  }
  card.innerHTML = `<img src="${mod.icon}" alt="${mod.title}" /><h4>${mod.title}</h4>`;
  return card;
}

function renderLayout() {
  // Left sidebar
  const left = document.getElementById("sidebar-left");
  layout.left.forEach(id => left.appendChild(createModuleCard(findModule(id))));

  // Center panels
  const container = document.getElementById("categories");
  layout.categories.forEach(cat => {
    const panel = document.createElement("div");
    panel.classList.add("category", cat.id, cat.theme);
    panel.innerHTML = `
      <header title="${labels.tooltips.info}">
        <h3>${labels.categories[cat.id]}</h3>
        <span class="info">ℹ️</span>
      </header>
    `;

    // Info‐icon click
    panel.querySelector(".info").addEventListener("click", () => {
      const catInfo = info[cat.id];
      infoModalTitle.textContent = catInfo.title;
      infoModalContent.innerHTML = "";
      catInfo.modules.forEach(m => {
        const md = document.createElement("div");
        md.innerHTML = `<h4>${m.title}</h4><p>${m.body}</p>`;
        infoModalContent.appendChild(md);
      });
      infoOverlay.classList.add("active");
    });

    const grid = document.createElement("div");
    grid.className = "modules-grid";
    cat.modules.forEach(id => grid.appendChild(createModuleCard(findModule(id))));
    panel.appendChild(grid);
    container.appendChild(panel);
  });

  // Right sidebar
  const right = document.getElementById("sidebar-right");
  layout.right.forEach(id => right.appendChild(createModuleCard(findModule(id))));
}

function openProvidersModal(mod) {
  currentModule = mod;
  modalTitle.textContent = mod.title;
  providersGrid.innerHTML = "";
  mod.providers.forEach(p => {
    const item = document.createElement("div");
    item.className = "provider-item" + (p.selected ? " selected" : "");
    item.innerHTML = `<img src="${p.logo}" alt="${p.id}" />`;
    item.addEventListener("click", () => {
      p.selected = !p.selected;
      item.classList.toggle("selected");
    });
    providersGrid.appendChild(item);
  });
  modalOverlay.classList.add("active");
}

// Close handlers
modalClose.addEventListener("click", () => modalOverlay.classList.remove("active"));
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("active");
});
infoModalClose.addEventListener("click", () => infoOverlay.classList.remove("active"));
infoOverlay.addEventListener("click", e => {
  if (e.target === infoOverlay) infoOverlay.classList.remove("active");
});

renderLayout();
