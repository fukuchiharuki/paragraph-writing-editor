// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/paragraph-writing-editor/',
    head: {
      title: 'Paragraph Writing Editor | A tool for improving your writing.',
      meta: [
        { name: 'description', content: 'A tool for improving your writing.' },
        { name: 'keywords', content: 'paragraph writing,editor,polishing,tool,パラグラフライティング,エディタ,推敲,ツール' }
      ],
      link: [
        { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/paragraph-writing-editor/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/balloon-css/balloon.min.css' }
      ],
      script: [
        { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-HW3SJX60GZ' },
        { innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-HW3SJX60GZ');` }
      ]
    }
  }
})
