// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* Bootstrap CSS */
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/vali-admin-master/docs/css/main.css';

/* jQuery */
import JQuery from 'jquery'
window.$ = JQuery

// FontAwesomeIcon 
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faSignInAlt, faSignOutAlt, faUserMd, faChevronRight, faChartBar, faCog, faBars, faSearch, faBell, faUser, faHome, faCircle, faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar, faSignInAlt, faSignOutAlt, faUserMd, faChevronRight, faChartBar, faCog, faBars, faSearch, faBell, faUser, faHome, faCircle, faEdit, faTrash, faPlus)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
