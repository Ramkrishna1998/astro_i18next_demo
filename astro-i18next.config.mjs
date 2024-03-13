/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "en",
  locales: ["en", "fr", "es"],
  routes: {
    fr: {
      about: "a-propos",
      "contact-us": "contactez-nous",
      products: {
        index: "produits",
        categories: "categories",
      },
    },
    es: {
      about: "a-proposito",
      "contact-us": "contactenos",
      products: {
        index: "productos",
        categories: "categorias",
      },
    },
  },
};
