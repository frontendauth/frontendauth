var App = require('./App')
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueResource = require('vue-resource')

var Foo = require('./components/Foo')

Vue.use(VueRouter)
  .use(VueResource)

var Bar = Vue.extend({
  template: '<p>This is bar!</p>'
})

// Create a router instance.
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
router.map({
  '/foo': {
    component: Foo
  },
  '/bar': {
    component: Bar
  }
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')
