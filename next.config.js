const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
module.exports = withSass({
  cssModules: true,
  ...withCss({
    webpack: function (config, { isServer }) {
      if (!isServer) {
        config.node = {
          fs: 'empty',
          module: 'empty'
        }
      }
      return config
    }
  })
})