import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(item => item.meta.requireLogin)) {
    if (store.state.loginState) next()
    else next({ path: '/' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
