(function () {
  const SUPPORTED = ["ru", "es", "de", "it"];
  const DEFAULT_LANG = "ru";
  const countryToLang = {
    RU: "ru",
    BY: "ru",
    KZ: "ru",
    KG: "ru",
    TJ: "ru",
    UZ: "ru",
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
    DE: "de",
    AT: "de",
    CH: "de",
    LI: "de",
    LU: "de",
    IT: "it",
    SM: "it",
    VA: "it",
  };

  function resolveLang() {
    const qs = new URLSearchParams(window.location.search).get("lang");
    if (SUPPORTED.includes(qs)) return qs;

    const nav =
      (navigator.languages && navigator.languages[0]) || navigator.language;
    const base = nav.split("-")[0].toLowerCase();
    return SUPPORTED.includes(base) ? base : DEFAULT_LANG;
  }

  const lang = resolveLang();
  const folderMap = {
    ru: "1_ru_ivery_thanksBlue_lend",
    es: "1_es_ivery_thanksBlue_lend",
    de: "1_de_ivery_thanksBlue_lend",
    it: "1_it_ivery_thanksBlue_lend",
  };

  const folder = folderMap[lang] || folderMap[DEFAULT_LANG];

  // ищем все кнопки "Получить консультацию"
  document
    .querySelectorAll('#get-consultation-btn, [data-action="consultation"]')
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = `./${folder}/index.html`;
      });
    });
})();
