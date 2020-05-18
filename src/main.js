// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import LangEn from '../static/lang/en'

import 'jquery'
import 'jquery-ui'
/* import ampleadmin */
import './assets/material/bootstrap/dist/css/bootstrap.min.css'
import './assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min.css'
import './assets/material/css/animate.css'
import './assets/material/css/style.css'
import './assets/material/css/colors/default.css'
// import './assets/material/css/colors/megna-dark.css'
import './assets/plugins/bower_components/jquery/dist/jquery.min'
import './assets/material/bootstrap/dist/js/bootstrap.min'
import './assets/plugins/bower_components/sidebar-nav/dist/sidebar-nav.min'
import './assets/material/js/jquery.slimscroll'
import './assets/material/js/waves'
import './assets/material/js/custom.min'
import './assets/plugins/bower_components/styleswitcher/jQuery.style.switcher'
import './assets/icon/iconfont.css'//Icon Font with css

import axios from '@/http'
import store from '@/store/store'
import VeeValidate from 'vee-validate' // Form Validation, Inputs etc, Display Errors
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import listdatag from "./components/views/js/device"
import regionaldata from '@/components/views/js/regional'
import clipboard from 'clipboard';

const config = {
    //errorBagName: 'errorBags', // change if property conflicts.
    fieldsBagName: 'fieldBags',
};

Vue.use(VeeValidate, config)
Vue.use(ElementUI)
Vue.use(iView)

//Register to Vue Prototype
Vue.prototype.listdatag = listdatag
Vue.prototype.clipboard = clipboard;
Vue.prototype.regionaldata = regionaldata
Vue.prototype.$http = axios
Vue.prototype.$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const bus = new Vue()
Vue.config.productionTip = false
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages: {
    'en': LangEn
  }
})

i18n.locale = store.state.lang

/* this.$i18n.locale='en' */
/* eslint-disable no-new */
new Vue({
  el:'#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
  data: {
    bus
  }
})
