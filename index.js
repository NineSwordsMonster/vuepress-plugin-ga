const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  define () {
    const { GAID } = options
    return {
      GAID,
    }
  },
  name: '@nines/vuepress-plugin-ga',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
