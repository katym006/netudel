const HtmlWebpackPlugin = require('html-webpack-plugin')

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks
  })
}

const htmlPages = [
  createPages('./src/index.html', './index.html', ['index']),
  createPages('./src/pages/articles.html', './articles.html', ['index']),
  createPages('./src/pages/about.html', './about.html', ['index']),
  createPages('./src/pages/catalog_articles.html', './catalog_articles.html', ['index']),
 
]

module.exports = htmlPages
