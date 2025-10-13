// --- Картинки (языконезависимые)
const productImages = {
  wloss: "./assets/w-loss.png",
  keto: "./assets/keto.png",
  cannabis: "./assets/cannabis.png",
};

// --- Маппинг data-target -> префикс ключей в словаре (у тебя плоские ключи)
const keyPrefixMap = {
  wloss: "w-loss",
  keto: "keto",
  cannabis: "cannabis",
  oil: "cannabis", // на всякий случай, если вдруг остался старый data-target="oil"
};

// --- DOM (строго внутри .products)
const root = document.querySelector(".products");
const rail = root?.querySelector(".rail");
const items = root?.querySelectorAll(".rail__item") ?? [];
const card = root?.querySelector(".card");
const imgEl = card?.querySelector(".card__img");
const titleEl = card?.querySelector(".card__title");
const leadEl = card?.querySelector(".card__lead");
const listEl = card?.querySelector(".features");

// утилита: достать строку из плоского словаря
const t = (dict, k) => (typeof dict?.[k] === "string" ? dict[k] : "");

function renderProduct(targetKey, dict) {
  const prefix = keyPrefixMap[targetKey] || targetKey;

  const title = t(dict, `${prefix}-title`);
  const desc = t(dict, `${prefix}-desc`);
  const f1 = t(dict, `${prefix}-first`);
  const f2 = t(dict, `${prefix}-second`);
  const f3 = t(dict, `${prefix}-third`);

  // картинка
  if (imgEl) {
    const src = productImages[targetKey] || productImages[prefix] || imgEl.src;
    imgEl.src = src;
    imgEl.alt = targetKey;
  }

  // заголовок и лид
  if (titleEl) titleEl.innerHTML = title || "";
  if (leadEl) {
    // если есть названия в словаре rail, используем их, иначе только desc
    const railName = dict?.rail?.[targetKey] || dict?.rail?.[prefix] || "";

    leadEl.innerHTML = `${railName ? `<b>${railName}</b> ` : ""}${desc}`;
  }

  // список фич (3 пункта)
  if (listEl) {
    const feats = [f1, f2, f3].filter(Boolean);
    listEl.innerHTML = feats
      .map((txt) => {
        if (txt === f1) {
          return `<li class="features__item"> <img src="./assets/product-first-icon.svg" /> ${txt}</li>`;
        }
        if (txt === f2) {
          return `<li class="features__item"> <img src="./assets/product-second-icon.svg" /> ${txt}</li>`;
        }
        if (txt === f3) {
          return `<li class="features__item"> <img src="./assets/product-third-icon.svg" /> ${txt}</li>`;
        }
      })
      .join("");
  }
}

function setActive(btn) {
  items.forEach((i) => i.classList.remove("is-active"));
  btn.classList.add("is-active");
}

function init(dict) {
  if (!root) return console.warn("[products] .products not found");
  if (!rail) return console.warn("[products] .rail not found");
  if (!card) return console.warn("[products] .card not found");

  // стартовый рендер по активной кнопке
  const initialBtn = root.querySelector(".rail__item.is-active");
  const initialKey = initialBtn?.dataset.target;
  if (initialKey) renderProduct(initialKey, dict);
  else console.warn("[products] no initial .is-active item");

  // клики по rail
  rail.addEventListener("click", (e) => {
    const btn = e.target.closest(".rail__item");
    if (!btn || !rail.contains(btn)) return;
    const key = btn.dataset.target;
    if (!key) return;
    setActive(btn);
    renderProduct(key, dict);
  });
}

// --- ЖДЁМ СЛОВАРЬ ОТ i18n.js ---
if (window.I18N?.dict) {
  console.info("[products] I18N available immediately:", window.I18N.lang);
  init(window.I18N.dict);
} else {
  document.addEventListener("i18n:ready", (ev) => {
    console.info("[products] i18n:ready", ev.detail.lang);
    init(ev.detail.dict);
  });
}
