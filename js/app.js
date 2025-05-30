// js/app.js
import { modules, layout } from "./config.js";
import { labels, theme }   from "./vars.js";

const root = document.documentElement;
root.style.setProperty("--color-core-border",  theme.core);
root.style.setProperty("--color-addon-border", theme.addon);

document.title = labels.pageTitle;
document.querySelector("h1").textContent = labels.pageTitle;

const modalOverlay  = document.getElementById("modal-overlay");
const modalTitle    = document.getElementById("modal-title");
const providersGrid = document.getElementById("providers-grid");
const modalClose    = document.getElementById("modal-close");
let currentModule   = null;

// Find a module definition by its ID
function findModule(id) {
  return modules.find(m => m.id === id);
}

// Create a single module/card element
function createModuleCard(mod) {
  const card = document.createElement("div");
  card.className = "module-card";
  if (!mod.providers) {
    if (!mod.enabled) card.classList.add("disabled");
    card.addEventListener("click", () => {
      mod.enabled = !mod.enabled;
      card.classList.toggle("disabled");
    });
  } else {
    card.addEventListener("click", () => openModal(mod));
  }
  card.innerHTML = `
    <img src="${mod.icon}" alt="${mod.title}" />
    <h4>${mod.title}</h4>
  `;
  return card;
}

// Render all three areas: left, center panels, right
function renderLayout() {
  // Left sidebar
  const left = document.getElementById("sidebar-left");
  layout.left.forEach(id => left.appendChild(createModuleCard(findModule(id))));

  // Center category panels
  const container = document.getElementById("categories");
  layout.categories.forEach(cat => {
    const panel = document.createElement("div");
    panel.classList.add("category", cat.id, cat.theme);
    panel.innerHTML = `
      <header title="${labels.tooltips.info}">
        <h3>${labels.categories[cat.id]}</h3>
        <span class="info">i</span>
      </header>
    `;
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

// Open the provider-selection modal for a module
function openModal(mod) {
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

// Close modal on X or outside click
modalClose.addEventListener("click", () => modalOverlay.classList.remove("active"));
modalOverlay.addEventListener("click", e => {
  if (e.target === modalOverlay) {
    modalOverlay.classList.remove("active");
  }
});

renderLayout();
