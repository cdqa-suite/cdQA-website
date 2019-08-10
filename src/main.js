import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue"
import VueTypedJs from 'vue-typed-js'
import VueCountdown from '@chenfengyuan/vue-countdown'
import BackToTop from 'vue-backtotop'
import VueAnalytics from 'vue-analytics'
import CdqaUI from 'cdqa-ui'

Vue.use(BootstrapVue)
Vue.use(VueTypedJs)
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(BackToTop)
Vue.use(VueAnalytics, {
  id: 'UA-142592681-1',
  trackEvent: true,
  autoTracking: {
    screenview: true
  },
  debug: {
    enabled: true, // default value
    trace: true, // default value
    sendHitTask: true // default value
  }
})
Vue.use(CdqaUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')