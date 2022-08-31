import { createApp } from 'vue'
import App from './App.vue'
import '/@/assets/css/index.scss'
import 'amfe-flexible'
import router from "/@/router"
import Bridge from '/@/utils/bridge'
// 菠萝
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
import { Toast } from 'vant'

app.use(Toast)
let u = navigator.userAgent
let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 //android终端
let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) //ios终端
// 挂载原型
app.config.globalProperties.$bridge = Bridge
app.config.globalProperties.$model = [isAndroid, isiOS]
app.use(router).use(pinia).mount('#app')
