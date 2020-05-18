import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//set to false to avoid productionTip in the console
Vue.config.productionTip = false

//creatig new Vue object and binding it with router component
//to the element #app, that was defined in index.html
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
