import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "fr",
  fallbackLocale: "en",
  messages: {}, // on chargera depuis /public/locales
});

/**
 * Charge /public/locales/<locale>.json et applique la langue.
 * Exemple: setLocaleAsync('fr'), setLocaleAsync('en'), setLocaleAsync('ru')
 */
export async function setLocaleAsync(locale) {
  const base = import.meta.env.BASE_URL || "/"; // gère un sous-dossier éventuel
  const url = `${base}locales/${locale}.json`;

  let messages;
  try {
    const res = await fetch(url, { cache: "no-cache" });
    if (!res.ok) throw new Error();
    messages = await res.json();
  } catch {
    // fallback simple sur 'en'
    const res = await fetch(`${base}locales/en.json`, { cache: "no-cache" });
    messages = await res.json();
    locale = "en";
  }

  i18n.global.setLocaleMessage(locale, messages);
  i18n.global.locale.value = locale;
  document.documentElement.setAttribute("lang", locale);
}
