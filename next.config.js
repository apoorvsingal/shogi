const withTypescript = require("@zeit/next-typescript")
const TsCheckerPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({
  webpack(config, options) {
    options.isServer && config.plugins.push(new TsCheckerPlugin())
    return config
  }
})