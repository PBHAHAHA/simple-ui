import { defineConfig } from 'vitepress'
import { sidebar } from './config/sidebar'

export default defineConfig({
  title: `Simple-UI`,
  description: 'Simple-UI',
  base: '/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.svg' }],
  ],

  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present The Muse Catcher',
    },

    nav: [
      { text: '组件', link: '/guide/features', activeMatch: '/guide/' },
      {
        text: '链接',
        items: [
          { text: 'Github', link: 'https://github.com/PBHAHAHA/Simple-UI' },
          {
            items: [
              {
                text: 'vue',
                link: 'https://cn.vuejs.org/',
              },
              {
                text: 'vitepress',
                link: 'https://vitepress.dev/',
              }
            ]
          }
        ]
      }
    ],
    sidebar,
  }
})
