//main.js这是项目的核心文件。全局的配置都在这个文件里面配置
import Vue from 'vue'
import App from '../app.vue'
import router from '../routes.js'
import store from '../store.js'

Vue.config.debug = true;//开启错误提示

new Vue({
    router,
    store,
    el: '#appContent',
    render: h => h(App)
})

