/** @format */

import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";
import icon from "astro-icon";
import metaTags from "astro-meta-tags";
import { defineConfig } from "astro/config";

export default defineConfig({
    compressHTML: true,
    integrations: [
        mdx(),
        compress(),
        react(),
        metaTags(),
        icon({
            include: {
                ic: ["*"],
                "fa-solid": ["user-graduate"],
                teenyicons: ["school-solid"],
                ep: ["school"],
            },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ["react-icons"],
        },
    },
    output: "server",
    adapter: vercel({
        imageService: true,
    }),
});
