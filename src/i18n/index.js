import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  legacy: false, // composition API
  globalInjection: true, // pour utiliser t() partout
  locale: "fr",
  fallbackLocale: "en",
  messages: {}, // on charge à la demande
});

export async function setLocaleAsync(locale) {
  // charge le JSON dynamiquement (assure-toi que les fichiers existent)
  const messages = await import(
    /* @vite-ignore */ `../locales/${locale}.json`
  ).then((m) => m.default || m);
  i18n.global.setLocaleMessage(locale, messages);
  i18n.global.locale.value = locale;
  document.querySelector("html")?.setAttribute("lang", locale);
}
