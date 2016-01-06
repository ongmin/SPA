var Router = require('route-to-spa')

var router = new Router([
  {
    route: /\/about$/, // $ ensures we dont match paths like /aboutblablah
    title: 'About us',
    element: '#about'
  },
  {
    route: /\/shop$/,
    title: 'SG50 Shop',
    element: '#products'
  },
  {
    route: /\/shop\/(.+)/,  // These are the Red slippers, Blue slippers
    title: 'Homepage',
    element: '#details'
  },
  {
    route: /^\/$/,
    title: 'Homepage',
    element: '#landing'
  },
  {
    // route: new RegExp(''),
    route: '/^$',
    title: 'Page Not Found',
    element: '#error404'
  }
])

// /^$/ OR new RegExp('') - both means nothing
