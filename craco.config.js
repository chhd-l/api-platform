const path = require('path')
const fs = require('fs')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
const CracoLessPlugin = require('craco-less')

module.exports = {
  style: {
    postcssOptions: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webapck: {
    alias: {
      '@': resolveApp('src'),
    },
  },
  devServer: {
    port: 3050,
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
