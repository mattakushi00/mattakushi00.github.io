// ====== настройки
const SUPPORTED = ["ru", "es", "de", "it"];
const DEFAULT_LANG = "ru";
const VERSION = "v1";

// страна -> язык (ISO 3166-1 alpha-2 -> ISO 639-1)
const countryToLang = {
  // RU-сегмент
  RU: "ru",
  BY: "ru",
  KZ: "ru",
  KG: "ru",
  TJ: "ru",
  UZ: "ru",

  // ES-сегмент (Испания + ЛатАм)
  ES: "es",
  AR: "es",
  BO: "es",
  CL: "es",
  CO: "es",
  CR: "es",
  CU: "es",
  DO: "es",
  EC: "es",
  SV: "es",
  GT: "es",
  HN: "es",
  MX: "es",
  NI: "es",
  PA: "es",
  PY: "es",
  PE: "es",
  PR: "es",
  UY: "es",
  VE: "es",

  // DE-сегмент (немецкий регион)
  DE: "de",
  AT: "de",
  CH: "de",
  LI: "de",
  LU: "de",

  // IT-сегмент
  IT: "it",
  SM: "it",
  VA: "it",
};

// ====== утилиты
function resolveLang() {
  // 1) ручной оверрайд ?lang=ru|es|de|it
  const qs = new URL(window.location.href).searchParams.get("lang");
  const forced = (qs || "").toLowerCase();
  if (SUPPORTED.includes(forced)) {
    console.info("[i18n] lang from ?lang=", forced);
    return forced;
  }

  // 2) по мета-стране (если проставляешь <meta name="x-geo-country" content="DE">)
  const meta = document.querySelector('meta[name="x-geo-country"]');
  const cc = meta?.getAttribute("content");
  if (cc) {
    const mapped = countryToLang[String(cc).toUpperCase()];
    if (SUPPORTED.includes(mapped)) {
      console.info("[i18n] lang from meta country:", mapped);
      return mapped;
    }
  }

  // 3) по браузеру (берём базу до дефиса: es-ES -> es)
  const nav =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    DEFAULT_LANG;
  const base = String(nav).split("-")[0].toLowerCase(); // es-419 -> es
  const final = SUPPORTED.includes(base) ? base : DEFAULT_LANG;
  console.info("[i18n] lang from navigator:", final);
  return final;
}

async function loadLocale(lang) {
  const chosen = SUPPORTED.includes(lang) ? lang : DEFAULT_LANG;
  const url = `./locales/${chosen}.json?${VERSION}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Locale load failed: ${url} (${res.status})`);
  return res.json();
}

function deepGet(obj, path) {
  return path.split(".").reduce((acc, k) => (acc == null ? acc : acc[k]), obj);
}

function applyI18n(dict) {
  const missing = [];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = deepGet(dict, key);
    if (typeof val !== "string") {
      missing.push(key);
      el.setAttribute("data-i18n-missing", key);
      return;
    }

    const tag = el.tagName;
    if (tag === "INPUT" || tag === "TEXTAREA") {
      if (key.endsWith(".placeholder")) el.setAttribute("placeholder", val);
      else el.value = val;
    } else if (tag === "META") {
      el.setAttribute("content", val);
    } else if (tag === "TITLE") {
      document.title = val;
    } else {
      el.textContent = val;
    }
  });
  if (missing.length) console.warn("[i18n] missing keys:", missing);
}

// ====== init
(async function initI18n() {
  try {
    const lang = resolveLang();
    document.documentElement.setAttribute("lang", lang);

    const dict = await loadLocale(lang);

    // <title data-i18n="..."> (если используешь)
    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const k = titleEl.getAttribute("data-i18n");
      const v = k ? deepGet(dict, k) : null;
      if (typeof v === "string") document.title = v;
    }

    applyI18n(dict);
    console.info("[i18n] applied");

    // даём доступ другим скриптам (ивент + глобал)
    window.I18N = { lang, dict };
    document.dispatchEvent(
      new CustomEvent("i18n:ready", { detail: { lang, dict } })
    );
  } catch (e) {
    console.error("[i18n] error:", e);
  } finally {
    document.documentElement.classList.remove("js-loading");
  }
})();
