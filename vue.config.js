const path = require('path')

module.exports = {
  devServer: {
    port: 2222,
    open: true,
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/abc.scss'), //路径
      ],
    },
  },
}