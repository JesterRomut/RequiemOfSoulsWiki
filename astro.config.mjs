// @ts-nocheck
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: [
      {
        path: "cn", // no slashes included
        codes: ["zh-CN", "zh-TW"],
      },
      "en",
    ],
    defaultLocale: "cn",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  markdown: {
    syntaxHighlight: false,
  },

  integrations: [
    starlight({
      title: "魂之挽歌 Wiki",
      logo: {
        src: "./src/assets/icon.png",
      },
      customCss: ["./src/styles/main.css"],
      expressiveCode: false,
      favicon: "/favicon.ico",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],

  adapter: cloudflare({ imageService: "compile" }),
});
