const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = (config, context) => {
  console.log(config)
  return {
  ...config,
  plugins: [
    ...config.plugins,
    new GenerateSW({
      swDest: 'sw.js',
      exclude: [
        /.gitkeep/
      ]
    })
  ]
  }
 };