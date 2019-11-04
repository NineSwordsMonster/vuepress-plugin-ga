const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  define () {
    const { GAID } = options
    return {
      GAID,
    }
  },
  name: '@vuepress-reco/vuepress-plugin-ga',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})