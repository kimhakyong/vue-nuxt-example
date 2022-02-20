export default function ExampleModule(moduleOptions) {
  // nuxt.config.js의 options
  console.log(this.options.exampleMsg)
  // nuxt.config.js의 modules의 options
  console.log(moduleOptions.token)

  // this.nuxt : 현재 Nuxt 인스턴스 참조
  // ready : Nuxt가 작동할 준비 (ModuleContainer 및 Renderer 준비)
  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready')
  })

  // error : hoot를 호출할 때 처리되지 않은 오류
  this.nuxt.hook('error', async error => {
    console.log('Nuxt is error')
  })

  // close : Nuxt 인스턴스가 정상적으로 닫힘
  this.nuxt.hook('close', async nuxt => {
    console.log('Nuxt is close')
  })

  this.nuxt.hook('listen', async(server, {host, port}) => {
    console.log('Nuxt is listen')
  })

  this.nuxt.hook('modules:done', moduleContainer => {
    console.log('hook : modules:done')
  })

  this.nuxt.hook('render:before', rederer => {
    console.log('hook : render:before')
  })

  this.nuxt.hook('build:compile', async ({name, compiler}) => {
    console.log('hook : build:compile')
  })

  this.nuxt.hook('generate:before', async generator => {
    console.log('hook : generate:before')
  })
}

// REQUIRED if publishing the module as npm package
// module.exports.meta = require('./package.json')
