const bankai = require('bankai/http')
const http = require('http')
const path = require('path')

const compiler = bankai(path.join(__dirname, `${process.env.npm_package_browser}.js`))
const server = http.createServer((req, res) => {
  compiler(req, res, _ => {
    res.statusCode = 404
    res.end('not found')
  })
})

server.listen(8080, _ => {
  console.log('listening on port 8080')
})