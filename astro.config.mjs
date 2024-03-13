/* import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

export default defineConfig({
  integrations: [astroI18next()],
});
 */
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

const redirectList = [
  {
    source: "/about/",
    destination: "/en/about/",
  },
];

const redirects = {};

redirectList.forEach(({ source, destination }) => {
  redirects[source] = destination;
});
console.log("redirects", redirects);
export default defineConfig({
  /*  experimental: {
    integrations: true,
  }, */
  integrations: [
    astroI18next({
      baseLanguage: "en",
      i18next: {
        debug: true, // convenient during development to check for missing keys
        supportedLngs: ["en", "fr"],
      },
    }),
  ],
  redirects: redirects,
});
