import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Factualizer",
  description: "Factualizer Docs",
  themeConfig: {

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Auth', link: '/auth' },
          { text: 'User', link: '/user' },
          { text: 'Stamp', link: '/stamp' },
          { text: 'Account', link: '/account' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/factual-consulting/api-reference' }
    ],

    // Traducción del texto "On this page"
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    },

    outline: {
      label: 'On this page'
    }
  },

  // Configuración de idioma para VitePress
  locales: {
    '/': {
      lang: 'es-ES',
      title: 'BitValencia',
      description: 'Documentación de BitValencia'
    }
  }
})
