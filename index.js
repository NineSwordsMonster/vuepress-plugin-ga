const { path } = require('@vuepress/shared-utils')

module.exports = (options) => ({
  define () {
    const { GAID } = options
    return {
      GAID,
    }
  },
  name: '@nine-theme/vuepress-plugin-ga',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
