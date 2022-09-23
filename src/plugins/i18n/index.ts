import { createI18n } from "vue-i18n";

const modules = import.meta.glob("/**/*.locale.json");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const messages: any = {};

for (const path in modules) {
  const matched = path.match(/([A-Za-z0-9-_]+)\./gi);
  if (matched && matched.length > 1) {
    const locale = matched[1].replace(".", "");

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const module: any = await modules[path]();
    if (!messages?.[locale]) {
      messages[locale] = module.default;
    } else {
      messages[locale] = { ...messages[locale], ...module.default };
    }
  }
}

const i18n = createI18n({
  locale: localStorage.getItem("lang") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
