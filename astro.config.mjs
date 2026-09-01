// @ts-nocheck
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: false,
  },

  integrations: [
    starlight({
      title: {
        en: "Requiem of Souls",
        "zh-CN": "魂之挽歌",
      },
      logo: {
        src: "./src/assets/icon.png",
      },
      locales: {
        // English docs in `src/content/docs/en/`
        en: {
          label: "English",
        },
        // Simplified Chinese docs in `src/content/docs/zh-cn/`
        cn: {
          label: "中文",
          lang: "zh-CN",
        },
      },
      defaultLocale: "cn",
      customCss: ["./src/styles/main.css"],
      expressiveCode: false,
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/WarmurCle/RequiemOfSouls",
        },
      ],
      sidebar: [
        {
          label: "指南",
          translations: {
            en: "Guides",
          },
          items: [{ autogenerate: { directory: "guides" } }],
        },
        {
          label: "模组物品",
          translations: {
            en: "Mod Items",
          },
          items: [{ autogenerate: { directory: "items" } }],
        },
        {
          label: "杂项",
          translations: {
            en: "Misc",
          },
          items: [{ autogenerate: { directory: "misc" } }],
        },
      ],
    }),
  ],

  adapter: cloudflare({ imageService: "compile" }),
});
