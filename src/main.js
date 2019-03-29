// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//main.js 入口文件 主要用来初始化vue实例 使用一些插件
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './vuex/store'

Vue.config.productionTip = false;

Vue.use(ElementUI, {locale});

//引入vue-resource
require("vue-resource");

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
