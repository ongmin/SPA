var aboutView = require('./views/about')
var shopView = require('./views/shop')
var productView = require('./views/product')
var homepageView = require('./views/homepage')
var error404View = require('./views/error404')

var about = [/\/about$/, aboutView]
var shop = [/\/shop$/, shopView]
var product = [/\/shop\/(.+)/, productView]
var homepage = [/^\/$/, homepageView]
var error404 = [/^\/(.+)$/, error404View]

var allArray = [about, shop, product, homepage, error404]

module.exports =
  allArray.map(function (pairs) {
    var pattern = pairs[0]
    var view = pairs[1]
    return Object.assign({route: pattern}, view)
  })
