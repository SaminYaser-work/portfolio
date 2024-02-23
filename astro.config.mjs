import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import react from '@astrojs/react'
import vercel from '@astrojs/vercel/serverless'

import metaTags from 'astro-meta-tags'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
    react(),
    metaTags(),
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons'],
    },
  },
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
})
