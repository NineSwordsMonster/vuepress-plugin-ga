const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: '@nines/vuepress-plugin-ga',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})