let proxyObj = {}

proxyObj['/'] = {
  ws: false,
  target: 'http://49.234.38.85:2233',
  changeOrigin: true,
  pathRewrite: {
    '^/': '/'
  }
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: proxyObj
  }
}