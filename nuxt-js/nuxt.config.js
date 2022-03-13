export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-js',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // default css: tailwind.css
  css: [
    // '~/assets/css/main.css'
  ],

  srcDir: 'src/',

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // Discovered Components: .nuxt/components/readme.md
  // ~/components/global: global components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // Use buildModules
  // If module is imported during dev and build time.
  // simply, add dependency in devDependencies and use bindModules
  // Benefits: Decrease node_module size
  //           Make product startup faster
  ngrok: {token: ''},   // https://ngrok.com token
  buildModules: [
    '@nuxtjs/dotenv',
    '~/modules/ngrok',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // https://nuxtjs.org/docs/directory-structure/modules
  // Use modules
  // If modules:
  //  - provides serverMiddleware
  //  - registers Node.js runtime hook
  //  - affects vue-renderer behavior
  //  - or anything that's outside of webpack scope
  // Modules: https://go.nuxtjs.dev/config-modules
  exampleMsg: 'hello',
  modules: [
    // '~/modules/example',
    ['~/modules/example', {token: '123'}],
    '@nuxt/content'
  ],

  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
