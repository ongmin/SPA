var fallback = require('express-history-api-fallback')
var express = require('express')
var app = express()
var root = __dirname + '/'
app.use(express.static(root))
// app.use(fallback('index.html', { root: root }))
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.listen(8080)
console.log('Listening at Port 8080')
